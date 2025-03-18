function IMC(e) {
  e.preventDefault();
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  const alturaMetros = altura / 100;
  const imc = peso / (alturaMetros * alturaMetros);
  console.log(imc);

  if ((18, 5 > imc)) {
    document.getElementById("container-dica").innerText = "Abaixo do peso";
    document.getElementById("container-resultado").innerText = imc.toFixed(2);

    return;
  }
  if (25 < imc && imc < 29) {
    document.getElementById("container-resultado").innerText = imc.toFixed(2);
    document.getElementById("container-dica").innerText = "Sobrepeso";
    return;
  }
  document.getElementById("container-dica").innerText = "Peso normal";
  document.getElementById("container-resultado").innerText = imc.toFixed(2);
  return;
}
