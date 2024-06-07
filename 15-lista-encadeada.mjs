import LinkedList from './lib/LinkedList.mjs'

const lista = new LinkedList()

// Inserção em lista vazia (1º caso)
lista.insert(0, 'Fusca')

// Inserção na 1ª posição (2º caso)
lista.insert(0, 'Corcel')

// Inserções na posição final (3º caso)
lista.insert(2, 'Opala')
lista.insert(3, 'Chevette')
lista.insert(4, 'Maverick')

console.log(lista.print())

// Inserções em posição intermediária (4º caso)
lista.insert(3, 'Brasília')
console.log(lista.print())

lista.insert(2, 'Gol')
console.log(lista.print())

// Testando os métodos de atalho
lista.insertHead('Belina')  // Primeira posição
console.log(lista.print())

lista.insertTail('Del Rey')
console.log(lista.print())

// Remoção do primeiro nodo
let removido = lista.remove(0)
console.log({removido})
console.log(lista.print())

// Remoção do último nodo
removido = lista.remove(lista.count - 1)
console.log({removido})
console.log(lista.print())

// Remoção do nodo da posição 4
removido = lista.remove(4)
console.log({removido})
console.log(lista.print())

// testando os métodos de atalho
let primeiro = lista.removeHead()
let ultimo = lista.removeTail()
console.log({primeiro, ultimo})
console.log(lista.print())

// Testando indexOf()
let idxFusca = lista.indexOf('Fusca')
let idxOpala = lista.indexOf('Opala')
let idxBelina = lista.indexOf('Belina')

console.log({idxFusca, idxOpala, idxBelina})

// Testando peek()
let pos0 = lista.peek(0)
let pos3 = lista.peek(3)
let pos5 = lista.peek(5)

console.log({pos0, pos3, pos5})