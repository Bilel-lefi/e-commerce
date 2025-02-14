import React from 'react'
import a from "../assets/collection_grid_1.jpg"
import b from "../assets/collection_grid_2.jpg"
import c from "../assets/collection_grid_3.jpg"
import d from "../assets/collection_grid_4.jpg"
import e from "../assets/collection_grid_5.jpg"
import { IoBagHandleOutline } from 'react-icons/io5'
import { CiHeart } from 'react-icons/ci'
import CardsProduct from '../components/CardsProduct'
function LikedProduct() {
  return (
 <>  
 <div className="mt-5 min-h-screen flex flex-col py-7 w-full justify-center items-center">
 <h1 className="text-3xl uppercase font-light text-gray-600">- Ma Favoris -</h1>

 <div className="mt-10 mx-4 sm:mx-8 lg:mx-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {[...Array(4)].map((_, i) => (
    <CardsProduct key={i} images={b} />
  ))}
</div>
 </div>

</>    
  )
}

export default LikedProduct
