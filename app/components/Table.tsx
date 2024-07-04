"use client";
import { useState, useEffect } from "react";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { success } from "../constants/toast";

type Table = {
  descricao: string;
  valor: string;
  tipo: string;
};

export type field = {
  rows: Table[];
  initial: Table[];
  setInitial: (e: any) => void;
};

export function Table({ rows, initial, setInitial }: field) {
  const handleRemoverItem = (index: any) => {
    if (initial.includes(rows[index])) {
      let i = initial.findIndex(
        (item) => JSON.stringify(item) === JSON.stringify(rows[index])
      );
      const arr = initial.slice();
      arr.splice(i, 1);
      setInitial(arr);
    }
    success("Removido com Sucesso");
  };

  return (
    <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
      <thead className="text-white">
        <tr className="bg-blue-600 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-6 lg:mb-0">
          <th className="p-2 text-center h-11">Descrição</th>
          <th className="p-2 text-center h-11">Valor</th>
          <th className="p-2 text-center h-11">Tipo</th>
          <th className="p-2 text-center h-11">Excluir</th>
        </tr>
        <tr className="bg-blue-600 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-6 lg:mb-0">
          <th className="p-2 text-center h-11">Descrição</th>
          <th className="p-2 text-center h-11">Valor</th>
          <th className="p-2 text-center h-11">Tipo</th>
          <th className="p-2 text-center h-11">Excluir</th>
        </tr>
        <tr className="bg-blue-600 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-6 lg:mb-0">
          <th className="p-2 text-center h-11">Descrição</th>
          <th className="p-2 text-center h-11">Valor</th>
          <th className="p-2 text-center h-11">Tipo</th>
          <th className="p-2 text-center h-11">Excluir</th>
        </tr>
        <tr className="bg-blue-600 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-6 lg:mb-0">
          <th className="p-2 text-center h-11">Descrição</th>
          <th className="p-2 text-center h-11">Valor</th>
          <th className="p-2 text-center h-11">Tipo</th>
          <th className="p-2 text-center h-11">Excluir</th>
        </tr>
      </thead>
      <tbody className="flex-1 sm:flex-none sm:border-gray-200 sm:border-2">
        {rows.map((element, index) => {
          return (
            <tr
              key={index}
              className="flex flex-col flex-no wrap sm:table-row mb-[25px] sm:mb-0"
            >
              <td className="border-grey-light border  p-2 h-11 text-center">
                {element.descricao}
              </td>
              <td className="border-grey-light border  p-2 h-11 text-center">
                {`R$ ${element.valor}`}
              </td>
              <td className="border-grey-light border  p-2 h-11 text-center">
                {element.tipo == "entrada" ? (
                  <span className="flex items-center justify-center">
                    <FaRegArrowAltCircleUp
                      size={25}
                      className="text-green-600 "
                    />
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <FaRegArrowAltCircleDown
                      size={25}
                      className="text-red-600"
                    />
                  </span>
                )}
              </td>
              <td className="border-grey-light border p-2 h-h-11 text-center cursor-pointer">
                <span className="flex items-center justify-center">
                  <FaTrashAlt
                    size={25}
                    onClick={() => handleRemoverItem(index)}
                  />
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
