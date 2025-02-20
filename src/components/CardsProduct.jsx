import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

function CardsProduct({ produit, onUpdateCart }) {
  const { id, name, price, description, image } = produit;
console.log(image)
  // Fonction pour ajouter un article au panier
  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
      existingItem.quantity += 1; // Augmenter la quantité
    } else {
      cart.push({ id, name, price, quantity: 1 }); // Ajouter un nouvel article
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    onUpdateCart(cart); // Mise à jour dynamique du panier
    window.dispatchEvent(new Event("cartUpdated")); // Notifier les autres composants
  };

  return (
    <div className="col-span-1 p-4 shadow-xl rounded-lg bg-white transition-transform transform hover:scale-105 w-full sm:w-72 h-auto">
      <div className="relative w-full h-48 mb-4">
        <img
          src={`${image}`}
          alt={name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col justify-between h-full">
        <h1 className="font-semibold text-xl text-gray-800 mb-2">{name}</h1>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <div className="flex justify-between items-center mb-3">
          <p className="font-semibold text-lg text-gray-900">{price.toFixed(2)} TND</p>
        </div>
      </div>
    </div>
  );
}

export default CardsProduct;
