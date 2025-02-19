import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { IoBagHandleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom'; 
function CardsProduct({ images, id }) { // Ajout de l'id du produit pour la redirection dynamique
  return (
    <div className="col-span-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 row-span-3 p-2 shadow-lg rounded-lg bg-white">
      {/* <Link to={`/product-details`}>  */}
        <img src={images} alt="" className="w-full h-48 object-cover rounded-md" />
      {/* </Link> */}
      <div className="flex mt-2 flex-row justify-between items-center">
        <h1 className="font-semibold text-gray-700 text-sm md:text-base">Logo restaurant</h1>
        <div className="flex font-bold space-x-2">
          <button className="text-xl text-gray-600 hover:text-emerald-500"><IoBagHandleOutline /></button>
          <button className="text-xl text-gray-600 hover:text-red-500"><CiHeart /></button>
        </div>
      </div>
      <div className="flex flex-row justify-between text-gray-600 mt-1">
        <p className="text-sm md:text-base">Tableau 40*60</p>
        <p className="font-semibold text-sm md:text-base">80DT</p>
      </div>
    </div>
  );
}

export default CardsProduct;
