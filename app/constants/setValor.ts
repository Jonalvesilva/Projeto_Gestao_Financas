import { success } from "./toast";

interface Row {
  descricao: string;
  valor: string;
  tipo: "entrada" | "saida";
}

export function setAddValor(setInitial: any) {
  const handleClick = () => {
    const descricao: any = document.getElementById("descricao");
    const val: any = document.getElementById("valor");
    const tipos: any = document.querySelectorAll('input[name="group"]:checked');

    if (!descricao.value) {
      alert("Adicione uma Descrição");
      return;
    }

    if (!val.value) {
      alert("Adicione um Valor");
      return;
    }

    if (tipos.length === 0) {
      alert("Selecione um Tipo (Entrada ou Saída)");
      return;
    }

    const newObj = {
      descricao: descricao.value,
      valor: val.value,
      tipo: tipos[0].value,
    };

    setInitial((prevRows: any) => [...prevRows, newObj]);

    descricao.value = "";
    val.value = "";

    success("Adicionado com Sucesso");
  };

  document.addEventListener("DOMContentLoaded", () => {
    const add: any = document.getElementById("add");
    add.addEventListener("click", handleClick);

    return () => {
      add.removeEventListener("click", handleClick);
    };
  });
}
