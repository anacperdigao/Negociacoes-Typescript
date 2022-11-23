// Aqui vai representar uma lista de negociações, ou seja, um array.
// Só que num array comum eu poderia retirar um negociação se eu quisesse, mas eu nao quero permitir isso,
// por isso vou criar esse novo modelo que me dará métodos para não deixar modificar.

import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];
     
    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao)
    }

    lista(): Array<Negociacao> {
        return this.negociacoes
    }
}