import Queue from "./lib/Queue.mjs";

let fila = new Queue()
console.log("A Fila está vazia? ", fila.isEmpty)
console.log(fila.print())

fila.enqueue("Alexandre")
fila.enqueue("Joao")
fila.enqueue("Fulano")
fila.enqueue("Siclano")
fila.enqueue("Beltrano")

console.log(fila.print())

let atendido = fila.denqueue()
console.log({atendido})
console.log(fila.print())

atendido = fila.denqueue()
console.log({atendido})
console.log(fila.print())

fila.enqueue("Sergio")
console.log(fila.print())

let proximo = fila.peek()
console.log({proximo})
