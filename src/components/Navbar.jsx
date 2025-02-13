import React, { useState } from "react";
import { IoBagHandleOutline, IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5"; // Importer l'icône 'X'
import Logo from "../assets/logo/rj-deco.png";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header bg-white group hover:bg-emerald-900 shadow-md sticky top-0 z-50">
      <div className="mx-14 flex justify-between items-center px-6 py-2">
        {/* Logo */}
        <div className="flex justify-center group-hover:bg-white p-1 rounded-full w-full xs:w-auto sm:w-auto md:w-auto">
          <a href="index.html">
            {/* <p className="text-emerald-700 text-nowrap font-bold text-3xl">Rj-déco</p> */}
            <img src={Logo} className="w-16" alt="" srcset="" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="justify-center text-gray-500 group-hover:text-white  navigation hidden md:flex w-full justify-start">
          <ul className="flex gap-5">
            <li className="relative group">
              <a
                href="#"
                className="  transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="  transition-colors"
              >
                Produit
              </a>
            </li>
            <li className="relative group">
              <a
                href="#"
                className="  transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="  transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl group-hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          &#9776;
        </button>

        {/* Mobile Navigation (Dropdown) */}
        <div
          className={`md:hidden absolute top-0 left-0 w-full bg-white shadow-lg transition-transform transform ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex justify-between items-center p-4">
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl text-gray-500"
              aria-label="Close Menu"
            >
              <IoCloseOutline />
            </button>
          </div>
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Category
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                About
              </a>
            </li>

            {/* Mobile Icons */}
            <li>
              <button
                aria-label="Search"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                <IoSearchOutline className="text-2xl" />
              </button>
            </li>
            <li>
              <button
                aria-label="Profile"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                <IoPersonOutline className="text-2xl" />
              </button>
            </li>
            <li>
              <button
                aria-label="Cart"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                <IoBagHandleOutline className="text-2xl" />
              </button>
            </li>
            <li>
              <button
                aria-label="Favorites"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                <CiHeart className="text-2xl" />
              </button>
            </li>
          </ul>
        </div>

        {/* Icons (on Desktop) */}
        <div className="flex gap-5 text-2xl group-hover:text-white text-gray-500  font-bold hidden md:flex">
          <button
            aria-label="Search"
            className="hover:text-yellow-500 transition-colors"
          >
            <IoSearchOutline />
          </button>
          <button
            aria-label="Profile"
            className="hover:text-yellow-500 transition-colors"
          >
            <IoPersonOutline />
          </button>
          <button
            aria-label="Cart"
            className="hover:text-yellow-500 transition-colors"
          >
            <IoBagHandleOutline />
          </button>
          <button
            aria-label="Favorites"
            className="hover:text-yellow-500 transition-colors"
          >
            <CiHeart />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
