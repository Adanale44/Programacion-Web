let contador = 0; //let se puede mutar con conts no se puede mutar
function incrmentarValor() {
  contador = contador + 1;

  document.getElementById("Numero").textContent = contador;
}
