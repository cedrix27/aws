import React from "react";

const modules = [
  {
    title: "Intelligence Artificielle",
    description:
      "Utilisez l'IA pour analyser en temps réel les images de vos caméras et détecter automatiquement les activités suspectes.",
    status: "Arrive bientôt",
    price: "0.87$/h/camera",
  },
  {
    title: "Enregistrement Cloud",
    description:
      "Stockez vos enregistrements vidéo sur le cloud AWS avec une accessibilité fiable et une sécurité avancée.",
    status: "Disponible",
    price: "0.54$/h/camera",
  },
];

const Modules = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Modules</h1>
      <p className="text-gray-600 mb-6">
        Gérez les modules de la plateforme et activez-les selon les besoins de chaque entreprise.
      </p>
      <div className="grid grid-cols-2 gap-6">
        {modules.map((module, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow border border-gray-200 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-bold">{module.title}</h2>
              <p className="text-gray-600 my-2">{module.description}</p>
            </div>
            <div className="mt-4">
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  module.status === "Disponible"
                    ? "bg-green-100 text-green-600"
                    : "bg-orange-100 text-orange-600"
                }`}
              >
                {module.status}
              </span>
              <p className="text-gray-800 mt-2">{module.price}</p>
              <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg">
                Voir les détails →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modules;
