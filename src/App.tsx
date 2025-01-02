import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Modules from "./components/Modules"; // Page Modules
import Dashboard from "./components/Dashboard"; // Exemple pour Dashboard
import AlertNotifications from "./components/AlertNotifiactions";
import CamerasAlarmes from "./components/CamerasAlarmes";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Layout avec barre latérale et barre supérieure */}
        <Route path="/" element={<Layout />}>
          {/* Routes enfants */}
          <Route index element={<Dashboard />} /> {/* Par défaut, Dashboard */}
          <Route path="modules" element={<Modules />} />
           {/* Page Modules */}
          <Route path="notifications-alertes" element={<AlertNotifications />} />

          <Route path="cameras-alarmes" element={<CamerasAlarmes />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
