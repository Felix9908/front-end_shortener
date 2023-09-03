import React from "react";
import { Card, Skeleton } from "@nextui-org/react";
import MonthsDropdown from "../components/dropdowns/MonthsDropdown";
import ModalWithBlur from "../components/modals/ModalWithBlur";
import ImageWithSkeleton from "../components/images/ImageWithSkeleton";

function Statistics() {
  return (
    <div className=" w-full h-screen">
      <div>
        <h2 className="text-2xl p-5">Estadisticas</h2>
      </div>
      <div className="flex items-center flex-col justify-center p-5 w-full">
        <MonthsDropdown />
      </div>

      <div className="w-full bg-red-300">
        <div className="flex stats shadow w-full">

          <div className="stat">
            <div className="stat-figure text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <div className="stat-title">Ganancias este mes</div>
            <div className="stat-value text-primary">50 000 CUP</div>
            <div className="stat-desc">21% más que el mes pasado</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div className="stat-title">CPM</div>
            <div className="stat-value text-secondary">5.00 USD</div>
            <div className="stat-desc">5% menos que el mes pasado</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tareas completadas</div>
            <div className="stat-desc text-secondary">31 tareas pendientes</div>
          </div>

        </div>
      </div>
      {/* Mensaje al cliente */}
      <div className="w-[1350px] p-10  m-10  border">
        <p>Informations</p>
        <ModalWithBlur />

        <ImageWithSkeleton />
      </div>
    </div>
  );
}

export default Statistics;
