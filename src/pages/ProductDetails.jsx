import React from 'react';

function ProductDetails() {
  const product = {
    name: "Vase en Céramique Élégant",
    description: "Un vase en céramique de haute qualité, parfait pour vos arrangements floraux.",
    price: 120,
    image: "https://via.placeholder.com/400x300?text=Vase+Ceramique"
  };

  const handleOrder = () => {
    alert(`Commande passée pour : ${product.name}`);
  };

  return (
    <div className=" my-16 max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg text-[#3e3e3e] sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl">
      {/* Image */}
      <div className="mb-4">
        <img
          src={product.image || "https://via.placeholder.com/400x300?text=Vase+Ceramique"}
          alt={product.name || "product"}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      {/* Informations du produit */}
      <h2 className="text-2xl font-bold mb-2 text-center md:text-left">{product.name}</h2>
      <p className="text-sm mb-4 text-center md:text-left">{product.description}</p>

      {/* Prix */}
      <div className="text-xl font-semibold mb-6 text-center md:text-left">
        {product.price} TND
      </div>

      {/* Bouton Commander */}
      <button
        onClick={handleOrder}
        className="w-full bg-emerald-900 text-white py-3 rounded-lg hover:bg-emerald-800 transition duration-300"
      >
        Commander
      </button>
    </div>
  );
}

export default ProductDetails;
