//function apresentar(nome){
//    return `Meu  nome é ${nome}`;
//}

// Arrow function
const apresentarArrow = nome => `Meu  nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// Arrow function com mais de 1 linha de instrução

const somaNumerosPequenos = (num1,num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somente numeros de 1 a 9"
    } else {
        return num1 + num2
    }
}

console.log(soma(1,2));
console.log(apresentarArrow('Lucas'));
console.log(somaNumerosPequenos(1,52));
console.log(somaNumerosPequenos(1,5));
// Hoisting: arrow function se comporta como expressão