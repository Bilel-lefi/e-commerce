import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-gray-100">
      <h1 className="text-6xl font-bold text-emerald-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Non Trouvée</h2>
      <p className="text-lg text-gray-500 mb-4">
        Oups ! La page que vous cherchez n'existe pas.
      </p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-emerald-900 text-white font-semibold rounded-lg hover:bg-emerald-700 transition duration-300"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}

export default NotFound;
