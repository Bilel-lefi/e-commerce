import React from 'react';
import a from '../assets/rj-deco-slider.jpg';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Importing the icons

function Home() {
  return (
    <section
    id="home"
      className="h-screen xs:h-auto bg-cover bg-center"
      style={{
        backgroundImage: `url(${a})`,
      }}
    >
      
      
      {/* Overlay */}
      <div className=" flex flex-row xs:flex-col items-start justify-around h-full  bg-black/50  text-white px-6 sm:px-10 md:px-20">
       
       <div className="mt-20">
           {/* Catchy Headline */}
        <h1 className="text-4xl text-white sm:text-5xl md:text-6xl font-bold uppercase leading-tight sm:leading-snug">
          Transformez Votre Espace <br /> Avec l'Élégance
        </h1>
        <p className="mt-6 text-yellow-500 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-full sm:max-w-2xl md:max-w-3xl">
              RJ-DECO est une société de décoration spécialisée dans la création
              de cadres sur mesure et de logos personnalisés. Chaque réalisation
              reflète l’originalité et le savoir-faire unique de l’équipe. Grâce à
              une approche innovante, RJ-DECO sublime vos espaces et renforce
              votre identité visuelle.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row sm:gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 w-full sm:w-auto mb-4 sm:mb-0">
            Explorer Nos Collections
          </button>
          <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-white hover:text-emerald-900 transition duration-300 w-full sm:w-auto">
            Nous Contacter
          </button>
        </div>
       </div>
       
       
       <div
              className="xs:mt-1 xs:mb-8 mt-20  flex flex-col xs:flex-row xs:w-full xs:justify-around space-y-10  justify-start items-end"
            >
              <a
                href="https://www.facebook.com/RJDECO9.7"
                target="_blank"
              >
                <FaFacebookF
                  className="icon text-6xl sm:text-7xl text-blue-600 hover:text-blue-800 transition-colors animate-vibrate social-icon facebook-icon"
                />
              </a>
              <a
                href="https://www.instagram.com/rj.interieur/"
            
              >
                <FaInstagram
                  className="icon text-6xl sm:text-7xl text-pink-600 hover:text-pink-800 transition-colors animate-vibrate social-icon instagram-icon"
                />
              </a>
              <a
                href="https://wa.me/+21656131896"
            
              >
                <FaWhatsapp
                  className="icon text-6xl sm:text-7xl text-green-600 hover:text-green-800 transition-colors animate-vibrate social-icon whatsapp-icon"
                />
              </a>
            </div>

      
      </div>


    
    </section>
  );
}

export default Home;
