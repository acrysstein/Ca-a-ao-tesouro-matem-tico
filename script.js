/* ==========================================
   STEIN - O TESOURO PERDIDO
   Sistema completo do jogo
========================================== */


/* ==========================================
   ELEMENTOS
========================================== */

const startScreen = document.getElementById("startScreen");
const mapScreen = document.getElementById("mapScreen");
const quizScreen = document.getElementById("quizScreen");
const clueScreen = document.getElementById("clueScreen");
const winScreen = document.getElementById("winScreen");

const startButton = document.getElementById("startButton");
const backMapButton = document.getElementById("backMapButton");
const nextButton = document.getElementById("nextButton");
const continueButton = document.getElementById("continueButton");
const restartButton = document.getElementById("restartButton");

const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answers");

const feedback = document.getElementById("feedback");

const questionNumber = document.getElementById("questionNumber");
const sectorTitle = document.getElementById("sectorTitle");

const scoreElement = document.getElementById("score");
const quizScoreElement = document.getElementById("quizScore");
const livesElement = document.getElementById("lives");
const questionLives = document.getElementById("questionLives");

const clueText = document.getElementById("clueText");

const finalScore = document.getElementById("finalScore");
const finalMessage = document.getElementById("finalMessage");


/* ==========================================
   ESTADO DO JOGO
========================================== */

let score = 0;

let lives = 5;

let currentQuestion = 0;

let currentSector = null;

let answered = false;

let completedSectors = [];


/* ==========================================
   PERGUNTAS
   15 POR SETOR
========================================== */

