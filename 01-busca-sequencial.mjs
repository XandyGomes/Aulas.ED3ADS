let comps
function buscaSequencial(vetor, valorBusca){
    comps = 0
    for(let i = 0; i < vetor.length; i++ ){
        comps++
        if(vetor[i] === valorBusca ) return i  
    }
    return -1
}

// const frutas = [ "laranja", "maça", "uva", "pera", "jabuticaba", "limão", "mamão" ]

// console.log("Posição de pera: ", buscaSequencial(frutas,"pera"))
// console.log("Posição de uva: ", buscaSequencial(frutas,"uva"))
// console.log("Posição de laranja: ", buscaSequencial(frutas,"laranja"))
// console.log("Posição de abacate: ", buscaSequencial(frutas,"abacate"))

import { nomes } from './data/vetor-nomes.mjs'

console.log("Posição de ALEXANDRE: ",buscaSequencial(nomes, "ALEXANDRE"), "Comparações: ",comps )

