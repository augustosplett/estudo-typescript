class Data{
    public dia: number;
    private mes: number;
    ano: number;

    //se todos os acessos foram públicos eu não precise declarar as propriedades e nem atribuí-las no construtor
    constructor(dia: number, mes: number, ano: number = 1970){
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;

    }

}
//posso definir modificadores de acesso em TS

const minhaData = new Data(1, 1, 2020);

const minhaSegundaData = new Data(1, 1);


class Carro{
    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ){}

    private alterarVelocidade(delta: number){
    //implementaçao da aceleração ou frenagem
    }
    acelerar(){
        const aceleracao = 5;
        this.alterarVelocidade(aceleracao);
    }

    frear(){
        const desaceleracao = -5;
        this.alterarVelocidade(desaceleracao);
    }

}

//Herança
class Lancer extends Carro{
    constructor(){
        super('Mitsubishi','Lancer', 300);
    }
}