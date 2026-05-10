function telephoneCheck(str) {

  // Regex para validar telefone dos EUA
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;

  return regex.test(str);
}

telephoneCheck("555-555-5555");