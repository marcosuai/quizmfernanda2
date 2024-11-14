
let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar
const nome = document.getElementById('nome').value;
// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao: 1,
    pergunta: "Quantos litros de sangue uma pessoa tem?",
    alternativaA: "De 2 a 4 litros",
    alternativaB: "De 4 a 6 litros",
    alternativaC: "Contem 10 litros",
    alternativaD: "Contem 7 litros",
    correta: "De 4 a 6 litros",
}
const q2 = {
    numQuestao: 2,
        pergunta: "De qual filme e a frase continue a nadar?",
        alternativaA: "A culpa e das estrelas",
        alternativaB: "Titanic",
        alternativaC: "Procurando Dori",
        alternativaD: "Homens de coragem",
        correta: "Procurando Dori",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "Na escala de sib maior quais notas são bmois?",
    alternativaA : "sol,re e fa",
    alternativaB : "si e mi",
    alternativaC : "la,si e do",
    alternativaD : "do e re",
    correta      : "si e mi",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "A noite estrelada é obra de ",
    alternativaA : "Tarsila do Amaral",
    alternativaB : "Leonardo da Vinci",
    alternativaC : "Pablo Picasso",
    alternativaD : "Vicent Van Gogh",
    correta      : "Vicent Van Gogh",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "Em que ano aconteceu a guerra do Paraguai?",
    alternativaA : "1970",
    alternativaB : "1870",
    alternativaC : "1864",
    alternativaD : "1784",
    correta      : "1864",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Qual dessas obras não são de Van Gogh",
    alternativaA : "A noite estrelada",
    alternativaB : "O beijo",
    alternativaC : "Auto-retrato",
    alternativaD : "Lirios",
    correta      : "O beijo",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "Quem é o pai da sociologia?",
    alternativaA : "Max Weber",
    alternativaB : "Auguste Comte",
    alternativaC : "Émile Durkheim",
    alternativaD : "Karl Marx",
    correta      : "Auguste Comte",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "Qual das notas abaixo é repetição da tônica?",
    alternativaA : "Fá",
    alternativaB : "Si",
    alternativaC : "Dó",
    alternativaD : "Lá",
    correta      : "Dó",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "Qual o livro mais vendido no mundo depois da Biblia?",
    alternativaA : "Senhor dos aneis",
    alternativaB : "Dom Quixote",
    alternativaC : "O pequeno Principe",
    alternativaD : "ela, a feiticeira",
    correta      : "Dom Quixote",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "Qantas casas decimais tem o número pi?",
    alternativaA : "Infinitas",
    alternativaB : "Vinte",
    alternativaC : "Milhares",
    alternativaD : "Duas",
    correta      : "Infinitas",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 1000)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}