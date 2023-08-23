import React from "react";
import {Card, Skeleton} from "@nextui-org/react";
import MonthsDropdown from "./dropdowns/MonthsDropdown";
import ModalWithBlur from "./modals/ModalWithBlur";

function Statistics() {
  return (
    <div className=" w-full h-screen">
      <div>
        <h2 className="text-2xl p-5">Estadisticas</h2>
      </div>
      <div className="flex items-center flex-col justify-center p-5 w-full">
        <MonthsDropdown/>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-14 w-full bg-red-300">
        <div className="flex items-center flex-col bg-yellow-500 w-[250px] h-[150px] m-10">
                  <Card className="w-[200px] space-y-5 p-4" radius="2xl">
                    <Skeleton className="rounded-lg">
                        <div className="h-24 rounded-lg bg-default-300"></div>
                    </Skeleton>
                  </Card>
        </div>
        <div className=" flex items-center flex-col bg-green-500 w-[250px] h-[150px] m-10">
          <p className="text-6xl p-5">0,00</p>
          <p>Ganancias Mensuales</p>
        </div>
        <div className="flex items-center flex-col bg-red-500 w-[250px] h-[150px] m-10">
          <p className="text-6xl p-5">0,00</p>
          <p>ganancias por referidos</p>
        </div>
        <div className="flex items-center flex-col bg-blue-500 w-[250px] h-[150px] m-10">
          <p className="text-6xl p-5">0,00</p>
          <p>CPM</p>
        </div>
      </div>
      {/* Mensaje al cliente */}
      <div className="w-[1350px] p-10  m-10  border">
        <p>Informations</p>
          <ModalWithBlur/>
      </div>
    </div>
  );
}

export default Statistics;
