export function checaNumeroEscondido(numero,numeroOculto) {
  var result = new Array;
  var mySeparator = (num) => Number(num);
  const numToArr = Array.from(String(numero), mySeparator);
  const ocultoToArr = Array.from(String(numeroOculto), mySeparator);

  ocultoToArr.forEach(function (item, index) {
    if (numToArr.indexOf(item) > -1) {
      result.push(ocultoToArr[index]);
    }
  });
  if (result.length === ocultoToArr.length) {
    result = true;
  } else {
    result = false;
  }
  return result;
}