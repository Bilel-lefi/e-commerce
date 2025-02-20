import React, { useEffect } from "react";
import b from "../assets/bg.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Importing the icons

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes vibrate {
            0% { transform: translateY(0); }
            25% { transform: translateY(-4px); }
            50% { transform: translateY(4px); }
            75% { transform: translateY(-4px); }
            100% { transform: translateY(0); }
          }
          .animate-vibrate {
            animation: vibrate 0.5s ease-in-out infinite;
          }
          .social-icon {
            margin-bottom: 16px; /* Adds space between icons */
            padding: 16px;
            border-radius: 50%;
            transition: transform 0.3s ease-in-out;
          }
          .facebook-icon {
            box-shadow: 0 4px 15px rgba(59, 130, 246, 0.6); /* Blue shadow for Facebook */
          }
          .instagram-icon {
            box-shadow: 0 4px 15px rgba(139, 92, 246, 0.6); /* Purple shadow for Instagram */
          }
          .whatsapp-icon {
            box-shadow: 0 4px 15px rgba(34, 193, 195, 0.6); /* Green shadow for WhatsApp */
          }
        `}
      </style>

      <section
        id="home"
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${b})`,
        }}
      >
        {/* Overlay */}
        <div className="flex flex-col items-start justify-center h-full bg-black/60 backdrop-blur-sm text-white px-6 sm:px-10 md:px-20">
          {/* Catchy Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-tight sm:leading-snug"
            data-aos="fade-up"
          >
            RJ-DECO Company <br />
          </h1>

          {/* Container for Subheadline and Social Icons */}
          <div className="mt-6 flex flex-row justify-between items-center w-full">
            {/* Subheadline */}
            <p
              className="text-yellow-500 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-full sm:max-w-2xl md:max-w-3xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              RJ-DECO est une société de décoration spécialisée dans la création
              de cadres sur mesure et de logos personnalisés. Chaque réalisation
              reflète l’originalité et le savoir-faire unique de l’équipe. Grâce à
              une approche innovante, RJ-DECO sublime vos espaces et renforce
              votre identité visuelle.
            </p>

            {/* Social Icons */}
            <div
              className="mt-6 flex flex-col space-y-6 justify-start items-end"
              data-aos="zoom-in"
            >
              <a
                href="https://www.facebook.com/RJDECO9.7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF
                  className="icon text-6xl sm:text-7xl text-blue-600 hover:text-blue-800 transition-colors animate-vibrate social-icon facebook-icon"
                />
              </a>
              <a
                href="https://www.instagram.com/rj.interieur/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  className="icon text-6xl sm:text-7xl text-pink-600 hover:text-pink-800 transition-colors animate-vibrate social-icon instagram-icon"
                />
              </a>
              <a
                href="https://wa.me/+21656131896"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp
                  className="icon text-6xl sm:text-7xl text-green-600 hover:text-green-800 transition-colors animate-vibrate social-icon whatsapp-icon"
                />
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 flex flex-col sm:flex-row sm:gap-4">
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 w-full sm:w-auto mb-4 sm:mb-0"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Explorer Nos Collections
            </button>
            <button
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-white hover:text-emerald-900 transition duration-300 w-full sm:w-auto"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              Nous Contacter
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
