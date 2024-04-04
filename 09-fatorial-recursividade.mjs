function fatorial(n){
    let res = 1
    for(let i=n; i>1; i--){
        res = res * i
    }
    return res
} 

console.log("Fatorial de 5:", fatorial(5))
console.log("Fatorial de 4:", fatorial(4))
console.log("Fatorial de 3:", fatorial(3))
console.log("Fatorial de 2:", fatorial(2))
console.log("Fatorial de 1:", fatorial(1))
console.log("Fatorial de 0:", fatorial(0))

function fatorialRecursivo(n){
    if(n <= 1){
        return 1
    }else {
        return n * fatorialRecursivo(n - 1)
    }
}

console.log("Fatorial Recursivo de 5:", fatorialRecursivo(5))
console.log("Fatorial Recursivo de 4:", fatorialRecursivo(4))
console.log("Fatorial Recursivo de 3:", fatorialRecursivo(3))
console.log("Fatorial Recursivo de 2:", fatorialRecursivo(2))
console.log("Fatorial Recursivo de 1:", fatorialRecursivo(1))
console.log("Fatorial Recursivo de 0:", fatorialRecursivo(0))