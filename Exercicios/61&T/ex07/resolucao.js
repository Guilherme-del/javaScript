export function calculaTotalLeds(altura,largura) {
  return altura == 0 || largura == 0 ? 0 : (altura+1)*(largura+1)
}