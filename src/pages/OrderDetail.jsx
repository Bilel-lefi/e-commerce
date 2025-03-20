import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegTrashCan } from "react-icons/fa6";

const OrderDetail = () => {
  const [order, setOrder] = useState({
    firstName: '',
    lastName: '',
    city: '',
    gov: '',
    phone: '',
  });

  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem('basket')) || [];
    setBasket(storedBasket);
  }, []);

  const handleRemoveProduct = (productId) => {
    const updatedBasket = basket.filter(product => product.id !== productId);
    localStorage.setItem('basket', JSON.stringify(updatedBasket));
    setBasket(updatedBasket);
    toast.success("Produit supprimé du panier !");
  };

  const handleQuantityChange = (productId, amount) => {
    const updatedBasket = basket.map(product => {
      if (product.id === productId) {
        return { ...product, quantity: Math.max(1, product.quantity + amount) };
      }
      return product;
    });
    localStorage.setItem('basket', JSON.stringify(updatedBasket));
    setBasket(updatedBasket);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const calculateTotal = () => {
    return basket.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (basket.length === 0) {
      toast.error("Votre panier est vide !");
      return;
    }

    const orderData = {
      firstName: order.firstName,
      lastName: order.lastName,
      phone: order.phone,
      shippingAddress: {
        city: order.city,
        gov: order.gov
      },
      products: basket.map(product => ({
        name: product.name,
        price: product.price,
        quantity: product.quantity
      })),
      totalPrice: calculateTotal(),
      status: "En instance",
    };

    try {
      await axios.post('http://localhost:4000/api/order', orderData);
      toast.success('Commande passée avec succès !');
      setOrder({ firstName: '', lastName: '', city: '', gov: '', phone: '' });
      localStorage.removeItem('basket');
      setBasket([]);
    } catch (error) {
      toast.error('Erreur lors de la commande.');
    }
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
        <label className="block mb-2">Gouvernorat</label>
        <input type="text" name="gov" value={order.gov} onChange={handleChange} required className="w-full p-2 border rounded" />
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
                <button type="button" onClick={() => handleQuantityChange(product.id, -1)} className="bg-gray-300 px-4 py-2 rounded">-</button>
                <span>{product.quantity}</span>
                <button type="button" onClick={() => handleQuantityChange(product.id, 1)} className="bg-gray-300 px-4 py-2 rounded">+</button>
              </div>
              <span>${(product.price * product.quantity).toFixed(2)}</span>
              <button type="button" onClick={() => handleRemoveProduct(product.id)} className="text-red-500">
                <FaRegTrashCan />
              </button>
            </li>
          ))
        )}
      </ul>

      <div className="text-xl font-bold">Total: ${calculateTotal()}</div>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mt-4">
        Passer la commande
      </button>

      <ToastContainer />
    </form>
  );
};

export default OrderDetail;
