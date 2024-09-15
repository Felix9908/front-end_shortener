import MonthsDropdown from "../components/dropdowns/MonthsDropdown";
import ModalAcortarLink from "../components/modals/ModalAcortarLink";
import ImageWithSkeleton from "../components/images/ImageWithSkeleton";
import Navbar from "../components/Navbar";
import InfoStadisticCard from "../components/InfoStadisticCard";

function Statistics() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <ModalAcortarLink />
      <div>
        <h2 className="text-2xl p-5">Estadísticas</h2>
      </div>
      <div className="flex items-center flex-col justify-center p-5 w-full">
        <MonthsDropdown />
      </div>

      <div className="w-full bg-red-300">
        <div className="grid stats shadow w-full">
          <InfoStadisticCard title="CPM" value="55" porcent="4" />
          <InfoStadisticCard
            title="Ganancias Mensuales"
            value="55"
            porcent="5"
          />
          <InfoStadisticCard title="Referidos" value="55" porcent="8" />
          <InfoStadisticCard title="Visitas" value="55" porcent="5" />
        </div>
      </div>

      {/* Mensaje al cliente */}
      <div className="w-[1350px] p-10 m-10 border">
        <p>Información</p>
        <ImageWithSkeleton />
      </div>
    </div>
  );
}

export default Statistics;
