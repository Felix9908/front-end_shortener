import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { Navbar, NavbarBrand } from "@nextui-org/react";
import { ProfilePic } from "../assets/svg/ProfilePic.jsx";
import axios from "axios";
import { useParams } from "react-router-dom"; 

export default function AdPage() {
  const { shortCode } = useParams(); 
  const [seconds, setSeconds] = useState(10);
  const [canProceed, setCanProceed] = useState(false);
  const [originalUrl, setOriginalUrl] = useState(null); 
  
  useEffect(() => {
    const fetchOriginalUrl = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/redirect/${shortCode}`);
        if (response.status === 200) {
          setOriginalUrl(response.data.originalUrl); 
          console.log("URL original obtenida:", response.data.originalUrl);
        }
      } catch (error) {
        console.error("Error al obtener la URL original:", error);
      }
    };

    if (shortCode) {
      fetchOriginalUrl(); 
    }
  }, [shortCode]); 

  // Reducir el contador cada segundo
  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanProceed(true);
    }
  }, [seconds]);

  const handleProceed = () => {
    console.log("Botón presionado, canProceed:", canProceed, "originalUrl:", originalUrl); 
    if (canProceed && originalUrl) {
      window.location.href = originalUrl;
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Encabezado */}
      <Navbar className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
        <NavbarBrand className="flex items-center gap-2">
          <ProfilePic />
          <p className="font-bold text-inherit">NotiExpress</p>
        </NavbarBrand>
      </Navbar>

      {/* Contenido de publicidad */}
      <div className="flex flex-col flex-1 items-center justify-center bg-gray-100 mt-16">
        {/* mt-16 asegura que el contenido no esté debajo del navbar */}
        <h2 className="text-2xl font-semibold mb-6">Publicidad</h2>
        <p className="mb-6">
          Aquí podría ir algún anuncio publicitario o contenido relevante.
        </p>

        {/* Botón con contador */}
        <Button
          color="success"
          size="lg"
          onClick={handleProceed}
          disabled={!canProceed}
          className="transition-all duration-300"
        >
          {canProceed
            ? "Presiona aquí para ir a la noticia"
            : `Espera ${seconds} segundos`}
        </Button>
      </div>
    </div>
  );
}
