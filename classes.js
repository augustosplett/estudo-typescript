"use strict";
var Data = /** @class */ (function () {
    //se todos os acessos foram públicos eu não precise declarar as propriedades e nem atribuí-las no construtor
    function Data(dia, mes, ano) {
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
//posso definir modeificadores de acesso em TS
var minhaData = new Data(1, 1, 2020);
var minhaSegundaData = new Data(1, 1);
