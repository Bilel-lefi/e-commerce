import React from 'react'
import a from "../assets/collection_grid_1.jpg"
import b from "../assets/collection_grid_2.jpg"
import c from "../assets/collection_grid_3.jpg"
import d from "../assets/collection_grid_4.jpg"
import e from "../assets/collection_grid_5.jpg"
function BestSller() {
  return (
 <>  
 <div className="mt-5 flex py-7 w-full justify-center items-center">
 <h1 className="text-3xl uppercase font-semibold text-gray-600">- Nos Services -</h1>
 </div>
<div className="m-4 grid grid-cols-7 grid-rows-6 gap-4">
    <div className="col-span-3 row-span-6"> <img src={a} alt="" srcset="" /> </div>
    <div className="col-span-2 row-span-3 col-start-4"><img src={b} alt="" srcset="" /></div>
    <div className="col-span-2 row-span-3 col-start-6"><img src={c} alt="" srcset="" /></div>
    <div className="col-span-2 row-span-3 col-start-4 row-start-4"><img src={d} alt="" srcset="" /></div>
    <div className="col-span-2 row-span-3 col-start-6 row-start-4"><img src={e} alt="" srcset="" /></div>
</div>
</>    
  )
}

export default BestSller
