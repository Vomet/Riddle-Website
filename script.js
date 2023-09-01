document.addEventListener('DOMContentLoaded', async function () {
  const response = await fetch('riddles.json');
  const riddlesData = await response.json();

  let currentRiddleIndex = -1;
  let currentRiddle = null;

  const checkButton = document.getElementById('checkButton');
  const answerInput = document.getElementById('answer');
  const resultParagraph = document.getElementById('result');
  const riddleParagraph = document.querySelector('.riddle');

  function displayRandomRiddle() {
    currentRiddleIndex = Math.floor(Math.random() * riddlesData.length);
    currentRiddle = riddlesData[currentRiddleIndex];
    resultParagraph.textContent = "";
    riddleParagraph.textContent = currentRiddle.riddle;
    answerInput.value = "";
  }

  checkButton.addEventListener('click', function () {
    const userAnswer = answerInput.value.trim().toLowerCase();
    if (currentRiddle.answers.includes(userAnswer)) {
      resultParagraph.textContent = "Correct! You solved the riddle!";
      resultParagraph.style.color = 'green';
    } else {
      resultParagraph.textContent = "Incorrect. Try again!";
      resultParagraph.style.color = 'red';
    }
  });

  // Display the first riddle when the page loads
  displayRandomRiddle();

  // Allow the user to try another riddle
  const tryAgainButton = document.getElementById('tryAgainButton');
  tryAgainButton.addEventListener('click', function () {
    displayRandomRiddle();
  });
});
