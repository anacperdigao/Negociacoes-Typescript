// Vou criar atributos e eles não podem ser modificados depois que uma instância de negociação é criada.
// Eu poderia usar a tralha antes dos atributos, mas seria mais usado no JS.
// No TS é melhor usar a forma private, e por convenção, não é obrigação, se coloca underline antes do atributo
// já pra indicar que é privado.
// O CÓDIGO ANTIGO ESTARÁ EMBAIXO NO CÓDIGO NOVO
//------------------------------------------ CÓDIGO NOVO REFATORADO
// Se no construtor da sua classe você coloca o modificador private, explicita isso, ou public, isso indica
// para o TypeScript que ele vai por debaixo dos panos criar uma propriedade da sua classe que contenha o 
// mesmo nome do seu com os parâmetros do construtor, e por debaixo dos panos ele vai fazer a atribuição, 
// vai pegar esse valor e vai jogar lá para você.
export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
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
//----------------------------------------------- CÓDIGO ANTIGO
// export class Negociacao {
//     private _data: Date;
//     private _quantidade: number;
//     private _valor: number;
//     constructor(data: Date, quantidade: number, valor: number) {
//         this._data = data;
//         this._quantidade = quantidade;
//         this._valor = valor;
//     }
//     // Vou criar getters para poder enxergar os atributos, uma vez que eu fiz eles privados com a tralha #
//     get data(): Date {
//         return this._data;
//     }
//     get quantidade(): number {
//         return this._quantidade;
//     }
//     get valor(): number {
//         return this._valor;
//     }
//     get volume(): number {
//         return this._quantidade * this._valor;
//     }
// }
