import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom"; // Outlet pour les routes enfants

const Layout = () => {
  return (
    <div className="flex">
      {/* Sidebar gauche */}
      <Sidebar />

      {/* Contenu principal */}
      <div className="flex flex-col w-full">
        {/* Barre supérieure */}
        <Topbar />

        {/* Section dynamique */}
        <main className="flex-grow bg-gray-100 p-4">
          <Outlet /> {/* Contenu dynamique rendu ici */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
