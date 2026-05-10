function rot13(str) {

  let resultado = "";


  for (let i = 0; i < str.length; i++) {

    let letra = str[i];

    // Pega o código ASCII da letra
    let codigo = str.charCodeAt(i);

    // Verifica se é uma letra maiúscula (A-Z)
    if (codigo >= 65 && codigo <= 90) {

      // Aplica o ROT13
      codigo = codigo + 13;

      // Se passar do Z, volta para o começo
      if (codigo > 90) {
        codigo = codigo - 26;
      }

      // Converte para letra
      resultado += String.fromCharCode(codigo);

    } else {

      
      resultado += letra;
    }
  }

  return resultado;
}

rot13("SERR PBQR PNZC");