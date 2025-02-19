import React, { useState } from "react";
import { IoBagHandleOutline, IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom"; // Importation de useNavigate

const Panier = ({ onClose }) => {
  const navigate = useNavigate(); // Déclaration de la fonction de navigation
  const items = [
    { id: 1, name: "Lampe de table", price: 49.99 },
    { id: 2, name: "Tapis berbère", price: 120.0 },
    { id: 3, name: "Vase en céramique", price: 35.5 },
  ];

  const total = items.reduce((acc, item) => acc + item.price, 0);

  // Fonction qui gère la redirection vers la page de confirmation
  const handleCommandeClick = () => {
    navigate("/confirmation-commande"); // Redirection vers la page de confirmation
  };

  return (
    <div className="fixed top-0 right-0 h-full w-80 bg-[#53705e] text-white p-5 shadow-xl z-50 rounded-l-lg">
      <h2 className="text-xl font-bold mb-4 flex items-center justify-between">
        <IoBagHandleOutline className="text-2xl" /> Mon Panier
        <button
          onClick={onClose}
          className="text-white hover:text-red-500 text-2xl"
        >
          <IoCloseOutline />
        </button>
      </h2>
      <ul className="flex-1 overflow-y-auto space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center bg-[#fbf7d2] text-[#53705e] px-4 py-2 rounded-lg"
          >
            <div>
              <p className="font-medium">{item.name}</p>
              <span className="text-sm">{item.price.toFixed(2)} €</span>
            </div>
            <button className="text-[#53705e] hover:text-red-500">
              <IoCloseOutline />
            </button>
          </li>
        ))}
      </ul>
      <div className="border-t border-gray-300 mt-4 pt-4">
        <p className="font-semibold">Total: {total.toFixed(2)} €</p>
        <button
          onClick={handleCommandeClick} // Ajouter la fonction de redirection ici
          className="w-full mt-3 bg-[#fbf7d2] text-[#53705e] font-bold py-2 rounded-lg hover:bg-[#f5eeb2] transition"
        >
          Passer la commande
        </button>
      </div>
    </div>
  );
};

export default Panier;
