//Não pode ser modificada depois de criada.
//Obrigatoriamente tem uma data, quantidade e valor;
//Seu volume é calculado multiplicando-se a quantidade negociada no dia pelo valor negociado.

import { NegociacaoController } from "./controllers/negociacao-controller.js"

const controller = new NegociacaoController();

//Selecionando o form
const form = document.querySelector(".form")

//Adicionando evento ao form
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    controller.adiciona();
})





