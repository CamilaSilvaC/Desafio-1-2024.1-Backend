function palindrome(str) {

  // Remove tudo que não for letra ou número e transforma a string em minúscula
  let textoLimpo = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Inverte a string
  let textoInvertido = textoLimpo.split("").reverse().join("");

  // Compara o texto 
  return textoLimpo === textoInvertido;
}

palindrome("eye");