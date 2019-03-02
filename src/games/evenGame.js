import { cons } from 'hexlet-pairs';
import { randomNumber, gameCore } from '..';

const isEven = num => num % 2 === 0;

const gameRules = 'Answer "yes" if number even otherwise answer "no".';

const evenGame = () => {
  const question = randomNumber(100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const brainEven = () => gameCore(evenGame, gameRules)

export default brainEven;
