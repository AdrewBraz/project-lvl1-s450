import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';
import gameCore from '..';

const isPrime = (val) => {
  const biggestDivider = Math.floor(val / 2);
  const isPrimeValue = (divider) => {
    if (divider === 1) {
      return true;
    }
    return val % divider === 0 ? false : isPrimeValue(divider - 1);
  };

  return isPrimeValue(biggestDivider);
};

const gameDescription = 'Answer "yes" if number prime otherwise answer "no"';

const primeGame = () => {
  const question = randomNumber(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => gameCore(primeGame, gameDescription);
