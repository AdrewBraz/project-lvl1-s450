import { cons, car, cdr } from 'hexlet-pairs';
import randomNumber from '../utils';
import gameCore from '..';

const gameDescription = 'What number is missing in this progression?';

const progressionLength = 10;

const progBuilder = (startItem, step, hiddenElementPosition) => {
  let progression = '';
  const hiddenElement = `${startItem + step * hiddenElementPosition}`;
  for (let i = 0; i < progressionLength; i++) {
    progression += i === hiddenElementPosition ? '.. ' : `${startItem + i * step} `;
  }
  return cons(progression, hiddenElement);
};

const progGame = () => {
  const step = randomNumber(1, 5);
  const hiddenElementPosition = randomNumber(0, progressionLength);
  const firstItem = randomNumber(0, 20);
  const result = progBuilder(firstItem, step, hiddenElementPosition);
  const question = car(result);
  const correctAnswer = cdr(result);
  return cons(question, correctAnswer);
};

export default () => gameCore(progGame, gameDescription);
