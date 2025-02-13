import React from 'react'
import a from "../assets/collection_grid_1.jpg"
import b from "../assets/collection_grid_2.jpg"
import c from "../assets/collection_grid_3.jpg"
import d from "../assets/collection_grid_4.jpg"
import e from "../assets/collection_grid_5.jpg"
import { IoBagHandleOutline } from 'react-icons/io5'
import { CiHeart } from 'react-icons/ci'
function BestSller() {
  return (
 <>  
 <div className="mt-5 flex py-7 w-full justify-center items-center">
 <h1 className="text-3xl uppercase font-light text-gray-600">- Produit Populaire -</h1>
 </div>
<div className="m-10 grid grid-cols-7 grid-rows-6 gap-4">
<div className="col-span-3 row-span-6 relative group">
  <img src={a} alt="Custom Neon Tableaux" className="w-full h-auto" />

  <div className="p-5 absolute inset-0 bg-emerald-700 bg-opacity-50 
  flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <h1 className="text-xl font-bold text-white mb-4">Tableaux en neon personnalisés</h1>
    <p className=" text-white mb-2">LOGO personnalisé</p>
    <p className="text-lg text-white mb-4">Dimension 80*40</p>
    <div className="flex text-3xl ">
    <button className="text-white  m-3 hover:hover:text-emerald-700 "><IoBagHandleOutline /></button>
    <button className="text-white  m-3 hover:hover:text-emerald-700"><CiHeart /></button>
    </div>
  </div>
</div>

    <div className="col-span-2 row-span-3 col-start-4 relative group">
      <img src={b} alt="" srcset="" className="w-full h-auto"/>
      <div className="p-5 h-auto absolute inset-0 bg-emerald-700 bg-opacity-50 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <h1 className="text-xl font-bold text-white mb-4">Tableaux en neon personnalisés</h1>
    <p className=" text-white mb-2">LOGO personnalisé</p>
    <p className=" text-white mb-4">Dimension 80*40</p>
    <div className="flex text-3xl ">
    <button className="text-white  m-3 hover:hover:text-emerald-700 "><IoBagHandleOutline /></button>
    <button className="text-white  m-3 hover:hover:text-emerald-700"><CiHeart /></button>
    </div>

  </div>
      </div>
    <div className="col-span-2 row-span-3 col-start-6 relative group "><img src={c} alt="" srcset="" className="w-full h-auto"/> 
    <div className="p-5 h-auto absolute inset-0 bg-emerald-700 bg-opacity-50 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <h1 className="text-xl font-bold text-white mb-4">Tableaux en neon personnalisés</h1>
    <p className=" text-white mb-2">LOGO personnalisé</p>
    <p className=" text-white mb-4">Dimension 80*40</p>
    <div className="flex text-3xl ">
    <button className="text-white  m-3 hover:hover:text-emerald-700 "><IoBagHandleOutline /></button>
    <button className="text-white  m-3 hover:hover:text-emerald-700"><CiHeart /></button>
    </div>

  </div>
    </div>
    <div className="col-span-2 row-span-3 col-start-4 row-start-4 relative group"><img src={d} alt="" srcset="" className="w-full h-auto"/> 
    <div className="p-5 h-auto absolute inset-0 bg-emerald-700 bg-opacity-50 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <h1 className="text-xl font-bold text-white mb-4">Tableaux en neon personnalisés</h1>
    <p className=" text-white mb-2">LOGO personnalisé</p>
    <p className=" text-white mb-4">Dimension 80*40</p>
    <div className="flex text-3xl ">
    <button className="text-white  m-3 hover:hover:text-emerald-700 "><IoBagHandleOutline /></button>
    <button className="text-white  m-3 hover:hover:text-emerald-700"><CiHeart /></button>
    </div>

  </div>
    </div>
    <div className="col-span-2 row-span-3 col-start-6 row-start-4  relative group" >
      <img src={e} alt="" srcset="" className="w-full h-auto"/>
      <div className="p-5 h-auto absolute inset-0 bg-emerald-700 bg-opacity-50 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <h1 className="text-xl font-bold text-white mb-4">Tableaux en neon personnalisés</h1>
    <p className=" text-white mb-2">LOGO personnalisé</p>
    <p className=" text-white mb-4">Dimension 80*40</p>
    <div className="flex text-3xl ">
    <button className="text-white  m-3 hover:hover:text-emerald-700 "><IoBagHandleOutline /></button>
    <button className="text-white  m-3 hover:hover:text-emerald-700"><CiHeart /></button>
    </div>

  </div>
      </div>
</div>
</>    
  )
}

export default BestSller
