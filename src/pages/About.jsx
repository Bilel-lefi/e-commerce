import React from 'react';

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-12">
      <div className="max-w-3xl text-center">
       
        <h1 className="text-3xl uppercase font-light text-gray-600">- À Propos de Nous -</h1>

        <p className="text-gray-700 text-lg mt-4">
          Bienvenue chez <span className="font-semibold">Rj-déco</span>, votre spécialiste en conception et fabrication de **tableaux artistiques, logos et enseignes sur mesure**.  
          Nous transformons vos idées en œuvres visuelles uniques pour donner vie à votre marque et à vos espaces.
        </p>
      </div>

      {/* Section Services */}
      <div className="mt-12 max-w-4xl">
        <h2 className="text-3xl font-semibold text-gray-600 text-center mb-6">
          Nos Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-bold text-gray-600">🎨 Création de Tableaux</h3>
            <p className="text-gray-600 mt-2">
              Nous réalisons des tableaux personnalisés qui s’adaptent à votre intérieur et à votre style.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-bold text-gray-600">🔵 Design de Logos</h3>
            <p className="text-gray-600 mt-2">
              Des logos professionnels, uniques et percutants pour mettre en avant votre marque.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-bold text-gray-600">📢 Enseignes & Signalétiques</h3>
            <p className="text-gray-600 mt-2">
              Création d’enseignes lumineuses et élégantes pour booster votre visibilité.
            </p>
          </div>
        </div>
      </div>

      {/* Section Processus */}
      <div className="mt-12 max-w-3xl text-center">
        <h2 className="text-3xl font-semibold text-gray-600 mb-6">
          Notre Processus de Travail
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          Chaque projet est unique. Voici comment nous transformons votre vision en réalité :
        </p>
        <ul className="list-none space-y-4 text-left">
          <li className="flex items-center space-x-3">
            <span className="text-2xl text-emerald-900">📝</span>
            <span className="text-gray-700">
              **1. Consultation** – Nous discutons de votre projet, de vos besoins et de vos attentes.
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-2xl text-emerald-900">🎨</span>
            <span className="text-gray-700">
              **2. Conception** – Nos designers créent des maquettes et des propositions adaptées à votre identité.
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-2xl text-emerald-900">⚒️</span>
            <span className="text-gray-700">
              **3. Fabrication** – Nous utilisons des matériaux de haute qualité pour un rendu exceptionnel.
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-2xl text-emerald-900">🚀</span>
            <span className="text-gray-700">
              **4. Livraison & Installation** – Votre produit est prêt à être exposé et admiré.
            </span>
          </li>
        </ul>
      </div>

      {/* Contact CTA */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">
          Besoin d’un design unique ?
        </h2>
        <p className="text-gray-600 mb-6">
          Contactez-nous dès aujourd’hui pour donner vie à votre projet !
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-emerald-900 text-white rounded-lg shadow-md hover:bg-emerald-800 transition duration-300"
        >
          Nous Contacter
        </a>
      </div>
    </div>
  );
}

export default About;
