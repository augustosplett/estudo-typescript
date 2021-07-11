"use strict";
//boolean
var contaPaga = false;
//Number
var idade = 33;
var avaliacao = 4.5;
//String
var nome = 'Augusto';
//Array
var idades = [23, 28, 45, 32, 45];
var idades2 = [23, 28, 45, 32, 45];
//Tuple
var jogadores;
jogadores = ['augusto', 'fulano', 'ciclano'];
//Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Reprovado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
//Any
var retornoDaAPI = [123, 'augusto', false];
//Void
function printNaTela(msg) {
    console.log(msg);
}
//Null e Undefined
var u = undefined;
var n = null;
//Object
function criar(objeto) {
    //
}
;
//Never
function loopInfinito() {
    while (true) { }
}
//Union Types
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
var funcionarios = ['augusto', 'fulano', 'ciclano'];
var funcionariosArray = [
    {
        nome: 'augusto',
        sobrenome: 'splett',
        dataNascimento: new Date(),
    }, {
        nome: 'ciclano',
        sobrenome: 'splett',
        dataNascimento: new Date(),
    }
];
//Type Assertion
var minhaIdade = 23;
minhaIdade.toString();
//const input1 = document.getElementById('numero1') as HTMLInputElement;
var input1 = document.getElementById('numero1');
console.log(input1.value);
