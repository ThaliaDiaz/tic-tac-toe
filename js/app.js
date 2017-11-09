var square = document.querySelectorAll('td');

window.onload = function() {
  var board = document.querySelector('.board-js');
  
  board.addEventListener('click', addJugada);
};
  
var centinel = true;
  
function addJugada(event) {
  if (event.target.matches('td') && event.target.textContent === '') {
    if (centinel) 
      event.target.textContent = 'X';
    else 
      event.target.textContent = 'O';
  
    centinel = !centinel;
  }
}

function reset() {
  for (var i = 0; i < square.length; i++) {
    square[i].textContent = '';
    isXTurn = true;
    square[i].classList.remove('crossOut');
    square[i].classList.remove('gameOver');
  }
  gameOver = false;
  if (isXTurn) playerTurnDisplay.classList.add('xTurn');
  boxesLeftToClick = 9;
}

var matriz = document.getElementsByTagName('td');
for (i = 0; i <= matriz; i++) {
  for (j = 0; j < matriz[0]; j++) {
    
  }
}


if (document.getElementById('uno').firstChild === document.getElementById('dos').firstChild && document.getElementById('dos').firstChild === document.getElementById('tres').firstChild && document.getElementById('tres') !== '' && document.getElementById('uno') !== '' && document.getElementById('dos') !== '') {
  document.write('El ganador es:' + document.getElementById('dos'));
} else if (document.getElementById('cuatro').firstChild === document.getElementById('cinco').firstChild && document.getElementById('cinco').firstChild === document.getElementById('seis').firstChild && document.getElementById('cuatro') !== '' && document.getElementById('cinco') !== '' && document.getElementById('seis') !== '') {
  document.write('El ganador es:' + document.getElementById('cuatro'));
} else if (document.getElementById('siete').firstChild === document.getElementById('ocho').firstChild && document.getElementById('ocho').firstChild === document.getElementById('nueve').firstChild && document.getElementById('siete') !== '' && document.getElementById('ocho') !== '' && document.getElementById('nueve') !== '') {
  document.write('El ganador es:' + document.getElementById('siete'));
} else if (document.getElementById('uno').firstChild === document.getElementById('cuatro').firstChild && document.getElementById('cuatro').firstChild === document.getElementById('siete').firstChild && document.getElementById('uno') !== '' && document.getElementById('cuatro') !== '' && document.getElementById('siete') !== '') {
  document.write('El ganador es:' + document.getElementById('cuatro'));
} else if (document.getElementById('dos').firstChild === document.getElementById('cinco').firstChild && document.getElementById('cinco').firstChild === document.getElementById('ocho').firstChild && document.getElementById('dos') !== '' && document.getElementById('cinco') !== '' && document.getElementById('ocho') !== '') {
  document.write('El ganador es:' + document.getElementById('dos'));
} else if (document.getElementById('tres').firstChild === document.getElementById('seis').firstChild && document.getElementById('seis').firstChild === document.getElementById('nueve').firstChild && document.getElementById('tres') !== '' && document.getElementById('seis') !== '' && document.getElementById('nueve') !== '') {
  document.write('El ganador es:' + document.getElementById('seis'));
} else if (document.getElementById('uno').firstChild === document.getElementById('cinco').firstChild && document.getElementById('cinco').firstChild === document.getElementById('nueve').firstChild && document.getElementById('uno') !== '' && document.getElementById('cinco') !== '' && document.getElementById('nueve') !== '') {
  document.write('El ganador es:' + document.getElementById('cinco'));
} else if (document.getElementById('tres').firstChild === document.getElementById('cinco').firstChild && document.getElementById('cinco').firstChild === document.getElementById('siete').firstChild && document.getElementById('tres') !== '' && document.getElementById('cinco') !== '' && document.getElementById('siete') !== '') {
  document.write('El ganador es:' + document.getElementById('cinco'));
} else {
  document.write('no hay ganador');
}