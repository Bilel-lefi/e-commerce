import React from "react";
import {
  FaHome,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  {
    icon: <FaFacebookF />,
    href: "#",
    color: "hover:text-[#53705e]",
    label: "Facebook",
  },
  {
    icon: <FaTwitter />,
    href: "#",
    color: "hover:text-[#53705e]",
    label: "Twitter",
  },
  {
    icon: <FaInstagram />,
    href: "#",
    color: "hover:text-[#53705e]",
    label: "Instagram",
  },
];

function Footer() {
  return (
    <footer className="text-gray-800 bg-gradient-to-r from-[#53705e] to-[#fbf7d2] py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Infos Contact */}
        <div className="text-white space-y-3">
          <h2 className="text-2xl font-bold text-[#fbf7d2]">Rj Deco</h2>
          <p className="flex items-center">
            <FaHome className="mr-2 text-[#fbf7d2]" /> 123 Rue de l'Exemple,
            75000 Paris
          </p>
          <p className="flex items-center">
            <FaPhone className="mr-2 text-[#fbf7d2]" /> +216 45 678 098
          </p>
          <p className="flex items-center">
            <MdEmail className="mr-2 text-[#fbf7d2]" /> contactrejdeco@gmail.com
          </p>
        </div>

        {/* Réseaux Sociaux */}
        <div className="flex flex-col items-end space-y-4">
          <h3 className="text-lg font-semibold text-[#fbf7d2] mb-3">
            Suivez-nous
          </h3>
          <div className="flex flex-row space-x-6">
            {socialLinks.map(({ icon, href, color, label }) => (
              <a
                key={label}
                href={href}
                className={`text-2xl transition-transform transform hover:scale-125 ${color}`}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center border-t border-gray-600 pt-4">
        <p className="text-sm text-[#fbf7d2]">
          &copy; {new Date().getFullYear()} RJ-Deco. Tous droits réservés.
        </p>
        <p className="text-sm text-[#fbf7d2]">
          Développé par{" "}
          <span className="font-semibold text-[#53705e]">Bilel Lefi & Moez Aloui </span>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
