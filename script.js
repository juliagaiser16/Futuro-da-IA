const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const barraProgresso = document.querySelector(".barra-progresso");
const contador = document.querySelector(".contador");
const botaoReiniciar = document.querySelector(".botao-reiniciar");


const perguntas = [

    {
        enunciado: "Você percebe que um amigo quase nunca lê. Ele diz que os livros não são importantes porque existe muita informação na internet. O que você faria?",

        alternativas: [

            {
                texto: "📚 Explicaria que os livros podem aprofundar conhecimentos e desenvolver o vocabulário.",
                pontos: 3
            },

            {
                texto: "📱 Concordaria, pois atualmente podemos encontrar quase tudo nas redes sociais.",
                pontos: 1
            }

        ]
    },


    {
        enunciado: "Você quer começar a criar o hábito de leitura, mas não sabe por onde começar. Qual seria sua escolha?",

        alternativas: [

            {
                texto: "📖 Escolheria um livro pequeno sobre um assunto que realmente me interessa.",
                pontos: 3
            },

            {
                texto: "🏛️ Começaria imediatamente por um livro clássico e bastante difícil.",
                pontos: 2
            }

        ]
    },


    {
        enunciado: "Você encontrou um livro interessante, mas ele é um pouco maior do que esperava. O que faria?",

        alternativas: [

            {
                texto: "⏰ Separaria alguns minutos todos os dias para continuar lendo.",
                pontos: 3
            },

            {
                texto: "😴 Deixaria para ler somente quando tivesse bastante tempo livre.",
                pontos: 1
            }

        ]
    },


    {
        enunciado: "Você quer ler, mas os livros físicos estão caros. Qual alternativa parece mais viável?",

        alternativas: [

            {
                texto: "💻 Procuraria livros digitais, bibliotecas ou plataformas gratuitas e legais.",
                pontos: 3
            },

            {
                texto: "📕 Esperaria até conseguir comprar um livro físico.",
                pontos: 2
            }

        ]
    },


    {
        enunciado: "Depois de terminar um livro, você percebe que aprendeu várias coisas novas. O que faria?",

        alternativas: [

            {
                texto: "🧠 Procuraria outro livro para continuar aprendendo sobre assuntos diferentes.",
                pontos: 3
            },

            {
                texto: "📚 Ficaria satisfeito e provavelmente não procuraria outro livro tão cedo.",
                pontos: 1
            }

        ]
    }

];


let atual = 0;
let pontuacao = 0;


function mostraPergunta() {

    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    const perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    caixaAlternativas.textContent = "";

    contador.textContent =
        `Pergunta ${atual + 1} de ${perguntas.length}`;

    const porcentagem =
        (atual / perguntas.length) * 100;

    barraProgresso.style.width = `${porcentagem}%`;

    mostraAlternativas(perguntaAtual);

}


function mostraAlternativas(perguntaAtual) {

    for (const alternativa of perguntaAtual.alternativas) {

        const botao = document.createElement("button");

        botao.textContent = alternativa.texto;

        botao.addEventListener("click", () => {

            respostaSelecionada(alternativa);

        });

        caixaAlternativas.appendChild(botao);
    }

}


function respostaSelecionada(alternativa) {

    pontuacao += alternativa.pontos;

    atual++;

    mostraPergunta();

}


function mostraResultado() {

    caixaPerguntas.textContent = "";

    caixaAlternativas.textContent = "";

    contador.textContent = "";

    barraProgresso.style.width = "100%";

    caixaResultado.style.display = "block";


    let resultado = "";


    if (pontuacao >= 13) {

        resultado =
            `🌟 Você é um verdadeiro apaixonado pela leitura!

            Suas escolhas mostram que você reconhece a importância dos livros
            para adquirir conhecimento, desenvolver o pensamento crítico e
            descobrir novas ideias.

            Continue explorando diferentes histórias e assuntos. Cada livro
            pode abrir uma nova porta para o conhecimento.`;

    }

    else if (pontuacao >= 9) {

        resultado =
            `📖 Você está no caminho certo!

            Você reconhece vários benefícios da leitura e parece estar aberto
            a desenvolver esse hábito.

            Talvez encontrar livros relacionados aos seus interesses seja uma
            ótima maneira de tornar a leitura cada vez mais presente na sua vida.`;

    }

    else {

        resultado =
            `🌱 Você ainda está começando sua jornada.

            Isso não é algo ruim! Criar o hábito da leitura leva tempo.
            Comece com livros pequenos, assuntos que despertem sua curiosidade
            e alguns minutos por dia.

            O mais importante é dar o primeiro passo.`;

    }


    textoResultado.textContent = resultado;

}


botaoReiniciar.addEventListener("click", () => {

    atual = 0;

    pontuacao = 0;

    caixaResultado.style.display = "none";

    mostraPergunta();

});


mostraPergunta();
