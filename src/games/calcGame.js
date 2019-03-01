import { getUserAnswer, wrognAnswer, randomNumber } from '..';

const randomOperator = () => {
  const min = 0;
  const max = 3;
  const randomItem = Math.floor(Math.random() * (max - min)) + min;
  const operators = ['*', '+', '-'];
  return operators[randomItem];
};


const getCorrectAnswer = (num1, num2, operator) => {
  if (operator === '+') return num1 + num2;
  if (operator === '*') return num1 * num2;
  if (operator === '-') return num1 - num2;
};

const calcGame = (counter = 0) => {
  const limit = 3;
  if (counter === limit) {
    return true;
  }
  const value1 = randomNumber();
  const value2 = randomNumber();
  const operator = randomOperator();
  const question = `${value1} ${operator} ${value2}`;
  const userAnswer = +getUserAnswer(question);
  const correctAnswer = getCorrectAnswer(value1, value2, operator);
  if (correctAnswer !== userAnswer) {
    return wrognAnswer(userAnswer, correctAnswer);
  }
  console.log('Correct!');
  const count = counter + 1;
  return calcGame(count);
};

export default calcGame;
