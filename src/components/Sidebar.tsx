import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink pour gérer les routes
import {
  FaHome,
  FaCogs,
  FaVideo,
  FaCamera,
  FaBell,
  FaCog,
  FaQuestionCircle,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-80 h-screen bg-white text-gray-800 flex flex-col border-r border-gray-200">
      {/* Logo */}
      <div className="p-4 text-center border-b border-gray-200">
        <h1 className="text-lg font-bold">Mon Entreprise</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-grow">
        <ul className="mt-4 space-y-2 px-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-2xl transition-all ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-800 hover:bg-blue-100"
                }`
              }
            >
              <FaHome />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/modules"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-2xl transition-all ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-800 hover:bg-blue-100"
                }`
              }
            >
              <FaCogs />
              <span>Modules</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/enregistrement-video"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-2xl transition-all ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-800 hover:bg-blue-100"
                }`
              }
            >
              <FaVideo />
              <span>Enregistrement Vidéo</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cameras-alarmes"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-2xl transition-all ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-800 hover:bg-blue-100"
                }`
              }
            >
              <FaCamera />
              <span>Cameras & Alarmes</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notifications-alertes"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-2xl transition-all ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-800 hover:bg-blue-100"
                }`
              }
            >
              <FaBell />
              <span>Notification & Alertes</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t flex flex-col gap-2">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`
          }
        >
          <FaCog />
          <span>Paramètres</span>
        </NavLink>
        <NavLink
          to="/help"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`
          }
        >
          <FaQuestionCircle />
          <span>Aide</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
