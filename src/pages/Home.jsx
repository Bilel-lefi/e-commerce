import React from 'react';
import a from '../assets/rj-deco-slider.jpg';
import { motion } from 'framer-motion';
function Home() {
  return (
    <section
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${a})`,
      }}
    >
      {/* Overlay */}
      <div className="flex flex-col items-start justify-center h-full bg-black/50 text-white px-6 sm:px-10 md:px-20">
        {/* Catchy Headline */}
        <h1 className="text-4xl text-white sm:text-5xl md:text-6xl font-bold uppercase leading-tight sm:leading-snug">
          Transformez Votre Espace <br /> Avec l'Élégance
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-yellow-500 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-full sm:max-w-2xl md:max-w-3xl">
          Découvrez une collection exquise de tableaux décoratifs et d’objets lumineux qui redéfinissent l'art de la décoration. Apportez une touche unique et élégante à votre maison ou espace de travail.
        </p>

        {/* Call to Action */}
        <div className="mt-8 flex flex-col sm:flex-row sm:gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 w-full sm:w-auto mb-4 sm:mb-0">
            Explorer Nos Collections
          </button>
          <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-white hover:text-emerald-900 transition duration-300 w-full sm:w-auto">
            Nous Contacter
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
