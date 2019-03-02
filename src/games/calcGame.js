import { randomNumber, gameCore } from '..';
import { cons } from 'hexlet-pairs';


const randomOperator = () => {
  const min = 0;
  const max = 3;
  const randomItem = Math.floor(Math.random() * (max - min)) + min;
  const operators = ['*', '+', '-'];
  return operators[randomItem];
};

const gameRules = 'What is the result of the expression?';

const getCorrectAnswer = (num1, num2, operator) => {
  if (operator === '+') return num1 + num2;
  if (operator === '*') return num1 * num2;
  if (operator === '-') return num1 - num2;
};

const calcGame = () => {
  const value1 = randomNumber();
  const value2 = randomNumber();
  const operator = randomOperator();
  const question = `${value1} ${operator} ${value2}`;
  const correctAnswer = `${getCorrectAnswer(value1, value2, operator)}`;
  return cons(question, correctAnswer);
};
const brainCalc = () => gameCore(calcGame, gameRules);

export default brainCalc;