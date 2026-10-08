/* =====================================================
   STEIN
   CAÇA AO TESOURO MATEMÁTICO
===================================================== */


/* =====================================================
   BANCO DE PERGUNTAS
===================================================== */

const perguntas = {

    adicao: [
        ["Quanto é 27 + 15?", "42", ["42", "40", "41", "45"]],
        ["Quanto é 48 + 32?", "80", ["80", "70", "78", "90"]],
        ["Quanto é 125 + 74?", "199", ["199", "189", "209", "179"]],
        ["Quanto é 236 + 145?", "381", ["381", "371", "391", "401"]],
        ["Quanto é 67 + 24? 👀", "91", ["91", "81", "87", "97"]],
        ["Quanto é 350 + 125?", "475", ["475", "465", "485", "450"]],
        ["Quanto é 418 + 231?", "649", ["649", "639", "659", "619"]],
        ["Quanto é 56 + 67? 😂", "123", ["123", "113", "133", "127"]],
        ["Quanto é 129 + 271?", "400", ["400", "390", "410", "420"]],
        ["Quanto é 505 + 95?", "600", ["600", "590", "610", "500"]],
        ["Quanto é 333 + 222?", "555", ["555", "545", "565", "535"]],
        ["Quanto é 76 + 89?", "165", ["165", "155", "175", "185"]],
        ["Quanto é 145 + 155?", "300", ["300", "290", "310", "280"]],
        ["Quanto é 267 + 133?", "400", ["400", "390", "410", "420"]],
        ["Quanto é 408 + 192?", "600", ["600", "590", "610", "620"]]
    ],

    subtracao: [
        ["Quanto é 45 − 18?", "27", ["27", "25", "28", "30"]],
        ["Quanto é 72 − 29?", "43", ["43", "41", "45", "49"]],
        ["Quanto é 100 − 37?", "63", ["63", "53", "67", "73"]],
        ["Quanto é 145 − 56?", "89", ["89", "79", "99", "91"]],
        ["Quanto é 167 − 100? 👀", "67", ["67", "57", "77", "87"]],
        ["Quanto é 250 − 125?", "125", ["125", "115", "135", "150"]],
        ["Quanto é 300 − 78?", "222", ["222", "212", "232", "228"]],
        ["Quanto é 425 − 214?", "211", ["211", "201", "221", "231"]],
        ["Quanto é 500 − 267?", "233", ["233", "223", "243", "263"]],
        ["Quanto é 650 − 150?", "500", ["500", "400", "450", "550"]],
        ["Quanto é 720 − 321?", "399", ["399", "389", "409", "419"]],
        ["Quanto é 800 − 433?", "367", ["367", "357", "377", "387"]],
        ["Quanto é 900 − 567?", "333", ["333", "323", "343", "353"]],
        ["Quanto é 1000 − 333?", "667", ["667", "657", "677", "687"]],
        ["Desafio final: 167 − 100 = ?", "67", ["67", "57", "77", "87"]]
    ],

    multiplicacao: [
        ["Quanto é 3 × 4?", "12", ["12", "10", "14", "16"]],
        ["Quanto é 5 × 7?", "35", ["35", "30", "40", "45"]],
        ["Quanto é 6 × 8?", "48", ["48", "42", "54", "56"]],
        ["Quanto é 9 × 5?", "45", ["45", "40", "50", "55"]],
        ["Quanto é 7 × 7?", "49", ["49", "42", "48", "56"]],
        ["Quanto é 12 × 4?", "48", ["48", "44", "52", "56"]],
        ["Quanto é 15 × 6?", "90", ["90", "80", "85", "100"]],
        ["Quanto é 8 × 9?", "72", ["72", "64", "68", "81"]],
        ["Quanto é 11 × 7?", "77", ["77", "67", "87", "70"]],
        ["Quanto é 12 × 8?", "96", ["96", "86", "88", "108"]],
        ["Quanto é 14 × 5?", "70", ["70", "60", "65", "75"]],
        ["Quanto é 16 × 6?", "96", ["96", "86", "92", "106"]],
        ["Quanto é 18 × 4?", "72", ["72", "62", "68", "82"]],
        ["Quanto é 21 × 3?", "63", ["63", "53", "66", "73"]],
        ["Quanto é 10 × 7? 😎", "70", ["70", "60", "67", "77"]]
    ],

    divisao: [
        ["Quanto é 12 ÷ 3?", "4", ["4", "3", "5", "6"]],
        ["Quanto é 20 ÷ 4?", "5", ["5", "4", "6", "8"]],
        ["Quanto é 30 ÷ 5?", "6", ["6", "5", "7", "8"]],
        ["Quanto é 42 ÷ 6?", "7", ["7", "6", "8", "9"]],
        ["Quanto é 56 ÷ 7?", "8", ["8", "7", "9", "10"]],
        ["Quanto é 64 ÷ 8?", "8", ["8", "6", "7", "9"]],
        ["Quanto é 72 ÷ 9?", "8", ["8", "7", "9", "10"]],
        ["Quanto é 81 ÷ 9?", "9", ["9", "7", "8", "10"]],
        ["Quanto é 100 ÷ 10?", "10", ["10", "5", "8", "12"]],
        ["Quanto é 120 ÷ 12?", "10", ["10", "8", "12", "15"]],
        ["Quanto é 144 ÷ 12?", "12", ["12", "10", "11", "14"]],
        ["Quanto é 150 ÷ 15?", "10", ["10", "5", "15", "20"]],
        ["Quanto é 180 ÷ 20?", "9", ["9", "8", "10", "12"]],
        ["Quanto é 200 ÷ 10?", "20", ["20", "10", "15", "25"]],
        ["134 ÷ 2 = ? 67 apareceu! 😂", "67", ["67", "57", "77", "87"]]
    ],

    fracoes: [
        ["Qual fração representa metade?", "1/2", ["1/2", "1/3", "2/3", "3/4"]],
        ["Qual fração representa um quarto?", "1/4", ["1/4", "1/2", "2/4", "3/4"]],
        ["Qual é o numerador de 3/5?", "3", ["3", "5", "2", "8"]],
        ["Qual é o denominador de 7/9?", "9", ["9", "7", "2", "16"]],
        ["Qual fração é equivalente a 1/2?", "2/4", ["2/4", "2/3", "3/5", "4/5"]],
        ["Qual representa três partes de quatro?", "3/4", ["3/4", "1/4", "2/4", "4/3"]],
        ["Quanto é 1/2 + 1/2?", "1", ["1", "1/2", "2", "1/4"]],
        ["Quanto é 1/4 + 1/4?", "1/2", ["1/2", "1/4", "1", "3/4"]],
        ["Quanto é 2/5 + 1/5?", "3/5", ["3/5", "2/5", "4/5", "1/5"]],
        ["Quanto é 5/6 − 2/6?", "3/6", ["3/6", "2/6", "4/6", "1/6"]],
        ["Qual é maior: 1/2 ou 1/4?", "1/2", ["1/2", "1/4", "1/8", "iguais"]],
        ["Qual é menor: 2/3 ou 1/3?", "1/3", ["1/3", "2/3", "3/3", "iguais"]],
        ["Quanto é 3/4 de 20?", "15", ["15", "10", "12", "16"]],
        ["Quanto é 1/2 de 30?", "15", ["15", "10", "20", "25"]],
        ["67 de 100 representa qual fração?", "67/100", ["67/100", "6/7", "7/6", "67/10"]]
    ],

    decimais: [
        ["Qual número é maior?", "2,5", ["2,5", "2,05", "2,15", "2,01"]],
        ["Quanto é 1,5 + 2,5?", "4", ["4", "3", "4,5", "5"]],
        ["Quanto é 5,5 − 2,5?", "3", ["3", "2", "3,5", "4"]],
        ["Quanto é 2,5 × 2?", "5", ["5", "4", "4,5", "6"]],
        ["Quanto é 10,5 ÷ 2?", "5,25", ["5,25", "5", "5,5", "6,25"]],
        ["Qual número representa cinco décimos?", "0,5", ["0,5", "0,05", "5,0", "0,15"]],
        ["Qual é igual a 2 + 0,5?", "2,5", ["2,5", "2,05", "3,5", "2,15"]],
        ["Qual é maior: 3,7 ou 3,07?", "3,7", ["3,7", "3,07", "3,17", "3,007"]],
        ["Quanto é 4,25 + 1,75?", "6", ["6", "5", "5,5", "6,5"]],
        ["Quanto é 8,5 − 3,5?", "5", ["5", "4", "5,5", "6"]],
        ["Quanto é 0,5 + 0,25?", "0,75", ["0,75", "0,5", "0,25", "1"]],
        ["Quanto é 6,7 + 0,3?", "7", ["7", "6", "6,9", "7,3"]],
        ["Qual número é menor?", "1,25", ["1,25", "1,5", "1,75", "2,05"]],
        ["Qual decimal representa 67 centésimos?", "0,67", ["0,67", "6,7", "0,067", "67,0"]],
        ["Quanto é 67 ÷ 10?", "6,7", ["6,7", "0,67", "67", "0,067"]]
    ],

    porcentagem: [
        ["Quanto é 10% de 100?", "10", ["10", "5", "20", "50"]],
        ["Quanto é 50% de 80?", "40", ["40", "20", "30", "60"]],
        ["Quanto é 25% de 100?", "25", ["25", "20", "50", "75"]],
        ["Quanto é 50% de 60?", "30", ["30", "20", "40", "50"]],
        ["Quanto é 10% de 70?", "7", ["7", "6", "8", "10"]],
        ["Quanto é 20% de 50?", "10", ["10", "5", "15", "20"]],
        ["Quanto é 25% de 40?", "10", ["10", "5", "15", "20"]],
        ["Quanto é 50% de 200?", "100", ["100", "50", "150", "120"]],
        ["Quanto é 10% de 250?", "25", ["25", "20", "30", "50"]],
        ["Quanto é 75% de 100?", "75", ["75", "25", "50", "80"]],
        ["Quanto é 50% de 34?", "17", ["17", "14", "16", "20"]],
        ["Quanto é 25% de 80?", "20", ["20", "10", "30", "40"]],
        ["Quanto é 10% de 90?", "9", ["9", "8", "10", "18"]],
        ["Qual porcentagem representa metade?", "50%", ["50%", "10%", "25%", "75%"]],
        ["100% de 67 é quanto? 😎", "67", ["67", "6,7", "33,5", "134"]]
    ],

    geometria: [
        ["Quantos lados possui um triângulo?", "3", ["3", "2", "4", "5"]],
        ["Quantos lados possui um quadrado?", "4", ["4", "3", "5", "6"]],
        ["Quantos lados possui um pentágono?", "5", ["5", "4", "6", "7"]],
        ["Quantos lados possui um hexágono?", "6", ["6", "5", "7", "8"]],
        ["Quantos lados possui um octógono?", "8", ["8", "6", "7", "9"]],
        ["Quantos graus possui um ângulo reto?", "90°", ["90°", "45°", "60°", "180°"]],
        ["Qual figura possui três lados?", "Triângulo", ["Triângulo", "Quadrado", "Pentágono", "Hexágono"]],
        ["Qual figura possui quatro lados iguais?", "Quadrado", ["Quadrado", "Triângulo", "Círculo", "Pentágono"]],
        ["Perímetro de quadrado com lado 5 cm?", "20 cm", ["20 cm", "10 cm", "15 cm", "25 cm"]],
        ["Perímetro de retângulo 5 cm × 3 cm?", "16 cm", ["16 cm", "8 cm", "15 cm", "20 cm"]],
        ["Área de quadrado com lado 4 cm?", "16 cm²", ["16 cm²", "8 cm²", "12 cm²", "20 cm²"]],
        ["Quantos vértices possui um cubo?", "8", ["8", "6", "10", "12"]],
        ["Quantos graus possui uma volta completa?", "360°", ["360°", "90°", "180°", "270°"]],
        ["Qual figura não possui lados retos?", "Círculo", ["Círculo", "Triângulo", "Quadrado", "Pentágono"]],
        ["Um hexágono possui quantos lados? 67 está olhando 👀", "6", ["6", "5", "7", "8"]]
    ]
};


