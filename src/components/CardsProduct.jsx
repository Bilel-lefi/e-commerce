import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const addToBasket = (id, name, price, images) => {
  const basket = JSON.parse(localStorage.getItem("basket")) || [];
  const quantity = 1;
  const product = { id, name, price, images, quantity };

  if (!basket.some((item) => item.id === id)) {
    basket.push(product);
    localStorage.setItem("basket", JSON.stringify(basket));
    toast.success("Produit ajouté au panier avec succès!");
  } else {
    toast.info("Produit déjà dans le panier");
  }
};

const addToFavorites = (id, name, price, images) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const product = { id, name, price, images };

  if (!favorites.some((item) => item.id === id)) {
    favorites.push(product);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    toast.success("Produit ajouté aux favoris avec succès!");
  } else {
    toast.info("Produit déjà dans les favoris");
  }
};

function CardsProduct({ images, id, name, price, category }) {
  const navigate = useNavigate(); // Hook pour naviguer avec state

  return (
    <div className="col-span-1 p-2 shadow-lg rounded-lg bg-white transition-all duration-300">
      <ToastContainer />
      {/* Naviguer vers ProductDetails en envoyant les données du produit */}
      <button
        onClick={() => navigate(`/product-details/${id}`, { state: { id, name, price, images, category } })}
        className="block w-full"
      >
        <img src={images} alt={name} className="w-full h-48 object-cover rounded-md" />
      </button>
      <div className="flex mt-2 flex-row justify-between items-center">
        <h1 className="font-semibold text-gray-700 text-sm md:text-base">{name}</h1>
        <div className="flex font-bold space-x-2">
          <button className="text-xl text-gray-600 hover:text-emerald-500" onClick={() => addToBasket(id, name, price, images)}>
            <IoBagHandleOutline />
          </button>
          <button className="text-xl text-gray-600 hover:text-red-500" onClick={() => addToFavorites(id, name, price, images)}>
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