const questions = {

    addition: [

        {
            question: "Quanto é 25 + 17?",
            answers: ["32", "42", "52", "40"],
            correct: "42"
        },

        {
            question: "Stein encontrou 36 moedas e depois mais 24. Quantas moedas ele tem?",
            answers: ["50", "60", "70", "54"],
            correct: "60"
        },

        {
            question: "67 + 13 = ? 👀",
            answers: ["70", "80", "90", "76"],
            correct: "80"
        },

        {
            question: "Quanto é 145 + 55?",
            answers: ["190", "200", "210", "180"],
            correct: "200"
        },

        {
            question: "Uma ilha possui 125 árvores e outra possui 75. Quantas árvores ao todo?",
            answers: ["180", "190", "200", "210"],
            correct: "200"
        },

        {
            question: "Qual é o resultado de 48 + 37?",
            answers: ["75", "85", "95", "80"],
            correct: "85"
        },

        {
            question: "O gato encontrou 19 peixes e depois 28. Quantos peixes encontrou?",
            answers: ["37", "47", "57", "45"],
            correct: "47"
        },

        {
            question: "300 + 125 = ?",
            answers: ["415", "425", "435", "450"],
            correct: "425"
        },

        {
            question: "Qual número completa: 250 + ___ = 300?",
            answers: ["40", "50", "60", "70"],
            correct: "50"
        },

        {
            question: "17 + 17 + 17 = ?",
            answers: ["41", "51", "61", "71"],
            correct: "51"
        },

        {
            question: "Você tem 78 pontos e ganha mais 22. Quantos pontos?",
            answers: ["90", "100", "110", "120"],
            correct: "100"
        },

        {
            question: "Quanto é 456 + 44?",
            answers: ["490", "500", "510", "520"],
            correct: "500"
        },

        {
            question: "Uma tripulação tem 35 piratas e chegam mais 15. Quantos agora?",
            answers: ["40", "45", "50", "55"],
            correct: "50"
        },

        {
            question: "999 + 1 = ?",
            answers: ["100", "1000", "9999", "1010"],
            correct: "1000"
        },

        {
            question: "DESAFIO FINAL: 125 + 125 + 50 = ?",
            answers: ["250", "300", "350", "400"],
            correct: "300"
        }

    ],


    subtraction: [

        {
            question: "Quanto é 50 − 20?",
            answers: ["20", "30", "40", "35"],
            correct: "30"
        },

        {
            question: "Stein tinha 80 moedas e gastou 25. Quantas sobraram?",
            answers: ["45", "55", "65", "50"],
            correct: "55"
        },

        {
            question: "67 − 7 = ?",
            answers: ["50", "60", "70", "67"],
            correct: "60"
        },

        {
            question: "100 − 45 = ?",
            answers: ["45", "55", "65", "50"],
            correct: "55"
        },

        {
            question: "150 − 50 = ?",
            answers: ["50", "100", "110", "120"],
            correct: "100"
        },

        {
            question: "90 − 37 = ?",
            answers: ["43", "53", "63", "57"],
            correct: "53"
        },

        {
            question: "200 − 75 = ?",
            answers: ["115", "125", "135", "145"],
            correct: "125"
        },

        {
            question: "Qual número falta? 100 − ___ = 40",
            answers: ["40", "50", "60", "70"],
            correct: "60"
        },

        {
            question: "500 − 250 = ?",
            answers: ["200", "250", "300", "350"],
            correct: "250"
        },

        {
            question: "73 − 28 = ?",
            answers: ["35", "45", "55", "65"],
            correct: "45"
        },

        {
            question: "O gato tinha 65 peixes e comeu 15. Quantos sobraram?",
            answers: ["40", "50", "60", "45"],
            correct: "50"
        },

        {
            question: "400 − 125 = ?",
            answers: ["275", "285", "265", "250"],
            correct: "275"
        },

        {
            question: "321 − 121 = ?",
            answers: ["100", "200", "210", "220"],
            correct: "200"
        },

        {
            question: "1000 − 1 = ?",
            answers: ["999", "100", "990", "1001"],
            correct: "999"
        },

        {
            question: "DESAFIO FINAL: 750 − 325 = ?",
            answers: ["400", "425", "450", "475"],
            correct: "425"
        }

    ],


    multiplication: [

        {
            question: "Quanto é 5 × 6?",
            answers: ["25", "30", "35", "40"],
            correct: "30"
        },

        {
            question: "7 × 8 = ?",
            answers: ["54", "56", "58", "64"],
            correct: "56"
        },

        {
            question: "6 × 7 = ? 👀",
            answers: ["36", "42", "48", "49"],
            correct: "42"
        },

        {
            question: "10 × 12 = ?",
            answers: ["100", "110", "120", "130"],
            correct: "120"
        },

        {
            question: "Stein encontrou 8 baús com 5 moedas em cada. Quantas moedas?",
            answers: ["30", "35", "40", "45"],
            correct: "40"
        },

        {
            question: "9 × 9 = ?",
            answers: ["72", "81", "90", "99"],
            correct: "81"
        },

        {
            question: "4 × 25 = ?",
            answers: ["75", "100", "125", "90"],
            correct: "100"
        },

        {
            question: "12 × 5 = ?",
            answers: ["50", "60", "70", "80"],
            correct: "60"
        },

        {
            question: "3 × 15 = ?",
            answers: ["35", "45", "55", "65"],
            correct: "45"
        },

        {
            question: "20 × 6 = ?",
            answers: ["100", "110", "120", "130"],
            correct: "120"
        },

        {
            question: "11 × 7 = ?",
            answers: ["67", "77", "87", "97"],
            correct: "77"
        },

        {
            question: "Uma tripulação tem 6 grupos com 4 piratas. Quantos piratas?",
            answers: ["20", "24", "28", "30"],
            correct: "24"
        },

        {
            question: "15 × 4 = ?",
            answers: ["50", "60", "70", "80"],
            correct: "60"
        },

        {
            question: "25 × 4 = ?",
            answers: ["75", "90", "100", "125"],
            correct: "100"
        },

        {
            question: "DESAFIO FINAL: 12 × 12 = ?",
            answers: ["124", "134", "144", "154"],
            correct: "144"
        }

    ],


    division: [

        {
            question: "Quanto é 20 ÷ 5?",
            answers: ["2", "3", "4", "5"],
            correct: "4"
        },

        {
            question: "36 ÷ 6 = ?",
            answers: ["5", "6", "7", "8"],
            correct: "6"
        },

        {
            question: "67 ÷ 1 = ? 😎",
            answers: ["1", "6", "67", "0"],
            correct: "67"
        },

        {
            question: "50 ÷ 10 = ?",
            answers: ["2", "5", "10", "15"],
            correct: "5"
        },

        {
            question: "80 ÷ 8 = ?",
            answers: ["8", "10", "12", "16"],
            correct: "10"
        },

        {
            question: "100 ÷ 4 = ?",
            answers: ["20", "25", "30", "40"],
            correct: "25"
        },

        {
            question: "45 ÷ 5 = ?",
            answers: ["7", "8", "9", "10"],
            correct: "9"
        },

        {
            question: "72 ÷ 8 = ?",
            answers: ["7", "8", "9", "10"],
            correct: "9"
        },

        {
            question: "60 moedas foram divididas igualmente entre 6 piratas. Cada um recebeu:",
            answers: ["5", "10", "15", "20"],
            correct: "10"
        },

        {
            question: "120 ÷ 12 = ?",
            answers: ["8", "10", "12", "15"],
            correct: "10"
        },

        {
            question: "81 ÷ 9 = ?",
            answers: ["7", "8", "9", "10"],
            correct: "9"
        },

        {
            question: "144 ÷ 12 = ?",
            answers: ["10", "11", "12", "14"],
            correct: "12"
        },

        {
            question: "200 ÷ 10 = ?",
            answers: ["10", "20", "30", "40"],
            correct: "20"
        },

        {
            question: "150 ÷ 5 = ?",
            answers: ["20", "25", "30", "35"],
            correct: "30"
        },

        {
            question: "DESAFIO FINAL: 240 ÷ 12 = ?",
            answers: ["15", "20", "25", "30"],
            correct: "20"
        }

    ],


    fractions: [

        {
            question: "Qual fração representa metade?",
            answers: ["1/2", "1/3", "1/4", "2/3"],
            correct: "1/2"
        },

        {
            question: "Uma pizza foi dividida em 4 partes iguais. Você comeu 1. Qual fração comeu?",
            answers: ["1/2", "1/3", "1/4", "4/4"],
            correct: "1/4"
        },

        {
            question: "Qual é maior?",
            answers: ["1/2", "1/4", "1/8", "1/10"],
            correct: "1/2"
        },

        {
            question: "2/4 é equivalente a:",
            answers: ["1/2", "1/3", "1/4", "3/4"],
            correct: "1/2"
        },

        {
            question: "Qual fração representa uma parte de três?",
            answers: ["1/2", "1/3", "2/3", "3/3"],
            correct: "1/3"
        },

        {
            question: "3/4 significa:",
            answers: [
                "3 partes de 4",
                "4 partes de 3",
                "1 parte de 4",
                "4 partes de 4"
            ],
            correct: "3 partes de 4"
        },

        {
            question: "Qual é equivalente a 1/2?",
            answers: ["2/4", "2/3", "3/5", "4/5"],
            correct: "2/4"
        },

        {
            question: "Uma barra tem 8 pedaços e você comeu 4. Qual fração comeu?",
            answers: ["1/2", "1/4", "3/4", "1/8"],
            correct: "1/2"
        },

        {
            question: "Qual é menor?",
            answers: ["1/2", "1/3", "1/4", "3/4"],
            correct: "1/4"
        },

        {
            question: "5/5 representa:",
            answers: [
                "Metade",
                "Um inteiro",
                "Um quarto",
                "Zero"
            ],
            correct: "Um inteiro"
        },

        {
            question: "Qual fração representa 3 partes de 5?",
            answers: ["2/5", "3/5", "4/5", "5/5"],
            correct: "3/5"
        },

        {
            question: "4/8 simplificada é:",
            answers: ["1/2", "1/3", "2/3", "3/4"],
            correct: "1/2"
        },

        {
            question: "Qual fração é equivalente a 3/6?",
            answers: ["1/2", "1/3", "2/3", "3/4"],
            correct: "1/2"
        },

        {
            question: "Uma pizza tem 6 pedaços. Stein comeu 2. Qual fração ele comeu?",
            answers: ["1/3", "1/2", "2/3", "1/6"],
            correct: "1/3"
        },

        {
            question: "DESAFIO FINAL: Qual é maior?",
            answers: ["2/3", "1/3", "1/4", "1/5"],
            correct: "2/3"
        }

    ]

};


