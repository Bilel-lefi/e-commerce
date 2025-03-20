import React, { useEffect, useState } from "react";
import CardsProduct from "../components/CardsProduct";  // Assurez-vous que CardsProduct est adapté pour accepter les données du produit.

function Produits() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  
  // Récupérer les données des produits depuis l'API
  const fetchData = async () => {
    setLoading(true);
    setError(null);  // Réinitialiser l'erreur avant chaque tentative de chargement
    try {
      const response = await fetch("https://back-end-ecommerce-roan.vercel.app/api/product/");
      if (!response.ok) throw new Error("Failed to fetch products");
      const result = await response.json();
      console.log("Data fetched:", result); // Ajoutez ce log pour vérifier ce qui est renvoyé par l'API

      setData(result);
      setFilteredData(result);  // Par défaut, afficher tous les produits
    } catch (err) {
      console.error("Error fetching data:", err.message);
      setError(err.message);  // Enregistrer l'erreur dans l'état
    } finally {
      setLoading(false);
    }
  };

  // Effet pour charger les données au premier rendu du composant
  useEffect(() => {
    fetchData();
  }, []);

  // Filtrer les produits par catégorie
  const handleCategoryFilter = (category) => {
    if (category === "Tous") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((product) => product.category === category);
      setFilteredData(filtered);
    }
  };

  if (loading) {
    return <div className="w-full flex justify-center items-center">        
             <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
            </div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div id="produits" className="mt-5 min-h-screen flex flex-col py-7 w-full justify-center items-center">
      <h1 className="text-3xl uppercase font-light text-gray-600">- Nos Produits -</h1>
     
      <ul className="flex gap-5 font-semibold my-9 groupe">
        <li
          className="hover:text-emerald-900 cursor-pointer"
          onClick={() => handleCategoryFilter("Tous")}
        >
          Tous
        </li>
        <li
          className="hover:text-emerald-900 cursor-pointer"
          onClick={() => handleCategoryFilter("Tableaux")}
        >
          Tableaux
        </li>
        <li
          className="hover:text-emerald-900 cursor-pointer"
          onClick={() => handleCategoryFilter("Logo")}
        >
          Logo
        </li>
        <li
          className="hover:text-emerald-900 cursor-pointer"
          onClick={() => handleCategoryFilter("Led Neon")}
        >
          Led Neon
        </li>
      </ul>

      <div className=" mx-4 sm:mx-8 lg:mx-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {filteredData.map((product) => (
          <CardsProduct
            key={product._id}
            images={product.image}  // Assurez-vous que CardsProduct prend bien en charge l'image des produits
            name={product.name}
            id={product._id}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Produits;
