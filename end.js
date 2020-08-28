const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// eslint-disable-next-line no-unused-vars
const MAX_HIGH_SCORES = 7;

finalScore.innerText = mostRecentScore;
username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});


// eslint-disable-next-line no-undef
saveHighScore = e => {
    e.preventDefault();


    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);
    highScores.sort( (a,b) => b.score - a.score);
    highScores.splice(7);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign("/apps.html");
};