/* ==========================================
   NOMES DOS SETORES
========================================== */

const sectorNames = {

    addition: "➕ Adição",

    subtraction: "➖ Subtração",

    multiplication: "✖️ Multiplicação",

    division: "➗ Divisão",

    fractions: "🍕 Frações"

};


/* ==========================================
   PISTAS
========================================== */

const clues = {

    addition:
        "A primeira pista diz: o tesouro está além da próxima ilha! 🏝️",

    subtraction:
        "A segunda pista diz: procure um lugar onde existem muitas marcas no chão... 👣",

    multiplication:
        "A terceira pista diz: o caminho passa por uma região cheia de números! 🔢",

    division:
        "A quarta pista diz: falta apenas uma última região para encontrar o tesouro! 🧭",

    fractions:
        "A última pista diz: o tesouro está escondido no coração do mapa! 💰"

};


/* ==========================================
   FUNÇÃO PARA TROCAR DE TELA
========================================== */

function showScreen(screen) {

    document.querySelectorAll(".screen").forEach(function(element) {

        element.classList.remove("active");

    });

    screen.classList.add("active");

}


/* ==========================================
   COMEÇAR JOGO
========================================== */

startButton.addEventListener("click", function() {

    score = 0;

    lives = 5;

    completedSectors = [];

    updateStats();

    unlockSector(1);

    showScreen(mapScreen);

});


