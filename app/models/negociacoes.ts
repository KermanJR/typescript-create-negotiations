import { Negociacao } from "./negociacao";

export class Negociacoes{

    //Guarda uma lista de negociacoes
    //private negociacoes: Array<Negociacao> = [];
    private negociacoes: Negociacao[] = [];

    //adiciona nova negociacao na lista de negociacoes
    adiciona(negociacao: Negociacao): void{
        this.negociacoes.push(negociacao)
    }

    //retorna todas as negociacoes da lista de negociacoes
    lista(): ReadonlyArray<Negociacao>{
        //spread operator
        return this.negociacoes;
    }
}

//const lista: Array<String> = [];
//lista.push('10')
//lista.push(11)