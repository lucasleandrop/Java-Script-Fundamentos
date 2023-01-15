// declaração de função

function minhaFuncao(param){
    // bloco de códigos
}

minhaFuncao("param")

// expressão de função

const soma = function(num1, num2){return num1 + num2}
console.log(soma(1,2))

// diferença principal : HOISTING
// função e var são listadas no topo do arquivo, mesmo antes de declaradas pode ser chamadas.

console.log(apresentar())

function apresentar(){
    return "olá";
}

// não funciona
//console.log(soma(1,1))
//const soma = function(num1, num2){return num1 + num2}