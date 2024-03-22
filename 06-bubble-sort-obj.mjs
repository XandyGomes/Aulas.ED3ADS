let pass, comps, trocas;
function bubbleSort(vetor, fnComp) {
  (pass = 0), (comps = 0), (trocas = 0);
  let trocou;

  do {
    pass++;
    trocou = false;

    for (let i = 0; i < vetor.length - 1; i++) {
      comps++;
      if (fnComp(vetor[i], vetor[i + 1])) {
        [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]];
        trocou = true;
        trocas++;
      }
    }
  } while (trocou);
}

import { objMotoristas } from "./data/motoristas-obj-desord.mjs";

//#################################################################################

// function ordenaNomes(a,b){
//     return a.nome_motorista > b.nome_motorista
// }

// bubbleSort(objMotoristas, ordenaNomes)

//#################################################################################

// console.time('Tempo de ordenação')
// bubbleSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista > elem2.nome_motorista)
// console.timeEnd('Tempo de ordenação')

// console.log(objMotoristas)

//#################################################################################

//ordenação em dois niveis: primeiro social e depois por nome_motorista

bubbleSort(objMotoristas, (elem1, elem2) => {
  if (elem1.razao_social === elem2.razao_social) {
    return elem1.nome_motorista > elem2.nome_motorista;
  } else return elem1.razao_social > elem2.razao_social;
});
console.log(objMotoristas)