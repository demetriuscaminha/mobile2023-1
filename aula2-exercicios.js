function calcularArea(forma, medida1, medida2, medida3) {
  let area;

  switch (forma) {
    case "quadrado": //lado ao quadrado
      area = medida1 ** 2;
      break;
    case "retangulo":// base * altura
      area = medida1 * medida2;
      break;
    case "trapezio": //((base maior + base menor) * altura)/2
      area = ((medida1 + medida2) * medida3) / 2;
      break;
    case "circulo": // PI * raio ao quadrado
      area = Math.PI * (medida1 ** 2);
      break;
    default:
      console.log("Forma inválida");
      break;
  }

  return area;
}

const areaFigurasPlanas1 = calcularArea("quadrado", 5);
console.log("A área do QUADRADO é " + areaFigurasPlanas1 + "cm²");

const areaFigurasPlanas2 = calcularArea("retangulo", 5, 10);
console.log("A área do RETÂNGULO é " + areaFigurasPlanas2 + "cm²");

const areaFigurasPlanas3 = calcularArea("trapezio", 15, 10, 8);
console.log("A área do TRAPÉZIO é " + areaFigurasPlanas3 + "cm²");

const areaFigurasPlanas4 = calcularArea("circulo", 5);
console.log("A área do CÍRCULO é " + Math.round(areaFigurasPlanas4).toFixed(2) + "cm²");