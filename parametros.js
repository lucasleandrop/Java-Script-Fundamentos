// parâmetros de funções

function soma(num1, num2){
    return num1 + num2
}
// escolher os número e jogar no (x,y)
console.log(soma(1,-32))
console.log(soma(11,22))
console.log(soma(1,54))
console.log(soma(12,22))

// parâmetros x argumentos

// orden dos parâmetros

function nomeIdade(nome,idade){
    return `meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade(40,'Juliana'));
console.log(nomeIdade('Juliana',40));

// parâmetro = 1 para caso nao seja colocado apenas 1 parametro não resultar em NaN

function multiplica(numero1 = 1,numero2 = 1){
    return numero1 *numero2
}

// Função (multiplicação) do resultado da função (soma) + função (soma)

console.log(multiplica(soma(4,5),soma(3,3)))