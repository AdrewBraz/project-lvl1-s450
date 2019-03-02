import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const getName = () => readlineSync.question('May I have your name?');
const getAnswer = value => readlineSync.question(`Question: ${value}`);

const randomNumber = (range = 10) => Math.floor(Math.random() * range);

const startGame = (func, counter = 0) => {
  const limit = 3;
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

const gameCore = (func, gameRules) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameRules);
  const userName = getName();
  const gameResult = startGame(func);
  return gameResult ? console.log(`Congratulations, ${userName}!`) : console.log(`Let's try again, ${userName}!`);
};

export { randomNumber, gameCore };
