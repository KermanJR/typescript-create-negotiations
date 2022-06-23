export class Negociacoes {
    constructor() {
        //Guarda uma lista de negociacoes
        //private negociacoes: Array<Negociacao> = [];
        this.negociacoes = [];
    }
    //adiciona nova negociacao na lista de negociacoes
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //retorna todas as negociacoes da lista de negociacoes
    lista() {
        //spread operator
        return this.negociacoes;
    }
}
//const lista: Array<String> = [];
//lista.push('10')
//lista.push(11)
