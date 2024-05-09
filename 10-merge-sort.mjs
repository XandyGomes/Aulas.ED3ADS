function mergeSort(vetor){
    if(vetor.length < 2) return vetor

    let meio = Math.floor(vetor.length / 2)

    let vetEsq = vetor.slice(0, meio)
    let vetDir = vetor.slice(meio)

    vetEsq = mergeSort(vetEsq)
    vetDir = mergeSort(vetDir)

    let posEsq = 0
    let posDir = 0
    let vetRes = []

    while(posEsq < vetEsq.length && posDir < vetDir.length){
        if(vetEsq[posEsq] < vetDir[posDir]){
            vetRes.push(vetEsq[posEsq])
            posEsq++

        }else{
            vetRes.push(vetDir[posDir])
            posDir++

        }
    }
    let sobra
    
    if(posEsq < posDir){
        sobra = vetEsq.slice(posEsq)
    }else {
        sobra = vetDir.slice(posDir)
    }

    return[...vetRes, ...sobra]
}


// let nums = [ 7, 3, 2, 16, 24, 4, 11, 9]

// let numsOrd = mergeSort(nums)

// console.log({numsOrd})

import { nomes } from './data/nomes-desord.mjs'

console.time('Tempo de ordenação')
mergeSort(nomes)
let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd('Tempo de ordenação')

console.log(nomes)
console.log({memoriaMB})

