import React from 'react';
import {FaHome ,FaPhone, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

const socialLinks = [
  { icon: <FaFacebookF />, href: '#', color: 'hover:text-blue-500', label: 'Facebook' },
  { icon: <FaTwitter />, href: '#', color: 'hover:text-blue-400', label: 'Twitter' },
  { icon: <FaInstagram />, href: '#', color: 'hover:text-pink-500', label: 'Instagram' },
  { icon: <FaLinkedinIn />, href: '#', color: 'hover:text-blue-700', label: 'LinkedIn' }
];

function Footer() {
  return (
    <footer className="bg-emerald-950 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Informations de la société */}
        <div className="mb-4">
  <h2 className="text-2xl font-bold mb-3">Rj Deco</h2>
  
  <p className="flex items-center mb-2">
    <FaHome className="mr-2" /> 123 Rue de l'Exemple, 75000 Paris
  </p>

  <p className="flex items-center mb-2">
    <FaPhone className="mr-2" /> +216 45 678 098
  </p>

  <p className="flex items-center">
    <MdEmail className="mr-2" /> contactrejdeco@gmail.com
  </p>
</div>


        {/* Réseaux sociaux */}
        <div className="flex flex-col items-center mb-4">
          <h3 className="text-lg font-semibold mb-3">Suivez-nous</h3>
          <div className="flex space-x-6">
            {socialLinks.map(({ icon, href, color, label }) => (
              <a
                key={label}
                href={href}
                className={`text-xl transition-transform transform hover:scale-125 ${color}`}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-3">Abonnez-vous à notre newsletter</h3>
          <input
            type="email"
            placeholder="Entrez votre email"
            className="px-4 py-2 text-black rounded-md mb-2 w-full"
          />
          <button className="bg-white text-emerald-900 px-4 py-2 rounded-md hover:bg-gray-200">S'inscrire</button>
        </div>
      </div>

      <div className="mt-6 text-center border-t border-gray-600 pt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Rj Deco. Tous droits réservés.</p>
        <p className="text-sm">Développé par Moez Aloui.</p>
      </div>
    </footer>
  );
}

export default Footer;