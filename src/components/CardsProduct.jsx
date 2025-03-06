import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { IoBagHandleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';  // Importer Toastify

// Fonction pour ajouter un produit au panier
const addToBasket = (id, name, price, images) => {
  const basket = JSON.parse(localStorage.getItem('basket')) || [];
  const product = { id, name, price, images };
console.log(id)
  // Vérifier si le produit existe déjà dans le panier
  if (!basket.some(item => item.id === id)) {
    basket.push(product);
    localStorage.setItem('basket', JSON.stringify(basket));
    toast.success('Produit ajouté au panier avec succès!');
  } else {
    toast.info('Produit déjà dans le panier');
  }
};

// Fonction pour ajouter un produit aux favoris
const addToFavorites = (id, name, price, images) => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const product = { id, name, price, images };

  // Vérifier si le produit est déjà dans les favoris
  if (!favorites.some(item => item.id === id)) {
    favorites.push(product);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    toast.success('Produit ajouté aux favoris avec succès!');
  } else {
    toast.info('Produit déjà dans les favoris');
  }
};

function CardsProduct({ images, id, name, price, category }) {
  return (
    <div className="col-span-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 row-span-3 p-2 shadow-lg rounded-lg bg-white">
     
     <ToastContainer /> {/* Lien vers la page de détails du produit */}
      <Link to={`/product-details/${id}`} className="block">
        <img src={images} alt={name} className="w-full h-48 object-cover rounded-md" />
      </Link>
      <div className="flex mt-2 flex-row justify-between items-center">
        <h1 className="font-semibold text-gray-700 text-sm md:text-base">{name}</h1>
        <div className="flex font-bold space-x-2">
          {/* Bouton pour ajouter au panier */}
          <button 
            className="text-xl text-gray-600 hover:text-emerald-500" 
            onClick={() => addToBasket(id, name, price, images)}
          >
            <IoBagHandleOutline />
          </button>
          {/* Bouton pour ajouter aux favoris */}
          <button 
            className="text-xl text-gray-600 hover:text-red-500" 
            onClick={() => addToFavorites(id, name, price, images)}
          >
            <CiHeart />
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-between text-gray-600 mt-1">
        <p className="text-sm md:text-base">{category}</p>
        <p className="font-semibold text-sm md:text-base">{price} TND</p>
      </div>
    </div>
  );
}

export default CardsProduct;