/* =====================================================
   NOMES
===================================================== */

const nomes = {
    adicao: "➕ Adição",
    subtracao: "➖ Subtração",
    multiplicacao: "✖️ Multiplicação",
    divisao: "➗ Divisão",
    fracoes: "🍕 Frações",
    decimais: "🔢 Decimais",
    porcentagem: "💯 Porcentagem",
    geometria: "📐 Geometria"
};


/* =====================================================
   PISTAS
===================================================== */

const listaPistas = [

    "O tesouro começou sua jornada na região onde os números crescem. A primeira ilha guarda o início do caminho.",

    "Muito bem! Agora siga pelo caminho onde algo é retirado. A próxima pista está escondida na Subtração.",

    "O tesouro gosta de grupos iguais. Procure a região da Multiplicação.",

    "Você está chegando perto! A próxima pista está escondida onde tudo é dividido em partes iguais.",

    "O tesouro não é inteiro! Procure as Frações para descobrir o próximo caminho.",

    "A aventura ficou mais precisa. Agora siga para o lugar dos números decimais.",

    "Você está quase lá! Procure a Montanha da Porcentagem.",

    "ÚLTIMA PISTA! O tesouro está escondido onde vivem formas, ângulos e medidas. Vá até a Geometria!"
];


/* =====================================================
   ELEMENTOS
===================================================== */

