export default class Stack{
    #data

    constructor(){
        this.#data = []
    }

    push(val){
        this.#data.push(val)
    }

    pop(){
        return this.#data.pop()
    }

    peek(){
        return this.#data[this.#data.length - 1]
    }

    get isEmpty(){
        return this.#data.length === 0
    }

    print(){
        return JSON.stringify(this.#data)
    }

}