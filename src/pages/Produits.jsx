import React from 'react'
import a from "../assets/collection_grid_1.jpg"
import b from "../assets/collection_grid_2.jpg"
import c from "../assets/collection_grid_3.jpg"
import d from "../assets/collection_grid_4.jpg"
import e from "../assets/collection_grid_5.jpg"
import { IoBagHandleOutline } from 'react-icons/io5'
import { CiHeart } from 'react-icons/ci'
import CardsProduct from '../components/CardsProduct'
function Produits() {
  return (
 <>  
 <div id="produits" className="mt-5 min-h-screen flex flex-col py-7 w-full justify-center items-center">
 <h1 className="text-3xl uppercase font-light text-gray-600">- Nos Produits -</h1>

 <ul className="flex gap-5 font-semibold my-9 groupe">
    <li className="hover:text-emerald-900 cursor-pointer">Tous</li>
    <li className="hover:text-emerald-900 cursor-pointer">Tableaux</li>
    <li className="hover:text-emerald-900 cursor-pointer">Logo</li>
    <li className="hover:text-emerald-900 cursor-pointer">Accessoires</li>
 </ul>
 <div className="mx-4 sm:mx-8 lg:mx-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {[...Array(12)].map((_, i) => (
    <CardsProduct key={i} images={b} />
  ))}
</div>
 </div>

</>    
  )
}

export default Produits
