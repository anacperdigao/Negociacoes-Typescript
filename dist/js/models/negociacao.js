// Vou criar atributos e eles não podem ser modificados depois que uma instância de negociação é criada.
// Por isso eu uso a tralha antes dos atributos.

export class Negociacao {
    #data;
    #quantidade;
    #valor;

    constructor(data, quantidade, valor) {
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    // Vou criar getters para poder enxergar os atributos, uma vez que eu fiz eles privados com a tralha #
    get data() {
        return this.#data;
    }

    get quantidade() {
        return this.#quantidade;
    }

    get valor() {
        return this.#valor;
    }

    get volume() {
        return this.#quantidade * this.#valor;
    }

}