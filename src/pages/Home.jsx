import React, { useEffect } from "react";
import b from "../assets/bg.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
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

        {/* Subheadline */}
        <p
          className="mt-6 text-yellow-500 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-full sm:max-w-2xl md:max-w-3xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          RJ-DECO est une société de décoration spécialisée dans la création de
          cadres sur mesure et de logos personnalisés. Chaque réalisation
          reflète l’originalité et le savoir-faire unique de l’équipe. Grâce à
          une approche innovante, RJ-DECO sublime vos espaces et renforce votre
          identité visuelle.{" "}
        </p>
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
  );
}

export default Home;
