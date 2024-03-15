let comps

function buscaBinaria(vetor, valorBusca){
    comps = 0
    let ini = 0
    let fim = vetor.length - 1

    while(fim >= ini){
        comps++
        let meio = Math.floor((ini + fim)/2)
        if(valorBusca === vetor[meio]){
            comps++
            return meio
        }
        else if(valorBusca > vetor[meio]){
            comps += 2
            ini = meio + 1
        } else{
            comps += 2
            fim = meio - 1
        }
    }
    return -1
}

// let nums = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99]

// console.log('Posição de 33: ', buscaBinaria(nums, 33), ' Comparações: ', comps)

import { nomes } from './data/vetor-nomes.mjs'

console.log(`Posição de ALEXANDRE: ${buscaBinaria(nomes, 'ALEXANDRE')}, Comparações: ${comps}`)
