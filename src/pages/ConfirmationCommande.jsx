import React, { useState } from "react";
import axios from "axios"; // Importer axios
import { IoCheckmarkCircleOutline } from "react-icons/io5"; // Icône de succès

function ConfirmationCommande() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    adresse: "",
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false); // Etat pour afficher le modal

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envoi de la commande au back-end via une requête POST
      const response = await axios.post(
        "http://localhost:8080/api/commandes",
        formData
      );

      // Vérification de la réponse du serveur
      if (response.status === 201) {
        // Verify success status code
        setShowSuccessModal(true); // Afficher le modal de succès
        console.log("Commande confirmée", response);

        // Réinitialiser les champs du formulaire après la soumission
        setFormData({
          nom: "",
          prenom: "",
          telephone: "",
          adresse: "",
        });
      }
    } catch (error) {
      console.error("Erreur lors de la confirmation de la commande", error);
      // Gérer les erreurs ici (par exemple, afficher un message d'erreur)
    }
  };

  return (
    <div className="py-15 px-5 w-full max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-lg mt-10 mb-10">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Confirmation de la commande
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="nom"
            className="block text-sm font-medium text-gray-700"
          >
            Nom :
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="prenom"
            className="block text-sm font-medium text-gray-700"
          >
            Prénom :
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="telephone"
            className="block text-sm font-medium text-gray-700"
          >
            Numéro de téléphone :
          </label>
          <input
            type="number"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="adresse"
            className="block text-sm font-medium text-gray-700"
          >
            Adresse :
          </label>
          <input
            type="text"
            id="adresse"
            name="adresse"
            value={formData.adresse}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#67806c] text-white py-2 rounded-md"
        >
          Confirmer la commande
        </button>
      </form>

      {/* Modal de succès */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            {/* Icône de succès ✅ */}
            <IoCheckmarkCircleOutline className="text-green-500 text-6xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Commande confirmée !</h3>
            <p>Votre commande a été confirmée avec succès.</p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ConfirmationCommande;
