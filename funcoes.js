//let x = "";
//console.log(x);
//x = "oi";

// 1) declara a função
                          // string
function imprimeTexto(texto){
    console.log(texto)
}

// 2) executa a função (1 ou mais vezes)

imprimeTexto("Oi")
imprimeTexto("outro texto")

// três formas de funções

function soma(){
    return 2 + 2;
}

console.log(soma())

// função dentro da função
// (texto) -> valor da soma
imprimeTexto(soma())
