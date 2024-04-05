/*

1. Crie uma função recursiva que receba um número inteiro positivo N e calcule o somatório dos números de 1 a N.

2. Faça uma funcão recursiva que receba um número inteiro positivo par N e imprima utilizando o console.log(), todos os números pares de 0 até N em ordem decrescente.

*/

//1º exercício
function somatorioRecursivo(n){
    if(n==1){
        return 1
    }else{
        return n + somatorioRecursivo(n-1)
    }
}

const n1 = 10
const resultado1 = somatorioRecursivo(n1)
console.log(`O somatório dos números de 1 a ${n1} é ${resultado1}.`);

//2º exercício

function imprimirParesDecrescente(n){
    //Se N for menor que 0, não faz nada
    if (n < 0){
        return
    }
    //Se N for par, imprime
    if(n % 2 == 0){
        console.log(n)
    }
    //chamada recursiva para o numero anteiror a N
    imprimirParesDecrescente(n-1)
}
const n2 = 10
console.log(`Os números Pares de 0 à ${n2} em ordem decrescente são:`)
imprimirParesDecrescente(n2)