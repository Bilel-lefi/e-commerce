import React, { useState, useEffect } from "react";
import { IoBagHandleOutline, IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Panier = ({ onClose }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadCart = () => {
      // Charger le panier depuis le localStorage
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      // Si des produits sont présents dans le panier, s'assurer que la quantité est 1 par défaut
      const updatedCart = storedCart.map(item => ({
        ...item,
        quantity: item.quantity || 1,  // Mettre la quantité par défaut à 1
      }));
      setItems(updatedCart);
    };

    loadCart();
    window.addEventListener("cartUpdated", loadCart);

    return () => window.removeEventListener("cartUpdated", loadCart);
  }, []);

  const updateCart = (newCart) => {
    setItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const increaseQuantity = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updatedItems);
  };

  const decreaseQuantity = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(item.quantity - 1, 1) }  // Ne pas descendre en dessous de 1
        : item
    );
    updateCart(updatedItems);
  };

  const handleRemoveItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    updateCart(updatedItems);
  };

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

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
        {items.length > 0 ? (
          items.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-[#fbf7d2] text-[#53705e] px-4 py-2 rounded-lg"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <span className="text-sm">
                  {(item.price * item.quantity).toFixed(2)} €
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="text-[#53705e] font-bold px-2"
                >
                  -
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="text-[#53705e] font-bold px-2"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-500"
                >
                  <IoCloseOutline />
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-300">Votre panier est vide.</p>
        )}
      </ul>

      <div className="border-t border-gray-300 mt-4 pt-4">
        <p className="font-semibold">Total: {total.toFixed(2)} €</p>
        <button
          onClick={() => navigate("/confirmation-commande")}
          className="w-full mt-3 bg-[#fbf7d2] text-[#53705e] font-bold py-2 rounded-lg hover:bg-[#f5eeb2] transition"
          disabled={items.length === 0}
        >
          Passer la commande
        </button>
      </div>
    </div>
  );
};

export default Panier;
