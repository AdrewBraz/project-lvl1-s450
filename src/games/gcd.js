import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';
import gameCore from '..';

const greatestDivisor = (a, b) => {
  const smallestArg = (a > b ? a : b);
  const divisor = (val) => {
    if (val === 1) {
      return val;
    }
    return a % val === 0 && b % val === 0 ? val : divisor(val - 1);
  };
  return divisor(smallestArg);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const value1 = randomNumber(2, 50);
  const value2 = randomNumber(2, 50);
  const question = `${value1}  ${value2}`;
  const correctAnswer = `${greatestDivisor(value1, value2)}`;
  return cons(question, correctAnswer);
};

export default () => gameCore(gcdGame, gameDescription);
