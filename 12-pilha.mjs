import Stack from './lib/Stack.mjs'

let pilha = new Stack()

console.log('Esta vazia? ', pilha.isEmpty)
console.log(pilha.print())

pilha.push(35)
pilha.push(38)
pilha.push(40)
pilha.push(10)
pilha.push(9)

console.log('Esta vazia? ', pilha.isEmpty)
console.log(pilha.print())

let removido1 = pilha.pop()
let removido2 = pilha.pop()

console.log({removido1})
console.log({removido2})

console.log('Esta vazia? ', pilha.isEmpty)
console.log(pilha.print())

let ultimo = pilha.peek()

console.log({ultimo})
