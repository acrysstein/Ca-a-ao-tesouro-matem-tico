/* CONTROLE DE TELAS E JOGO DA AVENTURA DO STEIN */

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

let score = 0;
let lives = 5;
let currentQuestionIndex = 0;
let currentSectorKey = null;
let answered = false;

const questions = {
    addition: [
        { question: "Quanto é 25 + 17?", answers: ["32", "42", "52", "40"], correct: "42" },
        { question: "Stein encontrou 36 moedas e depois mais 24. Quantas moedas ele tem?", answers: ["50", "60", "70", "54"], correct: "60" },
        { question: "67 + 13 = ?", answers: ["70", "80", "90", "76"], correct: "80" },
        { question: "Quanto é 145 + 55?", answers: ["190", "200", "210", "180"], correct: "200" }
    ],
    subtraction: [
        { question: "Quanto é 50 − 20?", answers: ["20", "30", "40", "35"], correct: "30" },
        { question: "Stein tinha 80 moedas e gastou 25. Quantas sobraram?", answers: ["45", "55", "65", "50"], correct: "55" }
    ],
    multiplication: [
        { question: "Quanto é 5 × 6?", answers: ["25", "30", "35", "40"], correct: "30" }
    ],
    division: [
        { question: "Quanto é 40 ÷ 5?", answers: ["6", "7", "8", "9"], correct: "8" }
    ],
    fractions: [
        { question: "Qual fração representa a metade?", answers: ["1/3", "1/2", "1/4", "2/3"], correct: "1/2" }
    ]
};

const clues = {
    addition: "Pista 1: O tesouro está guardado perto da antiga palmeira!",
    subtraction: "Pista 2: Siga 10 passos em direção ao norte!",
    multiplication: "Pista 3: Procure pela rocha em formato de gato!",
    division: "Pista 4: A chave dourada está oculta sob a areia brilhante!",
    fractions: "Pista 5: Abra o bau com a combinação final para vencer!"
};

function showScreen(screen) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    screen.classList.add("active");
}

function updateStats() {
    scoreElement.innerText = score;
    quizScoreElement.innerText = score;
    livesElement.innerText = lives;
    questionLives.innerText = "❤️".repeat(Math.max(0, lives));
}

startButton.addEventListener("click", () => {
    showScreen(mapScreen);
    updateStats();
});

backMapButton.addEventListener("click", () => {
    showScreen(mapScreen);
});

document.querySelectorAll(".map-point").forEach(point => {
    point.addEventListener("click", (e) => {
        const btn = e.currentTarget;
        if (btn.classList.contains("locked")) return;

        currentSectorKey = btn.getAttribute("data-setor");
        currentQuestionIndex = 0;
        sectorTitle.innerText = btn.querySelector(".point-name").innerText;
        
        showScreen(quizScreen);
        loadQuestion();
    });
});

function loadQuestion() {
    answered = false;
    feedback.innerText = "";
    feedback.className = "feedback";
    nextButton.classList.add("hidden");

    const sectorQuestions = questions[currentSectorKey] || questions.addition;
    const q = sectorQuestions[currentQuestionIndex];

    questionNumber.innerText = currentQuestionIndex + 1;
    questionText.innerText = q.question;
    answersContainer.innerHTML = "";

    q.answers.forEach(ans => {
        const btn = document.createElement("button");
        btn.className = "answer-button";
        btn.innerText = ans;
        btn.addEventListener("click", () => selectAnswer(ans, q.correct, btn));
        answersContainer.appendChild(btn);
    });
}

function selectAnswer(selected, correct, button) {
    if (answered) return;
    answered = true;

    if (selected === correct) {
        button.classList.add("correct");
        feedback.innerText = "✨ Resposta Correta!";
        feedback.classList.add("correct");
        score += 10;
    } else {
        button.classList.add("wrong");
        feedback.innerText = `❌ Incorreto! A resposta era ${correct}.`;
        feedback.classList.add("wrong");
        lives -= 1;
    }

    updateStats();
    nextButton.classList.remove("hidden");

    if (lives <= 0) {
        alert("Suas vidas acabaram! Reiniciando a jornada...");
        lives = 5;
        score = 0;
        updateStats();
        showScreen(startScreen);
    }
}

nextButton.addEventListener("click", () => {
    const sectorQuestions = questions[currentSectorKey] || questions.addition;
    currentQuestionIndex++;

    if (currentQuestionIndex < sectorQuestions.length) {
        loadQuestion();
    } else {
        unlockNextSector();
        clueText.innerText = clues[currentSectorKey] || "Nova pista desbloqueada!";
        showScreen(clueScreen);
    }
});

function unlockNextSector() {
    const sectors = ["addition", "subtraction", "multiplication", "division", "fractions"];
    const currentIndex = sectors.indexOf(currentSectorKey);
    
    if (currentIndex + 1 < sectors.length) {
        const nextSectorKey = sectors[currentIndex + 1];
        const nextBtn = document.querySelector(`[data-setor="${nextSectorKey}"]`);
        if (nextBtn) {
            nextBtn.classList.remove("locked");
            nextBtn.classList.add("unlocked");
            nextBtn.querySelector(".point-status").innerText = "DISPONÍVEL";
        }
    } else {
        showScreen(winScreen);
        finalScore.innerText = score;
    }
}

continueButton.addEventListener("click", () => {
    showScreen(mapScreen);
});

restartButton.addEventListener("click", () => {
    score = 0;
    lives = 5;
    updateStats();
    showScreen(startScreen);
});