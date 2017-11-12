var count = 0;
var win = false;
var centinel = true;

var uno = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById('tres');
var cuatro = document.getElementById('cuatro');
var cinco = document.getElementById('cinco');
var seis = document.getElementById('seis');
var siete = document.getElementById('siete');
var ocho = document.getElementById('ocho');
var nueve = document.getElementById('nueve');

window.onload = function() {
  var board = document.querySelector('.board-js');
  
  board.addEventListener('click', addJugada);
  document.getElementById('reset').addEventListener('click', reset);
};
  
  
function addJugada(event) {
  if (event.target.matches('td') && event.target.textContent === '') {
    if (centinel) {
      event.target.textContent = 'X';
      count++;
    } else {
      event.target.textContent = 'O';
      count++;
    }
  
    centinel = !centinel;
  }
  // llamando  a la funcion  winner, en el mejor de los casos se gana con cinco jugadas y en el peor de los casos con 9
  if (count >= 5 && count <= 9) {
    winner();
  }
}

function reset() {
  window.location.reload();
}

function winner() {
  if ((uno.textContent === 'X' && dos.textContent === 'X' && tres.textContent === 'X') ||
  (cuatro.textContent === 'X' && cinco.textContent === 'X' && seis.textContent === 'X') ||
  (siete.textContent === 'X' && ocho.textContent === 'X' && nueve.textContent === 'X') ||
  (uno.textContent === 'X' && cuatro.textContent === 'X' && siete.textContent === 'X') ||
    (dos.textContent === 'X' && cinco.textContent === 'X' && ocho.textContent === 'X') ||
    (tres.textContent === 'X' && seis.textContent === 'X' && nueve.textContent === 'X') ||
    (uno.textContent === 'X' && cinco.textContent === 'X' && nueve.textContent === 'X') ||
    (tres.textContent === 'X' && cinco.textContent === 'X' && siete.textContent === 'X')) {
    document.getElementById('result').innerHTML = 'Ganador: X ';
    count = 10;
    win = true;
    // Declaramos todas las posibles situaciones en la que ganaria O
  } else if ((uno.textContent === 'O' && dos.textContent === 'O' && tres.textContent === 'O') ||
  (cuatro.textContent === 'O' && cinco.textContent === 'O' && seis.textContent === 'O') ||
  (siete.textContent === 'O' && ocho.textContent === 'O' && nueve.textContent === 'O') ||
  (uno.textContent === 'O' && cuatro.textContent === 'O' && siete.textContent === 'O') ||
    (dos.textContent === 'O' && cinco.textContent === 'O' && ocho.textContent === 'O') ||
    (tres.textContent === 'O' && seis.textContent === 'O' && nueve.textContent === 'O') ||
    (uno.textContent === 'O' && cinco.textContent === 'O' && nueve.textContent === 'O') ||
    (tres.textContent === 'O' && cinco.textContent === 'O' && siete.textContent === 'O')) {
    document.getElementById('result').innerHTML = 'Ganador: O ';
    count = 10;
    win = true;
  } else {

  }
}