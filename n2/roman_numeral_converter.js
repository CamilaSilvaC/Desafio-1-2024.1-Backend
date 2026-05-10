function convertToRoman(num) {

  // Array com os números romanos e seus valores
  const romanos = [
    { valor: 1000, simbolo: "M" },
    { valor: 900, simbolo: "CM" },
    { valor: 500, simbolo: "D" },
    { valor: 400, simbolo: "CD" },
    { valor: 100, simbolo: "C" },
    { valor: 90, simbolo: "XC" },
    { valor: 50, simbolo: "L" },
    { valor: 40, simbolo: "XL" },
    { valor: 10, simbolo: "X" },
    { valor: 9, simbolo: "IX" },
    { valor: 5, simbolo: "V" },
    { valor: 4, simbolo: "IV" },
    { valor: 1, simbolo: "I" }
  ];

  let resultado = "";


  for (let i = 0; i < romanos.length; i++) {

    // Enquanto o número for maior ou igual ao valor atual
    while (num >= romanos[i].valor) {

      // Adiciona o símbolo romano
      resultado += romanos[i].simbolo;

      // Subtrai o valor do número
      num -= romanos[i].valor;
    }
  }

  return resultado;
}

convertToRoman(36);