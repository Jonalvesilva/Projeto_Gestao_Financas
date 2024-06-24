"use client";
import { controlNumber } from "../constants/controlNumber";

export default function Field() {
  return (
    <div
      className="w-[250px] min-[640px]:w-[580px] lg:w-[92%] lg:ml-6 bg-white rounded-xl p-3 flex flex-col 
    sm:flex-row gap-y-6
      lg:flex-row items-center justify-between"
    >
      <div className="flex flex-col gap-y-2 lg:flex-row lg:gap-x-4">
        <div className="flex flex-col">
          <label className="text-md pl-1">Descrição</label>
          <input
            type="text"
            placeholder="Digite a descrição"
            className="border border-gray-400 rounded-lg pl-2 outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-md pl-1">Valor</label>
          <input
            type="text"
            placeholder="Digite o valor"
            onKeyDown={(event: any) => {
              if (!controlNumber.includes(event.key) || event.key === "Dead") {
                event.preventDefault();
              }
            }}
            className="border border-gray-400 rounded-lg pl-2 outline-none"
          />
        </div>
      </div>
      <div className="flex gap-x-4">
        <span>
          <input type="radio" name="group" className="mr-1 cursor-pointer" />
          Entrada
        </span>
        <span>
          <input type="radio" name="group" className="mr-1 cursor-pointer" />
          Saída
        </span>
      </div>
      <div>
        <button className="p-2 bg-green-700 rounded-xl text-white">
          Adicionar
        </button>
      </div>
    </div>
  );
}
