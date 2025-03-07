import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';  // Importer Toastify
import 'react-toastify/dist/ReactToastify.css';  // Importer les styles
import { FaRegTrashCan } from "react-icons/fa6";

const OrderDetail = () => {
  const [order, setOrder] = useState({
    firstName: '',
    lastName: '',
    city: '',
    phone: '',
  });

  const [basket, setBasket] = useState([]);
  const [isEmpty, setEmpty] = useState(true)
  // Récupérer les produits depuis le localStorage à l'initialisation du composant
  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem('basket')) || [];
    setBasket(storedBasket);
    if (basket.length > 0) { setEmpty(false)}
  }, []);

  // Fonction pour supprimer un produit du localStorage
  const handleRemoveProduct = (productId) => {
    const updatedBasket = basket.filter(product => product.id !== productId);
    localStorage.setItem('basket', JSON.stringify(updatedBasket));
    setBasket(updatedBasket);
    toast.success("Produit supprimé du panier!");  // Notification de succès
  };

  // Fonction pour modifier la quantité d'un produit
  const handleQuantityChange = (productId, amount) => {
    const updatedBasket = basket.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: Math.max(1, product.quantity + amount), // Assure une quantité >= 1
        };
      }
      return product;
    });
    localStorage.setItem('basket', JSON.stringify(updatedBasket));
    setBasket(updatedBasket);
    //toast.info(`Quantité modifiée ! Nouvelle quantité: ${updatedBasket.find(product => product.id === productId).quantity}`);
  };

  // Fonction pour gérer les changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  // Fonction de soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderWithBasket = { ...order, basket }; // Inclure le panier dans la commande
    console.log("Commande soumise:", orderWithBasket);  // Afficher la commande avec les produits et leurs quantités dans la console
    try {
      const response = await axios.post('http://localhost:5000/api/orders', orderWithBasket);
      console.log('Order created:', response.data);
      toast.success('Commande passée avec succès !');  // Notification de succès
      setOrder({ firstName: '', lastName: '', city: '', phone: '' });
    } catch (error) {
      console.error('Erreur lors de la commande:', error);
      toast.error('Une erreur est survenue.');  // Notification d'erreur
    }
  };

  // Calculer le total pour chaque produit
  const calculateProductTotal = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };

  // Calculer le total de la commande
  const calculateTotal = () => {
    return basket.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Passer une commande</h2>

      <div className="mb-4">
        <label className="block mb-2">Prénom</label>
        <input type="text" name="firstName" value={order.firstName} onChange={handleChange} required className="w-full p-2 border rounded" />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Nom</label>
        <input type="text" name="lastName" value={order.lastName} onChange={handleChange} required className="w-full p-2 border rounded" />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Ville</label>
        <input type="text" name="city" value={order.city} onChange={handleChange} required className="w-full p-2 border rounded" />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Téléphone</label>
        <input type="tel" name="phone" value={order.phone} onChange={handleChange} required className="w-full p-2 border rounded" />
      </div>

      <h3 className="text-xl font-semibold mt-6">Produits dans le panier :</h3>
      <ul className="mb-4">
        {basket.length === 0 ? (
          <li>Aucun produit dans le panier</li>
        ) : (
          basket.map((product) => (
            <li key={product.id} className="flex justify-between items-center">
              <div className="flex gap-4 text-wrap w-2/5">
                <span>{product.name}</span>
                <span>${product.price}</span>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => handleQuantityChange(product.id, -1)}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  -
                </button>
                <span>{product.quantity}</span>
                <button
                  type="button"
                  onClick={() => handleQuantityChange(product.id, 1)}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  +
                </button>
              </div>
              <span>${calculateProductTotal(product.price, product.quantity)}</span>
              <button
                type="button"
                onClick={() => handleRemoveProduct(product.id)}
                className="text-red-500 "
              >
                <FaRegTrashCan/>
              </button>
            </li>
          ))
        )}
      </ul>

      <div className="text-xl font-bold">
        Total: ${calculateTotal()}
      </div>

      <button type="submit" disabled={isEmpty} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mt-4">
        {isEmpty ? "Passer la commande" : "Ajouter des articles pour passer une commande" }
      </button>

      {/* Ajouter le container Toastify */}
      <ToastContainer />
    </form>
  );
};

export default OrderDetail;
