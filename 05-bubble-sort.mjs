let pass, comps, trocas

function bubbleSort(vetor) {

    pass = 0, comps = 0, trocas = 0

    let trocou

    do {
        pass++
        trocou = false

        // Percurso FOR tradicional até a PENÚLTIMA posição do vetor
        for(let i = 0; i < vetor.length - 1; i++) {
            comps++
            if(vetor[i] > vetor[i + 1]) {
                // Efetua a troca entre os elementos por desestruturação
                [ vetor[i], vetor[i + 1] ] = [ vetor[i + 1], vetor[i] ]
                trocou = true
                trocas++
            }
        }

    } while(trocou)
}

// let nums = [ 77, 44, 22, 33, 99, 55, 88, 0, 66, 11 ]

// Pior caso
// let nums = [ 99, 88, 77, 66, 55, 44, 33, 22, 11, 0 ]

// Melhor caso
//let nums = [ 0, 11, 22, 33, 44, 55, 66, 77, 88, 99 ]

// console.time("Tempo de ordenação")
// bubbleSort(nums)
// let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024
// console.timeEnd("Tempo de ordenação")
// console.log(nums)
// console.log({pass, comps, trocas, memoriaMB})

/***************************************************************/

import { nomes } from './data/nomes-desord.mjs'

console.time('Tempo de ordenação')
bubbleSort(nomes)
let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd('Tempo de ordenação')

console.log(nomes)
console.log({pass, comps, trocas, memoriaMB})