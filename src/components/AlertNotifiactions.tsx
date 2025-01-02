import React, { useState } from "react";
import { FaBell, FaCheckCircle, FaTrash, FaFilter } from "react-icons/fa";

const AlertNotifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Nouvelle alerte critique", time: "Il y a 3 minutes", priority: "Critique", read: false },
    { id: 2, title: "Caméra déconnectée", time: "Il y a 2 heures", priority: "Urgent", read: false },
    { id: 3, title: "Nouvelle mise à jour système", time: "Hier", priority: "Info", read: true },
  ]);

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Alerte & Notifications</h1>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
            <FaFilter /> Filtrer
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`flex items-center justify-between p-4 rounded-lg shadow-md ${
              notif.read ? "bg-gray-100" : "bg-blue-50"
            }`}
          >
            <div>
              <h2 className="font-semibold">{notif.title}</h2>
              <p className="text-sm text-gray-500">{notif.time}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => markAsRead(notif.id)}
                className="text-green-500"
              >
                <FaCheckCircle />
              </button>
              <button
                onClick={() => deleteNotification(notif.id)}
                className="text-red-500"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertNotifications;
