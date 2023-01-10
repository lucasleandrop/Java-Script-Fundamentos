// tipo Number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero /
segundoNumero;

console.log(operacaoMatematica)

// ponto flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuante = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log (novaOperacao)

// NaN -> Not A Number (Não é um numero)

const alura = "Alura";
console.log (alura * primeiroNumero);

// Infinity (numero infinito)

var a = 10
var b = 0
console.log(a/b)

// 0 dividivo por 0 Nan

var c = 0
var d = 0
console.log(c/d)

// Função arredondando para o número inteiro


function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora1 = (salario / horasTrabalhadasNoMes); 
  
    return Math.round(salarioHora1);
  
  }

  console.log(ganhoPorHora(3000,176));
  
  // função mostrando duas casas decimais apenas

  function ganhoPorHora2(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes);
    const total = salarioHora.toFixed(2) 
  
    return total;
  
  }

  console.log(ganhoPorHora2(3000,176));

// Função Formatada para Real

function ganhoPorHora3(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    const formatado = salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
    return formatado;
}
console.log(ganhoPorHora3(3000,176));

