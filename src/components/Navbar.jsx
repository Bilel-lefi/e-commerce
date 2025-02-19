import React, { useState } from "react";
import { IoBagHandleOutline, IoSearchOutline, IoCloseOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { HiMenu } from "react-icons/hi";
import Logo from "../assets/logo/rj-deco.png";
import { Link } from "react-router-dom";
import Panier from "./Panier";

<Panier/>
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPanier, setShowPanier] = useState(false);
  return (
    <header className="bg-gradient-to-r from-[#53705e] to-[#fbf7d2] shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} className="w-16" alt="Logo" />
        </Link>
        {/* Navigation Desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-white font-bold hover:text-[#53705e] transition">Accueil</Link>
          <Link to="/#produits" className="text-white font-bold hover:text-[#53705e] transition">Produits</Link>
          <Link to="/rj-deco/about" className="text-white font-bold hover:text-[#53705e] transition">About</Link>
          <Link to="/ContactUs" className="text-white font-bold hover:text-[#53705e] transition">Contact</Link>
        </nav>
        {/* Icônes pour Desktop */}
        <div className="hidden md:flex items-center space-x-4 text-white text-2xl">
          <button className="hover:text-[#53705e] transition">
            <IoSearchOutline />
          </button>
          <button onClick={() => setShowPanier(!showPanier)} className="hover:text-[#53705e] transition">
            <IoBagHandleOutline />
          </button>
          <Link to="/rj-deco/favoris">
            <button className="hover:text-[#53705e] transition">
              <CiHeart />
            </button>
          </Link>
        </div>
        {/* Icônes pour Mobile : afficher uniquement le bouton Panier et le bouton Menu */}
        <div className="flex md:hidden items-center space-x-4 text-white text-2xl">
          <button onClick={() => setShowPanier(!showPanier)} className="hover:text-[#53705e] transition">
            <IoBagHandleOutline />
          </button>
          <button
            className="text-3xl hover:text-[#53705e]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <IoCloseOutline /> : <HiMenu />}
          </button>
        </div>
      </div>
      {/* Menu Mobile : Contient tous les autres composants */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#53705e] text-white py-4 space-y-4">
          <Link to="/" className="text-white font-bold hover:text-[#fbf7d2] transition" onClick={() => setIsMobileMenuOpen(false)}>Accueil</Link>
          <Link to="/#produits" className="text-white font-bold hover:text-[#fbf7d2] transition" onClick={() => setIsMobileMenuOpen(false)}>Produits</Link>
          <Link to="/rj-deco/about" className="text-white font-bold hover:text-[#fbf7d2] transition" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/#ContactUs" className="text-white font-bold hover:text-[#fbf7d2] transition" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <div className="flex space-x-4 text-2xl">
            <button className="hover:text-[#fbf7d2] transition">
              <IoSearchOutline />
            </button>
            <Link to="/rj-deco/favoris" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="hover:text-[#fbf7d2] transition">
                <CiHeart />
              </button>
            </Link>
          </div>
        </div>
      )}
      {showPanier && <Panier onClose={() => setShowPanier(false)} />}
    </header>
  );
}

export default Navbar;
