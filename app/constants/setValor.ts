import { success } from "./toast";

interface Row {
  descricao: string;
  valor: string;
  tipo: "entrada" | "saida";
}

export function setAddValor(setInitial: any) {
  const add = document.getElementById("add");
  const descricao = document.getElementById("descricao") as HTMLInputElement;
  const val = document.getElementById("valor") as HTMLInputElement;
  const tipos = document.querySelectorAll<HTMLInputElement>(
    'input[name="group"]'
  );

  const handleClick = () => {
    if (descricao.value === "") {
      alert("Adicione uma Descrição");
      return;
    }

    if (val.value === "") {
      alert("Adicione um Valor");
      return;
    }

    let value = "";
    tipos.forEach((tipo) => {
      if (tipo.checked) {
        value = tipo.value;
      }
    });

    const newObj: Row = {
      descricao: descricao.value,
      valor: val.value,
      tipo: value as "entrada" | "saida",
    };

    setInitial((prevRows: any) => [...prevRows, newObj]);

    descricao.value = "";
    val.value = "";

    success("Adicionado com Sucesso");
  };

  add?.addEventListener("click", handleClick);

  return () => {
    add?.removeEventListener("click", handleClick);
  };
}
