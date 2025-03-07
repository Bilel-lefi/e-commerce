import React from 'react';
import a from '../assets/rj-deco-slider.jpg';
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Home() {
  return (
    <section
      id="home"
      className="h-screen xs:h-auto bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${a})`,
      }}
    >
      {/* Overlay */}
      <div className="bg-black/50 h-full w-full flex flex-col justify-center items-center text-white px-6 py-16 sm:px-10 md:px-20 animate-fadeIn">
        <div className="text-center max-w-4xl">
          {/* Catchy Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-tight sm:leading-snug animate-slideDown">
            Transformez Votre Espace <br /> Avec l'Élégance
          </h1>
          <p className="mt-6 text-yellow-500 text-lg sm:text-xl md:text-2xl leading-relaxed animate-fadeInDelay">
            RJ-DECO est une société de décoration spécialisée dans la création de cadres sur mesure et de logos personnalisés.
            Chaque réalisation reflète l’originalité et le savoir-faire unique de l’équipe.
            Grâce à une approche innovante, RJ-DECO sublime vos espaces et renforce votre identité visuelle.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full shadow-lg w-full sm:w-auto ">
              Explorer Nos Collections
            </button>
            <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-white hover:text-emerald-900 w-full sm:w-auto">
              Nous Contacter
            </button>
          </div>
        </div>
        {/* Social Icons */}
        <div className="transition animate-bounce mt-12 flex justify-center gap-8">
          <a href="https://www.facebook.com/RJDECO9.7" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className=" text-4xl sm:text-5xl text-blue-500 hover:text-blue-600 transition animate-floating" />
          </a>
          <a href="https://www.instagram.com/rj.interieur/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-4xl sm:text-5xl text-pink-500 hover:text-pink-600 transition animate-floating delay-300" />
          </a>
          <a href="https://wa.me/+21656131896" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-4xl sm:text-5xl text-green-500 hover:text-green-600 transition animate-floating delay-500" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
