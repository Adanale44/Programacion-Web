function num() {
  const num = document.getElementById("num").value;
  //dentro de una funcion siempre tiene que haber un valor de retorno

  return parseInt(num);
}

function num2() {
  const num2 = document.getElementById("num2").value;

  return parseInt(num2);
}

function calcular() {
  const Resultado = num() + num2();
  document.getElementById("Resultado").textContent = Resultado;
}
