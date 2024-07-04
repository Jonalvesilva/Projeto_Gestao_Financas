"use client";
import React, { useState, useEffect } from "react";
import Container from "./components/Container";
import Field from "./components/Field";
import { Table } from "./components/Table";
import { PaginationButtons } from "./components/PaginationButtons";
import { setAddValor } from "./constants/setValor";

interface Row {
  descricao: string;
  valor: string;
  tipo: "entrada" | "saida";
}

const initialRows: Row[] = [];
const initialValor = {
  total: parseFloat("0"),
  entrada: parseFloat("0"),
  saida: parseFloat("0"),
};

const Home: React.FC = () => {
  const [initial, setInitial] = useState<Row[]>(initialRows);
  const [rows, setRows] = useState<Row[]>(initialRows.slice(0, 4));
  const [page, setPage] = useState(1);
  const [valor, setValor] = useState(initialValor);
  const itemsPerPage = 4;

  useEffect(() => {
    return () => {
      setAddValor(setInitial);
    };
  }, []);

  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    setRows(initial.slice(startIndex, endIndex));

    if (initial.length <= itemsPerPage && page !== 1) {
      setPage(1);
    } else if (page > Math.ceil(initial.length / itemsPerPage)) {
      setPage(Math.max(1, Math.ceil(initial.length / itemsPerPage)));
    }

    let totalEntradas = 0;
    let totalSaidas = 0;

    initial.forEach((row) => {
      const val = parseFloat(row.valor.replace(",", "."));

      if (row.tipo === "entrada") {
        totalEntradas += val;
      } else if (row.tipo === "saida") {
        totalSaidas += val;
      }
    });

    // Formatar os valores com duas casas decimais
    const totalEntradasFormatado = totalEntradas;
    const totalSaidasFormatado = totalSaidas;
    const totalFormatado = totalEntradas - totalSaidas;

    setValor({
      entrada: totalEntradasFormatado,
      saida: totalSaidasFormatado,
      total: totalFormatado,
    });
  }, [initial.length, page]);

  return (
    <section className="h-screen min-h-[1800px] sm:min-h-[1100px] py-12 bg-slate-800/95">
      <div className="w-full h-full max-w-screen-lg mx-auto flex flex-col items-center">
        <h2 className="pt-12 text-xl sm:text-3xl font-semibold text-white">
          Sistema de Gestão de Finanças
        </h2>
        <Container valor={valor} />
        <div className="flex w-full py-12 justify-center lg:justify-start lg:pt-0">
          <Field />
        </div>
        <div className="w-[250px]  min-[640px]:w-[580px] lg:w-[92%] lg:mr-6  bg-white rounded-xl p-6">
          <Table rows={rows} setInitial={setInitial} initial={initial} />
          <PaginationButtons
            currentPage={page}
            onClick={(event) => {
              let target = event.target as HTMLInputElement;
              setPage(Number(target.value));
            }}
            pageCount={Math.ceil(initial.length / 4)}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
