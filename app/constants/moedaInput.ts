export function moedaInput(id: string) {
  const moedaInput = document.getElementById(id)! as HTMLInputElement;

  moedaInput.addEventListener("keydown", function (e: any) {
    //Não permitir virgula inicial
    if (!e.target.value[0] && e.key == ",") {
      return e.preventDefault();
    }

    //Se o primeiro numero é zero, add 0, e add limite decimal
    if (!e.target.value[0] && e.key == "0") {
      e.target.value = "0,";
      moedaInput.setAttribute("maxLength", e.target.value.length + 2);
      return e.preventDefault();
    }

    //Valor Minino para 0.01
    if (e.target.value[0] == "0") {
      if (e.target.value[2]) {
        if (!e.target.value[3]) {
          if (e.key == "0") {
            alert("Valor minimo de 0.01");
            return e.preventDefault();
          }
        }
      }
    }

    //Remove Limite Decimal se o inicio for diferente de 0
    if (!e.target.value[0] && e.key != "0") {
      moedaInput.removeAttribute("maxLength");
    }

    //Permitir apenas virgula e backspace quando tiver apenas zero no inicio
    if (e.target.value[0] == "0") {
      if (!e.target.value[1]) {
        if (e.key != "Backspace" && e.key != ",") {
          return e.preventDefault();
        }
      }
    }

    //Permitir apenas uma virgula e adiciona limite decimal
    if (e.key == ",") {
      if (e?.target.value[0] != "0") {
        if (!e.target.value.includes(",")) {
          moedaInput.setAttribute("maxLength", e.target.value.length + 3);
        }
      }
      if (e.target.value.includes(",")) {
        return e.preventDefault();
      }
    }
  });
}

export function moedaFormat(id: string) {
  const moedaInput = document.getElementById(id)! as HTMLInputElement;

  moedaInput.addEventListener("blur", function (e: any) {
    if (
      !e.target.value.includes(",") &&
      e.target.value[0] != "0" &&
      e.target.value != ""
    ) {
      moedaInput.setAttribute("maxLength", e.target.value.length + 3);
      e.target.value += ",00";
    }
    if (
      e.target.value == "0" ||
      e.target.value == "0," ||
      e.target.value == "0,0"
    ) {
      alert("Valor nao pode ser nulo");
      moedaInput.setAttribute("maxLength", e.target.value.length);
      e.target.value = "0,01";
    }
  });
}