/* ==========================================
   CLIQUES DOS SETORES
========================================== */

document.querySelectorAll(".map-point").forEach(function(button) {

    button.addEventListener("click", function() {

        if (button.classList.contains("locked")) {

            alert("🔒 Complete o setor anterior para desbloquear este!");

            return;

        }

        const sector = button.dataset.sector;

        startQuiz(sector);

    });

});


/* ==========================================
   INICIAR QUIZ
========================================== */

function startQuiz(sector) {

    currentSector = sector;

    currentQuestion = 0;

    answered = false;

    feedback.textContent = "";

    feedback.className = "feedback";

    nextButton.classList.add("hidden");

    sectorTitle.textContent = sectorNames[sector];

    showScreen(quizScreen);

    loadQuestion();

}


/* ==========================================
   CARREGAR PERGUNTA
========================================== */

function loadQuestion() {

    const sectorQuestions = questions[currentSector];

    const question = sectorQuestions[currentQuestion];

    answered = false;

    questionNumber.textContent = currentQuestion + 1;

    questionText.textContent = question.question;

    answersContainer.innerHTML = "";

    feedback.textContent = "";

    feedback.className = "feedback";

    nextButton.classList.add("hidden");


    question.answers.forEach(function(answer) {

        const button = document.createElement("button");

        button.classList.add("answer-button");

        button.textContent = answer;

        button.addEventListener("click", function() {

            checkAnswer(button, answer, question.correct);

        });

        answersContainer.appendChild(button);

    });


    updateLivesDisplay();

}


/* ==========================================
   VERIFICAR RESPOSTA
========================================== */

function checkAnswer(button, selectedAnswer, correctAnswer) {

    if (answered) {
        return;
    }

    answered = true;


    const allButtons =
        document.querySelectorAll(".answer-button");

    allButtons.forEach(function(btn) {

        btn.disabled = true;

        if (btn.textContent === correctAnswer) {

            btn.classList.add("correct");

        }

    });


    if (selectedAnswer === correctAnswer) {

        button.classList.add("correct");

        score += 10;

        feedback.textContent =
            "🎉 Mandou muito bem! +10 pontos!";

        feedback.classList.add("correct");

    } else {

        button.classList.add("wrong");

        lives--;

        feedback.textContent =
            "😿 Quase! A resposta correta era " + correctAnswer;

        feedback.classList.add("wrong");

    }


    updateStats();

    updateLivesDisplay();

    nextButton.classList.remove("hidden");

}


