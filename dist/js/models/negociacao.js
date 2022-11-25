// Vou criar atributos e eles não podem ser modificados depois que uma instância de negociação é criada.
// Eu poderia usar a tralha antes dos atributos, mas seria mais usado no JS.
// No TS é melhor usar a forma private, e por convenção, não é obrigação, se coloca underline antes do atributo
// já pra indicar que é privado.
// OS CÓDIGOS ANTIGOS ESTARÃO EMBAIXO NO CÓDIGO NOVO
//------------------------------------------ CÓDIGO NOVO REFATORADO
// Aqui eu vou passar todo mundo pra public e depois atribuir o read only, ou seja, nao vou precisar de getters
// pq todo mundo vai poder ver, mas o read only vai travar pra ninguem mexer em nada depois de criada.
export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    // Aqui ta dando um problema que mesmo sendo private ou read only, eu consigo mudar a data atraves de métodos,
    // (não consigo mudar apenas por atribuição), entao eu vou criar uma cópia da data, e quem tentar mudar,
    // vai mudar a cópia, e nao a original.
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
}
//----------------------------------------------- CÓDIGO ANTIGO 1
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
//------------------------------------------ CÓDIGO ANTIGO 2
// Se no construtor da sua classe você coloca o modificador private, explicita isso, ou public, isso indica
// para o TypeScript que ele vai por debaixo dos panos criar uma propriedade da sua classe que contenha o 
// mesmo nome do seu com os parâmetros do construtor, e por debaixo dos panos ele vai fazer a atribuição, 
// vai pegar esse valor e vai jogar lá para você.
// export class Negociacao {
//     constructor(
//         private _data: Date, 
//         private _quantidade: number, 
//         private _valor: number
//     ){}
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