const telaInicio = document.getElementById("inicio");
const telaMapa = document.getElementById("mapa");
const telaJogo = document.getElementById("jogo");
const telaPista = document.getElementById("pista");
const telaFinal = document.getElementById("final");

const botaoComecar = document.getElementById("comecar");

const botoesIlha =
    document.querySelectorAll(".botao-ilha");

const botaoVoltar =
    document.getElementById("voltar-mapa");

const botaoProxima =
    document.getElementById("proxima");

const botaoContinuar =
    document.getElementById("continuar");

const botaoReiniciar =
    document.getElementById("reiniciar");


/* =====================================================
   VARIÁVEIS
===================================================== */

let setorAtual = "";

let indicePergunta = 0;

let listaAtual = [];

let pontos = 0;

let vidas = 3;

let acertos = 0;

let erros = 0;

let respondeu = false;

let pistas = 0;


/* =====================================================
   MOSTRAR TELA
===================================================== */

function mostrarTela(tela) {

    document
        .querySelectorAll(".tela")
        .forEach(t => {

            t.classList.remove("ativa");

        });

    tela.classList.add("ativa");

    window.scrollTo(0, 0);
}


/* =====================================================
   BOTÃO COMEÇAR
===================================================== */

botaoComecar.addEventListener("click", function () {

    mostrarTela(telaMapa);

});


