import React from 'react';
import { IoBagHandleOutline, IoCloseOutline } from "react-icons/io5";

const Panier = () => {
  const items = [
    { id: 1, name: "Lampe de table", price: 49.99 },
    { id: 2, name: "Tapis berbère", price: 120.00 },
    { id: 3, name: "Vase en céramique", price: 35.50 },
  ];

  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="h-full flex flex-col p-4">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <IoBagHandleOutline className="text-2xl" /> Mon Panier
      </h2>

      <ul className="flex-1 overflow-y-auto space-y-3">
        {items.map(item => (
          <li key={item.id} className="flex justify-between items-center bg-emerald-700 px-3 py-2 rounded-lg">
            <div>
              <p className="font-medium">{item.name}</p>
              <span className="text-sm text-gray-200">{item.price.toFixed(2)} €</span>
            </div>
            <button className="text-white hover:text-red-500">
              <IoCloseOutline />
            </button>
          </li>
        ))}
      </ul>

      <div className="border-t border-gray-300 mt-4 pt-4">
        <p className="font-semibold">Total: {total.toFixed(2)} €</p>
        <button className="w-full mt-3 bg-white text-emerald-900 font-bold py-2 rounded-lg hover:bg-gray-100 transition">
          Passer la commande
        </button>
      </div>
    </div>
  );
};

export default Panier;
