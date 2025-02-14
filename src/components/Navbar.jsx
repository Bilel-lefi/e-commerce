import React, { useState } from "react";
import { IoBagHandleOutline, IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import Logo from "../assets/logo/rj-deco.png";
import { Link } from "react-router-dom";

const Panier = ({ onClose }) => {
  const items = [
    { id: 1, name: "Lampe de table", price: 49.99 },
    { id: 2, name: "Tapis berbère", price: 120.0 },
    { id: 3, name: "Vase en céramique", price: 35.5 },
  ];

  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="fixed top-0 right-0 h-full w-72 bg-emerald-900 text-white p-4 shadow-lg z-50">
      <h2 className="text-xl font-bold mb-4 flex items-center justify-between gap-2">
        <IoBagHandleOutline className="text-2xl" /> Mon Panier
        <button onClick={onClose} className="text-white hover:text-red-500 text-xl">x</button>
      </h2>
      <ul className="flex-1 overflow-y-auto space-y-3">
        {items.map((item) => (
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

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPanier, setShowPanier] = useState(false);

  return (
    <header className="header bg-white group hover:bg-emerald-900 shadow-md sticky top-0 z-50">
      <div className="mx-14 flex justify-between items-center px-6 py-2">
        <div className="flex justify-center group-hover:bg-white p-1 rounded-full w-full xs:w-auto sm:w-auto md:w-auto">
          <a href="index.html">
            <Link to="/">
            <img src={Logo} className="w-16" alt="Logo" />
            </Link>
            
          </a>
        </div>

        <nav className="justify-center text-gray-500 group-hover:text-white hidden md:flex w-full justify-start">
  <ul className="flex gap-5">
    <li><Link to="/" className="transition-colors">Accueil</Link></li>
    <li><Link to="/#produits" className="transition-colors">Produits</Link></li>
    <li><Link to="/rj-deco/about" className="transition-colors">About</Link></li>
    <li><Link to="/rj-deco/contact" className="transition-colors">Contact</Link></li>
  </ul>
</nav>

        <button
          className="md:hidden text-2xl group-hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          &#9776;
        </button>

        <div className="flex gap-5 text-2xl group-hover:text-white text-gray-500 font-bold hidden md:flex">
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
          
        </div>
      </div>

      {showPanier && <Panier onClose={() => setShowPanier(false)} />}
    </header>
  );
}

export default Navbar;
