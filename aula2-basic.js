//Aula 16.03

//tipos de dados
let name = "João";
let age = 20;
let money = 1288.99;
let isApproved = true;
console.log(name, typeof name);
console.log(age, typeof age);
age = "Vinte";
console.log(age, typeof age);
console.log(money, typeof money);
console.log(isApproved, typeof isApproved);
console.log(age.substring(0, 4));
//string
console.log('--string--');
let faculdade = 'Centro Universitário Estácio';
//coloca a palavra em caixa baixa
console.log(faculdade.toLowerCase());
//coloca a palavra em caixa alta
console.log(faculdade.toUpperCase());
//retorna o tamanho da string
console.log(faculdade.length);
//busca posição de uma letra
console.log(faculdade.indexOf('o'));
//
console.log(faculdade.concat(faculdade.substring(0,4)));
//
const sigla = 'FIC';
const fullName = faculdade + ' - ' + sigla;
const fullName2 = faculdade + sigla;
const faculdade3 = `${faculdade} - ${sigla}`;
//
const meuNome = 'Miqueias';
const minhaIdade = 26;
const minhaProfissao = 'Desenvolvedor';
const meuBairro = 'Luciano Cavalcante';
//const teste1 = 'Meu nome é ' + meuNome +
//const teste2 =  
///tipos de variáveis
var variavel2 = 'Ola mundo2';
console.log(variavel2);
variavel2 = 'Ola mundo2 alterado';
console.log(variavel2);
let variavel1 = 'Ola mundo';
console.log(variavel1);
variavel1 = 'Ola mundo1 alterado';
console.log(variavel1);
const variavel3 = 'Ola mundo3';
//variavel3 = 'Ola mundo3 alterado';
console.log(variavel3);
///operações
let a = 10;
let b = 5;
let c = 2;
console.log(a + b);//soma
console.log(a - b);//subtração
console.log(a * b);//multiplicação
console.log(a / b);//divisão
console.log(a % b);//resto da divisão
console.log(a ** b);//potencia
console.log(Math.sqrt(a));//raiz quadrada
///concatenacoes
///template strings
///arrays
let array = [1, 2, 3, 4, 5];//array de inteiros - 05 posições
let array2 = ['a', 'b', 'c', 'd', 'e'];//array de string - 
let array3 = [1, 'a', true, 2.5, 'Miqueias', [10, 'a, true']];
console.log(array3[5][2]);
///objetos
///funcoes
function somar(a, b){
    return a + b;
}

const subtrair = function (a, b){
    return a - b;
}

const multiplicar = (a, b) => {
    return a * b;
}

const operacaoComplexa = (a, b) => {
    const soma = somar(a, b);
    const subtracao = subtrair(a, somar(soma, b));
    const multiplicacao = multiplicar(multiplicar(somar(a, soma), subtrair(subtracao, somar(subtracao, b))),b);
    return soma + subtracao + multiplicacao;
}
const resultadoComplexo = operacaoComplexa(10, 5);
console.log(resultadoComplexo);
///iteradores
for(let i = 0; i < array3.length; i++){
    console.log(array3[i]);
}
//para cada elemento dentro do array ele fará uma ação
array3.forEach(element => {
    console.log(element);
});

array3.map(element => {
    console.log(element);
});

const array5 = array3.map(element => {
    console.log(element);
    return element + ' teste';
});

const array4 = array3.filter(element => {
    return element === 2.5;
});
