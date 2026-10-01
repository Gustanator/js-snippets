const estudantes = [
    { nome: "Arthur", nota: 8 },
    { nome: "Brian", nota: 2 },
    { nome: "GUilherme", nota: 5 },
    { nome: "Gustavo", nota: 10 },
    { nome: "Iago", nota: 6 },
    { nome: "Luiz", nota: 4 },
    { nome: "Sebastião", nota: 9 },
    { nome: "Ygor", nota: 3 } ]

const listaAprovados = estudantes.map((alunos) => {
    let estaAprovado

    if (alunos.nota < 5) {
        estaAprovado = false
    } else {
        estaAprovado = true
    }
    return {
        nome: alunos.nome,
        estaAprovado: estaAprovado ? "Sim" : "Não"
    }
})

console.log(listaAprovados)