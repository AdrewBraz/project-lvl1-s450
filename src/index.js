import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const getName = () => readlineSync.question('May I have your name?');
const getAnswer = value => readlineSync.question(`Question: ${value}`);

const limit = 3;
const startGame = (func, counter) => {
  if (counter === limit) {
    return true;
  }
  const gameParams = func();
  const question = car(gameParams);
  const correctAnswer = cdr(gameParams);
  const userAnswer = getAnswer(question);
  console.log(`Your answer: ${userAnswer}`);
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    const count = counter + 1;
    return startGame(func, count);
  }
  return false;
};

const gameCore = (func, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  const userName = getName();
  const gameResult = startGame(func, 0);
  const finalText = gameResult ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`;
  console.log(finalText);
};

export default gameCore;
