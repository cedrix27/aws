import React from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Topbar = () => {
  return (
    <header className="w-full bg-white p-4 flex items-center justify-between border-b">
      {/* Barre de recherche */}
      <div className="flex items-center w-1/2">
        <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg w-full px-3 py-2">
          <input
            type="text"
            placeholder="Rechercher une entreprise ou un module..."
            className="flex-grow bg-transparent outline-none text-gray-800"
          />
          <FaSearch className="text-gray-500" />
        </div>
      </div>

      {/* Section droite */}
      <div className="flex items-center space-x-6">
        {/* Bouton Créer une entreprise */}
        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
          Ajouter une camera +
        </button>

        {/* Icônes */}
        <FaBell className="text-black text-lg cursor-pointer" />
        <FaUserCircle className="text-black text-lg cursor-pointer" />
      </div>
    </header>
  );
};

export default Topbar;
