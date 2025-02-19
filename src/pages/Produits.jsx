import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Import de Link pour la navigation
import b from "../assets/collection_grid_2.jpg";
import { IoBagHandleOutline } from "react-icons/io5"; // Import de l'icône
import { CiHeart } from "react-icons/ci"; // Assurez-vous d'importer également cette icône
import CardsProduct from "../components/CardsProduct";
import AOS from "aos"; // Importer AOS
import "aos/dist/aos.css"; // Importer les styles de AOS

function Produits() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée des animations
      once: true, // Animation exécutée une seule fois
    });
  }, []);

  return (
    <div
      id="produits"
      className="min-h-screen flex flex-col items-center py-10 px-4 sm:px-10"
    >
      {/* Titre stylisé avec animation AOS */}
      <h1
        className="text-4xl font-bold border-b-2 border-gray-600 font-light text-gray-600 uppercase pb-2"
        data-aos="fade-up"
      >
        Nos Produits
      </h1>

      {/* Catégories avec animation AOS */}
      <ul
        className="flex gap-6 font-semibold my-6 text-lg"
        data-aos="fade-in"
        data-aos-delay="300"
      >
        {["Tous", "Tableaux", "Logo", "Led Neon"].map((category, index) => (
          <li
            key={index}
            className="cursor-pointer px-4 py-2 rounded-lg border border-[#53705e] bg-[#000] text-[#fff] font-medium shadow-md hover:bg-[#53705e] hover:text-[#fbf7d2] transition"
          >
            {category}
          </li>
        ))}
      </ul>

      {/* Grille des Produits avec animation AOS */}
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="relative group bg-white hover:bg-emerald-600 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={i * 100} // Décalage des animations pour chaque élément
          >
            <CardsProduct images={b} />

            {/* Info Card on hover */}
            <div className="p-5 absolute inset-0 bg-emerald-700 bg-opacity-50 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Détails Button */}
              <Link
                to={`/product-details/${i}`} // Utilisez un ID unique pour chaque produit
                className="max-w-max max-h-max px-3 py-2 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] absolute inset-0 flex justify-center items-center bg-transparent text-white rounded-full opacity-0 group-hover:opacity-100 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300"
              >
                Détails
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produits;
