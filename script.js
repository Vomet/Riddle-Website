document.addEventListener('DOMContentLoaded', async function () {
  const response = await fetch('riddles.json');
  const riddlesData = await response.json();

  const randomIndex = Math.floor(Math.random() * riddlesData.length);
  const randomRiddle = riddlesData[randomIndex];
  const correctAnswer = randomRiddle.answer.toLowerCase();

  const checkButton = document.getElementById('checkButton');
  const answerInput = document.getElementById('answer');
  const resultParagraph = document.getElementById('result');
  const riddleParagraph = document.querySelector('.riddle');

  riddleParagraph.textContent = randomRiddle.riddle;

  checkButton.addEventListener('click', function () {
    const userAnswer = answerInput.value.trim().toLowerCase();
    if (userAnswer === correctAnswer) {
      resultParagraph.textContent = "Correct! You solved the riddle!";
      resultParagraph.style.color = 'green';
    } else {
      resultParagraph.textContent = "Incorrect. Try again!";
      resultParagraph.style.color = 'red';
    }
  });
});