/* ==========================================
   PRÓXIMA PERGUNTA
========================================== */

nextButton.addEventListener("click", function() {

    if (lives <= 0) {

        alert(
            "💔 Você ficou sem vidas!\n\n" +
            "Mas não desista! Vamos tentar novamente."
        );

        lives = 5;

        startQuiz(currentSector);

        return;
    }


    currentQuestion++;

    if (
        currentQuestion >=
        questions[currentSector].length
    ) {

        finishSector();

    } else {

        loadQuestion();

    }

});


/* ==========================================
   TERMINAR SETOR
========================================== */

function finishSector() {

    if (!completedSectors.includes(currentSector)) {

        completedSectors.push(currentSector);

    }


    const sectorIndex =
        Object.keys(questions).indexOf(currentSector);

    unlockSector(sectorIndex + 2);


    if (completedSectors.length >= 5) {

        showWinScreen();

        return;

    }


    clueText.textContent = clues[currentSector];

    showScreen(clueScreen);

}


/* ==========================================
   CONTINUAR APÓS PISTA
========================================== */

continueButton.addEventListener("click", function() {

    showScreen(mapScreen);

});


/* ==========================================
   VOLTAR AO MAPA
========================================== */

backMapButton.addEventListener("click", function() {

    showScreen(mapScreen);

});


/* ==========================================
   DESBLOQUEAR SETOR
========================================== */

function unlockSector(number) {

    const sector = document.getElementById(
        "sector" + number
    );

    if (!sector) {
        return;
    }

    sector.classList.remove("locked");

    sector.classList.add("unlocked");

    const status =
        sector.querySelector(".point-status");

    if (status) {

        status.textContent = "▶ JOGAR";

    }

}


/* ==========================================
   ATUALIZAR PONTOS
========================================== */

function updateStats() {

    scoreElement.textContent = score;

    quizScoreElement.textContent = score;

    livesElement.textContent = lives;

}


/* ==========================================
   ATUALIZAR VIDAS
========================================== */

function updateLivesDisplay() {

    let hearts = "";

    for (let i = 0; i < 5; i++) {

        if (i < lives) {

            hearts += "❤️";

        } else {

            hearts += "🖤";

        }

    }

    questionLives.textContent = hearts;

    livesElement.textContent = lives;

}


/* ==========================================
   TELA FINAL
========================================== */

function showWinScreen() {

    finalScore.textContent = score;

    if (score >= 700) {

        finalMessage.textContent =
            "🏆 LENDÁRIO! Você é um verdadeiro mestre da matemática!";

    } else if (score >= 550) {

        finalMessage.textContent =
            "🌟 Excelente! Você encontrou o tesouro como um verdadeiro aventureiro!";

    } else if (score >= 400) {

        finalMessage.textContent =
            "👏 Muito bem! Você completou a grande aventura!";

    } else {

        finalMessage.textContent =
            "💪 Você conseguiu! Continue praticando para ficar ainda melhor!";

    }

    showScreen(winScreen);

}


/* ==========================================
   REINICIAR
========================================== */

restartButton.addEventListener("click", function() {

    score = 0;

    lives = 5;

    currentQuestion = 0;

    currentSector = null;

    completedSectors = [];

    answered = false;


    document.querySelectorAll(".map-point").forEach(function(point, index) {

        if (index === 0) {

            point.classList.remove("locked");

            point.classList.add("unlocked");

            point.querySelector(".point-status").textContent =
                "▶ JOGAR";

        } else {

            point.classList.remove("unlocked");

            point.classList.add("locked");

            point.querySelector(".point-status").textContent =
                "🔒 BLOQUEADO";

        }

    });


    updateStats();

    showScreen(mapScreen);

});


/* ==========================================
   INICIALIZAÇÃO
========================================== */

updateStats();

unlockSector(1);
