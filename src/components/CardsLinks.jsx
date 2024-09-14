import React, { useState, useEffect } from "react";
import {
  RiFileCopyLine,
  RiCheckLine,
  RiLinksLine,
  RiCalendarTodoFill,
  RiEdit2Fill,
  RiProhibitedLine,
} from "react-icons/ri";
import { SlLike } from "react-icons/sl";

function CardsLinks() {
  const [copied, setCopied] = useState(false);

  // Obtener la fecha y hora actuales
  const creationDate = new Date().toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const creationTime = new Date().toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleCopy = () => {
    const linkInput = document.getElementById("linkToCopy");
    linkInput.select();
    navigator.clipboard.writeText(linkInput.value);
    setCopied(true); // Cambia el estado a "copiado"

    // Restablece el icono después de 5 segundos
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  const handleChange = () => {
    setCopied(false); // Si el usuario cambia el contenido, restablece el icono
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4 flex flex-row items-center">
        <div className="text-blue-400">
          <RiLinksLine />
        </div>
        <p className="text-lg font-medium text-blue-400">
          Enunciado de la Publicacion
        </p>
      </div>
      <div className="flex flex-row items-center">
        <h2 className="text-green-500 font-semibold m-1">Active</h2>

        <div className="flex items-center m-2">
          <RiCalendarTodoFill />
          <span className="ml-2 text-gray-600">
            {creationDate} {creationTime}
          </span>
        </div>
      </div>
      <div className="flex space-x-2 mb-4">
        <input
          id="linkToCopy"
          className="p-2 border border-gray-300 rounded-lg flex-grow"
          value="https://example.com/shortlink"
          readOnly
          onChange={handleChange} // Detecta cambios y restablece el icono
        />
        <button
          onClick={handleCopy}
          className="bg-[#7828c8] text-white p-2 rounded-lg hover:bg-[#7828c8e1] flex items-center justify-center"
        >
          {copied ? <RiCheckLine /> : <RiFileCopyLine />}
        </button>
      </div>
      <div className="mb-4 flex flex-row items-center">
        <h3 className="text-gray-600 m-1">Visits: 00</h3>
        <h3 className="text-gray-600 m-1">Earnings: 00</h3>
      </div>
      <div className="flex justify-end space-x-2">
        <button className="bg-[#7828c8] text-white p-2 rounded-lg hover:bg-[#7828c8e1] flex flex-row items-center">
          <RiEdit2Fill/>
          Edit
        </button>
        <button className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-500 flex flex-row items-center">
          <RiProhibitedLine/>
          Disguise
        </button>
        <button className="bg-[#7828c8] text-white p-2 rounded-lg hover:bg-[#7828c8e1] flex flex-row items-center">
          <SlLike/>
          Approve
        </button>
      </div>
    </div>
  );
}

export default CardsLinks;
