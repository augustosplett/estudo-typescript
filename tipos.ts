//boolean
const contaPaga: boolean = false;

//Number
const idade: number = 33;
const avaliacao: number = 4.5;

//String
const nome: string = 'Augusto';

//Array
const idades: number[] = [23, 28, 45, 32, 45];
const idades2: Array<number> = [23, 28, 45, 32, 45];

//Tuple
let jogadores: [string, string, string];
jogadores = ['augusto', 'fulano','ciclano'];

//Enum
enum StatusAprovacao{
    Aprovado = '001',
    Pendente = '002',
    Reprovado ='003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

//Any
const retornoDaAPI: any[]=[123,'augusto',false];

//Void
function printNaTela(msg:string): void{
    console.log(msg);
}

//Null e Undefined
const u: undefined = undefined;
const n: null = null;

//Object
function criar(objeto: object){
    //
};

//Never
function loopInfinito():never{
    while(true){}
}

//Union Types
function exibirNota(nota: number | string){
    console.log(`A nota é ${nota}`);
}

//Alias
type Funcionarios = Array<string>;
const funcionarios: Funcionarios = ['augusto','fulano','ciclano'];

type FuncionarioObjeto = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

const funcionariosArray: FuncionarioObjeto[] = [
    {
        nome: 'augusto',
        sobrenome: 'splett',
        dataNascimento: new Date(),
    },{
        nome: 'ciclano',
        sobrenome: 'splett',
        dataNascimento: new Date(),
    }
];

//Valores nulos ou opcionais
type Teste = {
    novoNome? : string;
}

//Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();

//const input1 = document.getElementById('numero1') as HTMLInputElement;
const input1 = <HTMLInputElement>document.getElementById('numero1');
console.log(input1.value)