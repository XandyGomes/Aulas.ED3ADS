export default class Queue {
  #data;

  constructor() {
    this.#data = [];
  }

  enqueue(val) {
    this.#data.push(val);
  }

  denqueue() {
    return this.#data.shift();
  }

  peek() {
    return this.#data[0];
  }

  get isEmpty() {
    return this.#data.length === 0;
  }

  print() {
    let output = '[ ';
    for (let i = 0; i < this.#data.length; i++) {
      if (output !== '[ ') output += ', ';
        output += `Posição (${i}): ${this.#data[i]}`;
    }
    return output + ' ]'
  }
}
