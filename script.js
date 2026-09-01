const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");

const caixaResultado = document.querySelector(".caixa-resultado");
const generoResultado = document.querySelector(".genero-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const barraProgresso = document.querySelector(".barra-progresso");
const contador = document.querySelector(".contador");

const botaoReiniciar = document.querySelector(".botao-reiniciar");


// PONTUAÇÃO DOS GÊNEROS

let pontos = {
    romance: 0,
    misterio: 0,
    fantasia: 0,
    ficcao: 0,
    naoFiccao: 0
};


// PERGUNTAS

const perguntas = [

    {
        enunciado:
            "Você encontra um livro em uma biblioteca. A capa chama sua atenção. Qual tipo de história faria você querer começar a ler?",

        alternativas: [

            {
                texto: "💕 Uma história de amor emocionante.",
                genero: "romance"
            },

            {
                texto: "🕵️ Uma história cheia de segredos e mistérios.",
                genero: "misterio"
            },

            {
                texto: "🧙 Um mundo mágico cheio de criaturas fantásticas.",
                genero: "fantasia"
            },

            {
                texto: "🚀 Uma aventura no espaço ou no futuro.",
                genero: "ficcao"
            },

            {
                texto: "🧠 Uma história baseada em fatos e conhecimentos reais.",
                genero: "naoFiccao"
            }

        ]
    },


    {
        enunciado:
            "Você ganhou um dia inteiro para ler. Que tipo de aventura escolheria?",

        alternativas: [

            {
                texto: "💕 Acompanhar dois personagens descobrindo seus sentimentos.",
                genero: "romance"
            },

            {
                texto: "🕵️ Tentar solucionar um crime misterioso.",
                genero: "misterio"
            },

            {
                texto: "🧙 Viajar para um reino completamente mágico.",
                genero: "fantasia"
            },

            {
                texto: "🚀 Explorar um planeta desconhecido.",
                genero: "ficcao"
            },

            {
                texto: "🧠 Aprender sobre uma pessoa ou acontecimento importante.",
                genero: "naoFiccao"
            }

        ]
    },


    {
        enunciado:
            "Qual dessas características mais desperta sua curiosidade em um livro?",

        alternativas: [

            {
                texto: "💕 Personagens e relacionamentos marcantes.",
                genero: "romance"
            },

            {
                texto: "🕵️ Pistas, enigmas e reviravoltas.",
                genero: "misterio"
            },

            {
                texto: "🧙 Magia, monstros e mundos imaginários.",
                genero: "fantasia"
            },

            {
                texto: "🚀 Tecnologia, ciência e futuros possíveis.",
                genero: "ficcao"
            },

            {
                texto: "🧠 Conhecer fatos e aprender coisas novas.",
                genero: "naoFiccao"
            }

        ]
    },


    {
        enunciado:
            "Imagine que você pode entrar dentro de um livro. Onde gostaria de estar?",

        alternativas: [

            {
                texto: "💕 Em uma cidade onde uma grande história de amor está acontecendo.",
                genero: "romance"
            },

            {
                texto: "🕵️ Em uma cidade onde ninguém sabe quem cometeu um crime.",
                genero: "misterio"
            },

            {
                texto: "🧙 Em um castelo cercado por florestas encantadas.",
                genero: "fantasia"
            },

            {
                texto: "🚀 Em uma estação espacial viajando pelo universo.",
                genero: "ficcao"
            },

            {
                texto: "🧠 Em um momento importante da história da humanidade.",
                genero: "naoFiccao"
            }

        ]
    },


    {
        enunciado:
            "Quando você escolhe um livro, o que mais importa para você?",

        alternativas: [

            {
                texto: "💕 Quero sentir emoções e me envolver com os personagens.",
                genero: "romance"
            },

            {
                texto: "🕵️ Quero ficar tentando descobrir o que vai acontecer.",
                genero: "misterio"
            },

            {
                texto: "🧙 Quero esquecer o mundo real e imaginar outro universo.",
                genero: "fantasia"
            },

            {
                texto: "🚀 Quero imaginar como será o futuro.",
                genero: "ficcao"
            },

            {
                texto: "🧠 Quero terminar o livro sabendo algo que não sabia antes.",
                genero: "naoFiccao"
            }

        ]
    }

];


let atual = 0;


// MOSTRAR PERGUNTA

function mostraPergunta() {

    if (atual >= perguntas.length) {

        mostraResultado();

        return;
    }


    const perguntaAtual = perguntas[atual];


    caixaPerguntas.textContent =
        perguntaAtual.enunciado;


    caixaAlternativas.textContent = "";


    contador.textContent =
        `Pergunta ${atual + 1} de ${perguntas.length}`;


    const porcentagem =
        (atual / perguntas.length) * 100;


    barraProgresso.style.width =
        `${porcentagem}%`;


    mostraAlternativas(perguntaAtual);

}


// MOSTRAR ALTERNATIVAS

function mostraAlternativas(perguntaAtual) {

    for (const alternativa of perguntaAtual.alternativas) {

        const botao =
            document.createElement("button");


        botao.textContent =
            alternativa.texto;


        botao.addEventListener("click", () => {

            respostaSelecionada(alternativa);

        });


        caixaAlternativas.appendChild(botao);
    }

}


// REGISTRAR RESPOSTA

function respostaSelecionada(alternativa) {

    pontos[alternativa.genero]++;

    atual++;

    mostraPergunta();

}


// MOSTRAR RESULTADO

function mostraResultado() {

    caixaPerguntas.textContent = "";

    caixaAlternativas.textContent = "";

    contador.textContent = "";

    barraProgresso.style.width = "100%";


    caixaResultado.style.display = "block";


    // Mostrar pontuações

    document.querySelector("#pontos-romance").textContent =
        pontos.romance;

    document.querySelector("#pontos-misterio").textContent =
        pontos.misterio;

    document.querySelector("#pontos-fantasia").textContent =
        pontos.fantasia;

    document.querySelector("#pontos-ficcao").textContent =
        pontos.ficcao;

    document.querySelector("#pontos-nao-ficcao").textContent =
        pontos.naoFiccao;


    // Descobrir maior pontuação

    const maiorPontuacao =
        Math.max(
            pontos.romance,
            pontos.misterio,
            pontos.fantasia,
            pontos.ficcao,
            pontos.naoFiccao
        );


    let genero = "";


    if (pontos.romance === maiorPontuacao) {

        genero = "💕 Romance";

        textoResultado.textContent =
            "Você gosta de histórias emocionantes, personagens marcantes e relacionamentos que fazem o leitor se envolver com a história.";

    }

    else if (pontos.misterio === maiorPontuacao) {

        genero = "🕵️ Mistério";

        textoResultado.textContent =
            "Você gosta de histórias cheias de suspense, pistas e reviravoltas. Resolver enigmas provavelmente é algo que prende bastante sua atenção.";

    }

    else if (pontos.fantasia === maiorPontuacao) {

        genero = "🧙 Fantasia";

        textoResultado.textContent =
            "Sua imaginação parece ser sua maior companheira! Mundos mágicos, criaturas fantásticas e grandes aventuras combinam com você.";

    }

    else if (pontos.ficcao === maiorPontuacao) {

        genero = "🚀 Ficção científica";

        textoResultado.textContent =
            "Você gosta de imaginar possibilidades diferentes para o futuro. Tecnologia, ciência, espaço e novos mundos provavelmente despertam sua curiosidade.";

    }

    else {

        genero = "🧠 Não ficção";

        textoResultado.textContent =
            "Você gosta de aprender e descobrir coisas novas. Histórias reais, biografias, ciência e conhecimento provavelmente são ótimas escolhas para você.";

    }


    generoResultado.textContent =
        `Seu gênero é: ${genero}`;

}


// REINICIAR

botaoReiniciar.addEventListener("click", () => {

    atual = 0;

    pontos = {
        romance: 0,
        misterio: 0,
        fantasia: 0,
        ficcao: 0,
        naoFiccao: 0
    };


    caixaResultado.style.display = "none";

    mostraPergunta();

});


// INICIAR

mostraPergunta();
