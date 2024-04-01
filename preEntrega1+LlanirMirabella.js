//Programa para saber cuantos puntos tiene un piloto de F1 despues de tres grandes premios.
// 1° 25pts - 2° 18pts - 3° 15pts - 4° 12pts - 5° 10pts - 6° 8pts - 7° 6pts - 8° 4pts - 9° 2pts - 10° 1pts  11>= 0pts
//Ingresando las posiciones de las últimas carreras saber cuantos puntos sumó el Piloto. Las posiciones pueden ser de 1° a 20°

// Pedir al usuario Posición del Piloto en los últimos 3 Grandes Premios de Formula 1.
var piloto = prompt("Ingrese Nombre de Piloto");

var total = 0;

for (let i = 1; i < 4; i++) {
  let posicion = Number(
    prompt("Ingrese Posición Gran Premio " + i + ", entre 1 y 20")
  );
  if (posicion >= 1 && posicion <= 20) {
    if (posicion > 10) {
      total = total + 0;
    } else if (posicion === 1) {
      total = total + 25;
    } else if (posicion === 2) {
      total = total + 18;
    } else if (posicion === 3) {
      total = total + 15;
    } else if (posicion === 4) {
      total = total + 12;
    } else if (posicion === 5) {
      total = total + 10;
    } else if (posicion === 6) {
      total = total + 8;
    } else if (posicion === 7) {
      total = total + 6;
    } else if (posicion === 8) {
      total = total + 4;
    } else if (posicion === 9) {
      total = total + 2;
    } else if (posicion === 10) {
      total = total + 1;
    }
  } else {
    alert(
      "La Posición ingresada es inválida, ingrese una posición entre 1 y 20"
    );
    i--;
  }
}

alert(piloto + ": " + total + " pts");
