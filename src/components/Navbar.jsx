import React, { useState, useEffect } from "react";
import { IoBagHandleOutline, IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import Logo from "../assets/logo/rj-deco.png";
import { Link } from "react-router-dom";

const Panier = ({ onClose }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("basket")) || [];
    setItems(storedItems);
  }, []);

  const total = items.reduce((acc, item) => acc + item.price, 0);

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("basket", JSON.stringify(updatedItems));
  };

  return (
    <div
      onMouseLeave={onClose}
      className="fixed top-0 right-0 h-full w-72 md:w-80 lg:w-96 bg-emerald-900 text-white p-4 shadow-lg z-50"
    >
      <h2 className="text-xl font-bold mb-4 flex justify-between items-center">
        <IoBagHandleOutline className="text-2xl" /> Mon Panier
        <button onClick={onClose} className="text-white hover:text-red-500 text-xl">x</button>
      </h2>
      
      <ul className="overflow-y-auto space-y-3 max-h-[70vh]">
        {items.length > 0 ? (
          items.map((item) => (
            <li key={item.id} className="flex justify-between items-center bg-emerald-700 px-3 py-2 rounded-lg">
              <div>
                <p className="font-medium">{item.name}</p>
                <span className="text-sm text-gray-200">{item.price.toFixed(2)} TND</span>
              </div>
              <button onClick={() => removeItem(item.id)} className="text-white hover:text-red-500">
                <IoCloseOutline />
              </button>
            </li>
          ))
        ) : (
          <li className="text-center text-gray-300">Votre panier est vide</li>
        )}
      </ul>

      <div className="border-t border-gray-300 mt-4 pt-4">
        <p className="font-semibold">Total: {total.toFixed(2)} TND</p>
        <Link to={"passer-commande"}>
        <button className="w-full mt-3 bg-white text-emerald-900 font-bold py-2 rounded-lg hover:bg-gray-100 transition">
          Passer la commande
        </button>
        </Link>
        
      </div>
    </div>
  );
};


function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPanier, setShowPanier] = useState(false);

  return (
    <header className="header bg-white group hover:bg-emerald-900 shadow-md sticky top-0 z-50">
      <div className="mx-4 md:mx-14 flex justify-between items-center px-4 py-2">
        <Link to="/">
          <img src={Logo} className="w-14 md:w-16" alt="Logo" />
        </Link>

        <nav className="hidden md:flex text-gray-500 group-hover:text-white w-full justify-center">
          <ul className="flex gap-4 md:gap-5">
            <li><Link to="/" className="transition-colors">Accueil</Link></li>
            <li><Link to="/#produits" className="transition-colors">Produits</Link></li>
            <li><Link to="/rj-deco/about" className="transition-colors">About</Link></li>
            <li><Link to="/rj-deco/contact" className="transition-colors">Contact</Link></li>
          </ul>
        </nav>

        <div className="flex items-center gap-4 text-2xl text-gray-500 group-hover:text-white">
          <button className="hover:text-yellow-500"><IoSearchOutline /></button>
          <button
            className="hover:text-yellow-500"
            onClick={() => setShowPanier(!showPanier)}
          >
            <IoBagHandleOutline />
          </button>
          <Link to="/rj-deco/favoris">
            <button className="hover:text-yellow-500"><CiHeart /></button>
          </Link>

          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            &#9776;
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden bg-emerald-900 text-white p-4 space-y-4">
          <ul className="space-y-2">
            <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Accueil</Link></li>
            <li><Link to="/#produits" onClick={() => setIsMobileMenuOpen(false)}>Produits</Link></li>
            <li><Link to="/rj-deco/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
            <li><Link to="/rj-deco/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      )}

      {showPanier && <Panier onClose={() => setShowPanier(false)} />}
    </header>
  );
}

export default Navbar;
