import React from "react";
import { CiHeart } from "react-icons/ci";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function ProductDetails() {
  const location = useLocation();
  const product = location.state; // Récupération des données envoyées

  const addToFavorites = (product) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  //const product = { id, name, price, images };
  //  console.log(product.id)
  if (!favorites.some((item) => item.id === product.id)) {
    favorites.push(product);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    toast.success("Produit ajouté aux favoris avec succès!");
  } else {
    toast.info("Produit déjà dans les favoris");
  }
};


const addToBasket = (product) => {
  const basket = JSON.parse(localStorage.getItem("basket")) || [];
  const productWithQuantity = { ...product, quantity: 1 };

 // const product = { id, name, price, images, quantity };

  if (!basket.some((item) => item.id === product.id)) {
    basket.push(productWithQuantity);
    localStorage.setItem("basket", JSON.stringify(basket));
    toast.success("Produit ajouté au panier avec succès!");
  } else {
    toast.info("Produit déjà dans le panier");
  }
};

  if (!product) {
    return <p className="text-center text-gray-600">Aucun produit trouvé.</p>;
  }

  const handleOrder = () => {
    alert(`Commande passée pour : ${product.name}`);
  };

  return (
    <>
    <div className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-xl text-gray-800 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="mb-5 overflow-hidden rounded-xl">
        <img src={product.images} alt={product.name} className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105" />
      </div>
      <h2 className="text-2xl font-extrabold mb-3 text-center md:text-left">{product.name}</h2>
      <p className="text-gray-600 text-sm mb-4 text-center md:text-left leading-relaxed">{product.category}</p>
      <div className="text-xl font-semibold text-emerald-800 mb-6 text-center md:text-left">{product.price} TND</div>
      {/* <button onClick={handleOrder} className="w-full bg-emerald-700 text-white my-2 py-3 rounded-lg font-semibold text-base shadow-md hover:bg-emerald-600 active:bg-emerald-900 transition-all duration-300">
        Commander maintenant
      </button> */}
      
      <div className="flex flex-row">
      <button onClick={() => addToBasket(product)} className="w-4/5 bg-emerald-700 text-white py-3 rounded-lg font-semibold text-base shadow-md hover:bg-emerald-600 active:bg-emerald-900 transition-all duration-300">
        Ajouter au pannier
      </button>
      <button className="w-1/5 ml-2 text-3xl flex justify-center items-center text-center bg-red-500 rounded-md font-bold text-white" onClick={() => addToFavorites(product)}>
        <CiHeart />
      </button>
      </div>
      
    </div>
    <ToastContainer />
</>
  );
}

export default ProductDetails;
