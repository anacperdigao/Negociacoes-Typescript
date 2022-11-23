// Aqui vai representar uma lista de negociações, ou seja, um array.
// Só que num array comum eu poderia retirar um negociação se eu quisesse, mas eu nao quero permitir isso,
// por isso vou criar esse novo modelo que me dará métodos para não deixar modificar.

import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];
     
    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao)
    }

    lista(): ReadonlyArray<Negociacao> {
        // Aqui eu to garantindo a imutabilidade da lista, uma vez que eu to retornando um cópia da lista original
        // Só que eu quero fazer usando o TS, sem ter que fazer spread operator, mas seria uma solução
        // return [...this.negociacoes] 
        // POR ISSO EU USEI O READONLY ARRAY NA LINHA 14
        return this.negociacoes 
    }
}