/* =====================================================
   CLIQUE NAS ILHAS
===================================================== */

botoesIlha.forEach(function(botao) {

    botao.addEventListener("click", function() {

        const setor =
            this.dataset.setor;

        console.log(
            "Entrando no setor:",
            setor
        );

        iniciarSetor(setor);

    });

});


/* =====================================================
   INICIAR SETOR
===================================================== */

function iniciarSetor(setor) {

    if (!perguntas[setor]) {

        console.error(
            "Setor não encontrado:",
            setor
        );

        return;

    }

    setorAtual = setor;

    listaAtual = perguntas[setor];

    indicePergunta = 0;

    pontos = 0;

    vidas = 3;

    acertos = 0;

    erros = 0;

    respondeu = false;

    document.getElementById("pontos")
        .textContent = pontos;

    mostrarTela(telaJogo);

    carregarPergunta();

}


/* =====================================================
   CARREGAR PERGUNTA
===================================================== */

function carregarPergunta() {

    respondeu = false;

    const atual =
        listaAtual[indicePergunta];

    document.getElementById(
        "categoria"
    ).textContent =
        nomes[setorAtual];

    document.getElementById(
        "numero-pergunta"
    ).textContent =
        indicePergunta + 1;

    document.getElementById(
        "pergunta"
    ).textContent =
        atual[0];

    document.getElementById(
        "barra-progresso"
    ).style.width =
        ((indicePergunta + 1) / 15 * 100) + "%";


    const area =
        document.getElementById(
            "alternativas"
        );

    area.innerHTML = "";


    document.getElementById(
        "feedback"
    ).textContent = "";


    botaoProxima.style.display =
        "none";


    /* embaralhar respostas */

    const respostas =
        [...atual[2]]
            .sort(() => Math.random() - .5);


    respostas.forEach(function(resposta) {

        const botao =
            document.createElement("button");

        botao.className =
            "alternativa";

        botao.textContent =
            resposta;

        botao.addEventListener(
            "click",
            function() {

                verificarResposta(
                    resposta,
                    botao
                );

            }
        );

        area.appendChild(botao);

    });


    atualizarVidas();

}


