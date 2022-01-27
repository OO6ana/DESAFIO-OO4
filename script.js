
//1 - crie uma função que exiba uma mensagem no console

function mensagem(){
    console.log("Olá, mundo")
}
mensagem()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

let nome = "lucas"
function mostrarNome(nome){
    console.log(`meu nome é ${nome}`)
}
mostrarNome(nome)

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function mostrandoNome(nome, idade, musica){
    console.log(`Meu nome é ${nome}, eu tenho ${idade} anos e minha música favorita é ${musica}`)
}
mostrandoNome("Lucas", 22, "wadada - kep1er")


//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function text(filme, musica){
    console.log(`O filme ${filme} estreiou nos cinemas esse mês e a música mais viciante é ${musica}`)
}
text("Encanto", "'Não falamos do Bruno'")

// *Bônus:

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triple(number){
    return number*3
}
console.log(triple(3))