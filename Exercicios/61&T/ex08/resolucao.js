export function escolheTaxi(tf1, vqr1, tf2, vqr2) {
  const Tf1 = parseFloat(tf1);
  const Vqr1 = parseFloat(vqr1);
  const Tf2 = parseFloat(tf2);
  const Vqr2 = parseFloat(vqr2);

  if (Tf1 == Tf2 && Vqr1 == Vqr2) {
    return "Tanto faz";
  } else if (Tf1 <= Tf2 && Vqr1 <= Vqr2) {
    return "Empresa 1";
  } else if (Tf1 >= Tf2 && Vqr1 >= Vqr2) {
    return "Empresa 2";
  } else {
    const N = ((Tf1 - Tf2) / (Vqr2 - Vqr1)).toPrecision(3);
    const valor1 = Tf1 + Vqr1 * (N - 1);
    const valor2 = Tf2 + Vqr2 * (N - 1);
    const Xpto = valor1 < valor2 ? 1 : 2;
    const Ypto = Xpto == 1 ? 2 : 1;

    return `Empresa ${Xpto} quando a distância < ${N}, Tanto faz quando a distância = ${N}, Empresa ${Ypto} quando a distância > ${N}`;
  }
}
