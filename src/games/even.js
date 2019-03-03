import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';
import gameCore from '..';

const isEven = num => num % 2 === 0;

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const evenGame = () => {
  const question = randomNumber(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => gameCore(evenGame, gameDescription);
