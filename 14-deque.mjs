import Deque from './lib/Deque.mjs'

let listaCompras = new Deque()

//alimentício
listaCompras.insertFront("Arroz")
listaCompras.insertFront("Feijão")
listaCompras.insertFront("Macarrão")
console.log(listaCompras.print())

//higiene pessoal
listaCompras.insertBack('Sabão em pó')
listaCompras.insertBack('Desodorante')
listaCompras.insertBack('Agua sanitária')
console.log(listaCompras.print())

listaCompras.insertFront('Café')
listaCompras.insertFront('Açúcar')
listaCompras.insertBack('Shampoo')
console.log(listaCompras.print())

listaCompras.removeFront()
listaCompras.removeBack()
console.log(listaCompras.print())

let primeiro = listaCompras.peekFront()
let ultimo = listaCompras.peekBack()

console.log({primeiro})
console.log({ultimo})