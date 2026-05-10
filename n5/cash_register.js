function checkCashRegister(price, cash, cid) {

  let troco = cash - price;

  const valores = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.10],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]
  ];

  let resultado = [];
  let total = 0;

  // Soma o dinheiro do caixa
  for (let i = 0; i < cid.length; i++) {
    total += cid[i][1];
  }

  total = Number(total.toFixed(2));
  troco = Number(troco.toFixed(2));

  // Se não tiver dinheiro suficiente
  if (total < troco) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    };
  }

  
  if (total === troco) {
    return {
      status: "CLOSED",
      change: cid
    };
  }

  // Percorre as notas do maior para o menor
  for (let i = 0; i < valores.length; i++) {

    let nome = valores[i][0];
    let valor = valores[i][1];

    let caixa = 0;

    
    for (let j = 0; j < cid.length; j++) {
      if (cid[j][0] === nome) {
        caixa = cid[j][1];
      }
    }

    let usado = 0;


    while (troco >= valor && caixa > 0) {

      troco -= valor;
      caixa -= valor;
      usado += valor;

      troco = Number(troco.toFixed(2));
      caixa = Number(caixa.toFixed(2));
      usado = Number(usado.toFixed(2));
    }

    // Adiciona no resultado
    if (usado > 0) {
      resultado.push([nome, usado]);
    }
  }

  // Se não conseguiu dar troco exato
  if (troco > 0) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    };
  }

  return {
    status: "OPEN",
    change: resultado
  };
}
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);