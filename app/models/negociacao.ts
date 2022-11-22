// Vou criar atributos e eles não podem ser modificados depois que uma instância de negociação é criada.
// Eu poderia usar a tralha antes dos atributos, mas seria mais usado no JS.
// No TS é melhor usar a forma private, e por convenção, não é obrigação, se coloca underline antes do atributo
// já pra indicar que é privado.

export class Negociacao {
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    // Vou criar getters para poder enxergar os atributos, uma vez que eu fiz eles privados com a tralha #
    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }

}