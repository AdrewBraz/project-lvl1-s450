import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name?');
const getUserAnswer = value => readlineSync.question(`Question: ${value}`);
const wrognAnswer = (userAnswer, correctAnswer) => {
  console.log(`${userAnswer} is the wrong answer ;(. Correct answer was ${correctAnswer}`);
  return false;
};
const randomNumber = (range = 10) => Math.floor(Math.random() * range);

const startGame = (func) => {
  console.log('Welcome to the Brain Games!');
  const userName = getName();
  const result = func();
  return result ? console.log(`Congratulations, ${userName}!`) : console.log(`Let's try again, ${userName}!`);
};

export {
  getName, getUserAnswer, wrognAnswer, randomNumber,
};
export default startGame;
