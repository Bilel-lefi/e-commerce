import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails({ onCartUpdate }) {
  // Ajout d'un prop pour mettre à jour le panier global
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Récupérer le produit depuis l'API
    const fetchProduit = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/articles/${id}`
        );
        if (!response.ok) {
          throw new Error("Impossible de récupérer le produit");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Erreur lors de la récupération du produit:", error);
      }
    };

    fetchProduit();

    // Charger le panier depuis localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, [id]);

  const handleOrder = () => {
    if (!product) return;

    const updatedCart = [...cart, product]; // Ajouter l'article au panier
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Sauvegarde dans localStorage

    if (onCartUpdate) {
      onCartUpdate(updatedCart); // Mettre à jour le panier global
    }
  };

  return (
    <div className="my-16 max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg text-[#3e3e3e] sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl">
      {/* Image */}
      <div className="mb-4">
        <img
          src={
            product?.image ||
            "https://via.placeholder.com/400x300?text=Vase+Ceramique"
          }
          alt={product?.name || "Produit"}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      {/* Informations du produit */}
      <h2 className="text-2xl font-bold mb-2 text-center md:text-left">
        {product?.name}
      </h2>
      <p className="text-sm mb-4 text-center md:text-left">
        {product?.description}
      </p>

      {/* Prix */}
      <div className="text-xl font-semibold mb-6 text-center md:text-left">
        {product?.price} TND
      </div>

      {/* Bouton Commander */}
      <button
        onClick={handleOrder}
        className="w-full bg-emerald-900 text-white py-3 rounded-lg hover:bg-emerald-800 transition duration-300"
      >
        Ajouter au panier
      </button>
    </div>
  );
}

export default ProductDetails;
