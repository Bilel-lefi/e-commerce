import React, { useEffect } from "react";
import a from "../assets/download.jpeg";
import b from "../assets/download6.jpeg";
import c from "../assets/download7.jpeg";
import d from "../assets/download3.jpeg";
import e from "../assets/download4.jpeg";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import AOS from "aos"; // Importer AOS
import "aos/dist/aos.css"; // Importer les styles de AOS

function BestSller() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée des animations
      once: true, // Animation exécutée une seule fois
    });
  }, []);
  return (
    <>
      <div className="flex py-7 w-full justify-center items-center">
        <h1
          className="text-4xl font-bold border-b-2 border-gray-600 font-light text-gray-600 pb-2"
          data-aos="fade-up"
        >
          Produit Populaire
        </h1>
      </div>
      <div className="grid grid-cols-7 grid-rows-6 gap-4">
        <div
          className="col-span-3 row-span-6 relative group"
          data-aos="fade-up"
        >
          <img src={a} alt="Custom Neon Tableaux" className="w-full h-auto" />
          <div className="p-5 absolute inset-0 bg-emerald-700 bg-opacity-50 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-xl font-bold text-white mb-4">
              Tableaux en neon personnalisés
            </h1>
            <p className="text-white mb-2">LOGO personnalisé</p>
            <p className="text-lg text-white mb-4">Dimension 80*40</p>
            <div className="flex text-3xl">
              <button className="text-white m-3 hover:text-emerald-700">
                <IoBagHandleOutline />
              </button>
              <button className="text-white m-3 hover:text-emerald-700">
                <CiHeart />
              </button>
            </div>
          </div>
        </div>
        <div
          className="col-span-2 row-span-3 col-start-4 relative group"
          data-aos="fade-right"
        >
          <img src={b} alt="" className="w-full h-auto" />
          <div className="p-5 h-auto absolute inset-0 bg-emerald-700 bg-opacity-50 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-xl font-bold text-white mb-4">
              Tableaux en neon personnalisés
            </h1>
            <p className="text-white mb-2">LOGO personnalisé</p>
            <p className="text-white mb-4">Dimension 80*40</p>
            <div className="flex text-3xl">
              <button className="text-white m-3 hover:text-emerald-700">
                <IoBagHandleOutline />
              </button>
              <button className="text-white m-3 hover:text-emerald-700">
                <CiHeart />
              </button>
            </div>
          </div>
        </div>
        <div
          className="col-span-2 row-span-3 col-start-6 relative group"
          data-aos="fade-left"
        >
          <img src={c} alt="" className="w-full h-auto" />
          <div className="p-5 h-auto absolute inset-0 bg-emerald-700 bg-opacity-50 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-xl font-bold text-white mb-4">
              Tableaux en neon personnalisés
            </h1>
            <p className="text-white mb-2">LOGO personnalisé</p>
            <p className="text-white mb-4">Dimension 80*40</p>
            <div className="flex text-3xl">
              <button className="text-white m-3 hover:text-emerald-700">
                <IoBagHandleOutline />
              </button>
              <button className="text-white m-3 hover:text-emerald-700">
                <CiHeart />
              </button>
            </div>
          </div>
        </div>
        <div
          className="col-span-2 row-span-3 col-start-4 row-start-4 relative group"
          data-aos="fade-up"
        >
          <img src={d} alt="" className="w-full h-auto" />
          <div className="p-5 h-auto absolute inset-0 bg-emerald-700 bg-opacity-50 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-xl font-bold text-white mb-4">
              Tableaux en neon personnalisés
            </h1>
            <p className="text-white mb-2">LOGO personnalisé</p>
            <p className="text-white mb-4">Dimension 80*40</p>
            <div className="flex text-3xl">
              <button className="text-white m-3 hover:text-emerald-700">
                <IoBagHandleOutline />
              </button>
              <button className="text-white m-3 hover:text-emerald-700">
                <CiHeart />
              </button>
            </div>
          </div>
        </div>
        <div
          className="col-span-2 row-span-3 col-start-6 row-start-4 relative group"
          data-aos="fade-up"
        >
          <img src={e} alt="" className="w-full h-auto" />
          <div className="p-5 h-auto absolute inset-0 bg-emerald-700 bg-opacity-50 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-xl font-bold text-white mb-4">
              Tableaux en neon personnalisés
            </h1>
            <p className="text-white mb-2">LOGO personnalisé</p>
            <p className="text-white mb-4">Dimension 80*40</p>
            <div className="flex text-3xl">
              <button className="text-white m-3 hover:text-emerald-700">
                <IoBagHandleOutline />
              </button>
              <button className="text-white m-3 hover:text-emerald-700">
                <CiHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BestSller;
