import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';
import gameCore from '..';

const randomOperator = () => {
  const randomItem = randomNumber(0, 3);
  const operators = ['*', '+', '-'];
  return operators[randomItem];
};

const gameRules = 'What is the result of the expression?';

const getCorrectAnswer = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    default:
      return num1 - num2;
  }
};

const calcGame = () => {
  const value1 = randomNumber(0, 10);
  const value2 = randomNumber(0, 10);
  const operator = randomOperator();
  const question = `${value1} ${operator} ${value2}`;
  const correctAnswer = `${getCorrectAnswer(value1, value2, operator)}`;
  return cons(question, correctAnswer);
};
export default () => gameCore(calcGame, gameRules);
