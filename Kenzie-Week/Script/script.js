//valores
var weightElement = document.getElementById("pesoToDisplay");
var heightElement = document.getElementById("tamanhoToDisplay");
var imcElement = document.getElementById("imgToDisplay");

function weightToDisplay(value) {
  weightElement.innerHTML = `${value} kg`;
}

// Update the current slider value (each time you drag the slider handle)
function heightToDisplay(value) {
  const newSize = value / 100;
  heightElement.innerHTML = `${newSize} m`;
}

function submitBtn() {
  const immcValor =
    parseInt(weightElement.textContent) /
    (parseFloat(heightElement.textContent) *
      parseFloat(heightElement.textContent));

  if (immcValor == 0 || immcValor < 0 || immcValor == NaN) {
    alert('Por Favor insira um valor!')
  } else {
    if (immcValor <= 18.5) {
      imcElement.innerHTML = '<img src=\'img/magrelo.png\'>';
    } else if (immcValor > 18.5 && immcValor < 25) {
      imcElement.innerHTML = '<img src=\'img/normal.gif\'>';
    } else if (immcValor > 25 && immcValor < 30) {
      imcElement.innerHTML = '<img src=\'img/the-fat-man-4510771_960_720.png\'>';
    } else if (immcValor > 30 && immcValor < 35) {
      imcElement.innerHTML = '<img src=\'img/muitogordo.png\'>';
    } else if (immcValor > 35 && immcValor < 40) {
      imcElement.innerHTML = '<img src=\'img/muitogordo.png\'>';
    }
    else if (immcValor > 40){
      imcElement.innerHTML = '<img src=\'img/morto.png\'>';
    }
  }
}