/* =====================================================
   VERIFICAR RESPOSTA
===================================================== */

function verificarResposta(
    resposta,
    botao
) {

    if (respondeu) return;

    respondeu = true;

    const atual =
        listaAtual[indicePergunta];

    const botoes =
        document.querySelectorAll(
            ".alternativa"
        );

    botoes.forEach(function(b) {

        b.disabled = true;

        if (
            b.textContent ===
            atual[1]
        ) {

            b.classList.add("correta");

        }

    });


    if (
        resposta === atual[1]
    ) {

        botao.classList.add("correta");

        pontos += 100;

        acertos++;

        document.getElementById(
            "feedback"
        ).textContent =
            "🎉 ACERTOU! +100 XP";

        document.getElementById(
            "feedback"
        ).style.color =
            "#00b894";

    } else {

        botao.classList.add("errada");

        vidas--;

        erros++;

        document.getElementById(
            "feedback"
        ).textContent =
            "😅 Quase! A resposta correta era " +
            atual[1];

        document.getElementById(
            "feedback"
        ).style.color =
            "#ff7675";

    }


    document.getElementById(
        "pontos"
    ).textContent =
        pontos;


    atualizarVidas();


    botaoProxima.style.display =
        "inline-block";

}


/* =====================================================
   VIDAS
===================================================== */

function atualizarVidas() {

    let texto = "";

    for (
        let i = 0;
        i < 3;
        i++
    ) {

        if (i < vidas) {

            texto += "❤️";

        } else {

            texto += "🖤";

        }

    }

    document.getElementById(
        "vidas"
    ).textContent =
        texto;

}


/* =====================================================
   PRÓXIMA
===================================================== */

botaoProxima.addEventListener(
    "click",
    function() {

        if (vidas <= 0) {

            mostrarResultado(false);

            return;

        }


        if (
            indicePergunta >=
            listaAtual.length - 1
        ) {

            ganharPista();

            return;

        }


        indicePergunta++;

        carregarPergunta();

    }
);


/* =====================================================
   GANHAR PISTA
===================================================== */

function ganharPista() {

    pistas++;

    if (pistas > 8) {
        pistas = 8;
    }

    document.getElementById(
        "numero-pistas"
    ).textContent =
        pistas;


    document.getElementById(
        "pista-numero"
    ).textContent =
        pistas;


    document.getElementById(
        "texto-pista"
    ).textContent =
        listaPistas[pistas - 1];


    mostrarTela(telaPista);

}


/* =====================================================
   CONTINUAR
===================================================== */

botaoContinuar.addEventListener(
    "click",
    function() {

        if (pistas >= 8) {

            mostrarResultado(true);

        } else {

            mostrarTela(telaMapa);

        }

    }
);


/* =====================================================
   VOLTAR AO MAPA
===================================================== */

botaoVoltar.addEventListener(
    "click",
    function() {

        mostrarTela(telaMapa);

    }
);


/* =====================================================
   RESULTADO
===================================================== */

function mostrarResultado(vitoria) {

    document.getElementById(
        "resultado-pontos"
    ).textContent =
        pontos;

    document.getElementById(
        "resultado-acertos"
    ).textContent =
        acertos;

    document.getElementById(
        "resultado-erros"
    ).textContent =
        erros;


    const titulo =
        document.querySelector(
            ".final-card h1"
        );


    if (vitoria) {

        titulo.textContent =
            "💎 TESOURO ENCONTRADO!";

    } else {

        titulo.textContent =
            "🐱 TENTE NOVAMENTE!";

    }


    mostrarTela(telaFinal);

}


/* =====================================================
   REINICIAR
===================================================== */

botaoReiniciar.addEventListener(
    "click",
    function() {

        setorAtual = "";

        indicePergunta = 0;

        listaAtual = [];

        pontos = 0;

        vidas = 3;

        acertos = 0;

        erros = 0;

        pistas = 0;

        document.getElementById(
            "numero-pistas"
        ).textContent =
            "0";

        mostrarTela(telaMapa);

    }
);


/* =====================================================
   TESTE
===================================================== */

console.log(
    "🗺️ STEIN carregado corretamente!"
);

console.log(
    "Ilhas encontradas:",
    botoesIlha.length
);