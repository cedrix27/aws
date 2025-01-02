import React, { useState } from "react";

interface Camera {
  id: number;
  name: string;
  status: string;
  lastEvent: string;
  location: string;
  ipAddress: string;
  rtspAccess: string;
  resolution: string;
  type: string;
}

const CamerasAlarmes = () => {
  const [cameras, setCameras] = useState<Camera[]>([
    {
      id: 1,
      name: "Caméra 1",
      status: "Actif",
      lastEvent: "Mouvement détecté",
      location: "Entrée principale",
      ipAddress: "192.168.1.100",
      rtspAccess: "rtsp://192.168.1.100/stream",
      resolution: "1080p",
      type: "Dôme",
    },
    {
      id: 2,
      name: "Caméra 2",
      status: "En panne",
      lastEvent: "Aucun",
      location: "Parking",
      ipAddress: "192.168.1.101",
      rtspAccess: "rtsp://192.168.1.101/stream",
      resolution: "720p",
      type: "Extérieure",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCamera, setSelectedCamera] = useState<Camera | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"create" | "edit" | "view">("create");

  // Filtrer les caméras par recherche
  const filteredCameras = cameras.filter((camera) =>
    camera.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Ouvrir la modale
  const openModal = (type: "create" | "edit" | "view", camera?: Camera) => {
    setModalType(type);
    setSelectedCamera(camera || null);
    setIsModalOpen(true);
  };

  // Fermer la modale
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCamera(null);
  };

  // Sauvegarder une caméra (création ou édition)
  const handleSaveCamera = (cameraData: Camera) => {
    if (modalType === "edit") {
      // Modifier une caméra existante
      setCameras((prev) =>
        prev.map((cam) => (cam.id === cameraData.id ? cameraData : cam))
      );
    } else {
      // Créer une nouvelle caméra
      setCameras((prev) => [...prev, { ...cameraData, id: Date.now() }]);
    }
    closeModal();
  };

  // Supprimer une caméra
  const handleDeleteCamera = (id: number) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette caméra ?")) {
      setCameras((prev) => prev.filter((camera) => camera.id !== id));
    }
  };

  return (
    <div className="p-6">
      {/* Titre et barre de recherche */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Caméras</h1>
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Rechercher une caméra..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <button
          onClick={() => openModal("create")}
          className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Ajouter Caméra
        </button>
      </div>

      {/* Grille des caméras */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCameras.map((camera) => (
          <div
            key={camera.id}
            className="p-4 rounded-lg shadow-md bg-white border border-gray-200"
          >
            <h2 className="text-lg font-semibold">{camera.name}</h2>
            <p className="text-sm text-gray-500">
              Statut :{" "}
              <span
                className={`font-medium ${
                  camera.status === "Actif" ? "text-green-500" : "text-red-500"
                }`}
              >
                {camera.status}
              </span>
            </p>
            <p className="text-sm text-gray-500">Localisation : {camera.location}</p>
            <div className="flex mt-4 gap-2">
              <button
                onClick={() => openModal("view", camera)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Aperçu
              </button>
              <button
                onClick={() => openModal("edit", camera)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
              >
                Modifier
              </button>
              <button
                onClick={() => handleDeleteCamera(camera.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
        {filteredCameras.length === 0 && (
          <div className="text-center text-gray-500 col-span-full">
            Aucune caméra ne correspond à votre recherche.
          </div>
        )}
      </div>

      {/* Modale pour création/modification/aperçu */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">
              {modalType === "create"
                ? "Ajouter une Caméra"
                : modalType === "edit"
                ? "Modifier la Caméra"
                : "Aperçu de la Caméra"}
            </h2>
            {modalType === "view" && selectedCamera ? (
              <ul className="space-y-2">
                <li>
                  <strong>Nom :</strong> {selectedCamera.name}
                </li>
                <li>
                  <strong>Statut :</strong> {selectedCamera.status}
                </li>
                <li>
                  <strong>Localisation :</strong> {selectedCamera.location}
                </li>
                <li>
                  <strong>Adresse IP :</strong> {selectedCamera.ipAddress}
                </li>
                <li>
                  <strong>RTSP :</strong>{" "}
                  <a
                    href={selectedCamera.rtspAccess}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    {selectedCamera.rtspAccess}
                  </a>
                </li>
              </ul>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (selectedCamera) handleSaveCamera(selectedCamera);
                }}
              >
                <input
                  type="text"
                  value={selectedCamera?.name || ""}
                  placeholder="Nom"
                  onChange={(e) =>
                    setSelectedCamera((prev) => ({
                      ...prev!,
                      name: e.target.value,
                    }))
                  }
                  className="w-full mb-4 border rounded px-3 py-2"
                  required
                />
                {/* Ajoutez les autres champs similaires ici */}
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Sauvegarder
                </button>
              </form>
            )}
            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CamerasAlarmes;