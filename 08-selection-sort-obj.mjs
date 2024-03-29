let pass, comps, trocas;
function selectionSort(vetor, fnComp) {
  (pass = 0), (comps = 0), (trocas = 0);
  for (let posSel = 0; posSel < vetor.length - 1; posSel++) {
    pass++;
    let posMenor = posSel + 1;

    for (let i = posMenor + 1; i < vetor.length; i++) {
      comps++;
      if (fnComp(vetor[posMenor], vetor[i])) {
        posMenor = i;
      }
    }
    comps++;
    if (fnComp(vetor[posSel], vetor[posMenor])) {
      [vetor[posSel], vetor[posMenor]] = [vetor[posMenor], vetor[posSel]];
      trocas++;
    }
  }
}

import { objMotoristas } from "./data/motoristas-obj-desord.mjs";

// console.time('Tempo de ordenação')
// selectionSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista > elem2.nome_motorista  )
// let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024
// console.timeEnd('Tempo de ordenação')

// console.log(objMotoristas)
// console.log({pass, comps, trocas, memoriaMB})

console.time("Tempo de ordenação");

const func = (elem1, elem2) => {
    if (elem1.razao_social === elem2.razao_social) {
      return elem1.nome_motorista > elem2.nome_motorista;
    } else return elem1.razao_social > elem2.razao_social;
  }

selectionSort(objMotoristas, func);

let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024;
console.timeEnd("Tempo de ordenação");

console.log(objMotoristas);
console.log({ pass, comps, trocas, memoriaMB });
