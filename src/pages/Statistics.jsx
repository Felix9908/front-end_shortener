import MonthsDropdown from "../components/dropdowns/MonthsDropdown";
import ModalAcortarLink from "../components/modals/ModalAcortarLink";
import ImageWithSkeleton from "../components/images/ImageWithSkeleton";
import Navbar from "../components/Navbar";
import InfoStadisticCard from "../components/InfoStadisticCard";
import WorldMapSvg from "../assets/svg/WorldMapSvg";

function Statistics() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col w-full">
      <Navbar />
      <ModalAcortarLink />
      
      <div className="flex flex-col items-center p-6">
        <h2 className="text-4xl font-semibold text-gray-800 p-4">Estadísticas</h2>
        <MonthsDropdown />
      </div>

      {/* Estadísticas Cards */}
      <div className="w-full p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoStadisticCard title="CPM" value="55" porcent="4" />
          <InfoStadisticCard title="Ganancias Mensuales" value="200" porcent="5" />
          <InfoStadisticCard title="Referidos" value="150" porcent="8" />
          <InfoStadisticCard title="Visitas" value="300" porcent="5" />
        </div>
      </div>

      {/* Contenedor para el mapa del mundo y mensaje al cliente */}
      <div className="flex w-full max-w-7xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-md space-x-8">
        {/* Mapa del mundo */}
        <div className="w-1/2">
          <WorldMapSvg className="w-full h-auto" />
        </div>

        {/* Mensaje al cliente */}
        <div className="w-1/2">
          <p className="text-lg font-semibold mb-4">Información Adicional</p>
          <ImageWithSkeleton />
        </div>
      </div>
    </div>
  );
}

export default Statistics;
