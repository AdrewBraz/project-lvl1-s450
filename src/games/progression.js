import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';
import gameCore from '..';

const gameDescription = 'What number is missing in this progression?';

const progressionLength = 10;

const progBuilder = (startItem, step, hiddenElementPosition) => {
  let progression = '';
  for (let i = 0; i < progressionLength; i += 1) {
    progression += i === hiddenElementPosition ? '.. ' : `${startItem + i * step} `;
  }
  return progression;
};

const progGame = () => {
  const step = randomNumber(1, 5);
  const hiddenElementPosition = randomNumber(0, progressionLength);
  const firstItem = randomNumber(0, 20);
  const result = progBuilder(firstItem, step, hiddenElementPosition);
  const question = result;
  const correctAnswer = `${firstItem + step * hiddenElementPosition}`;
  return cons(question, correctAnswer);
};

export default () => gameCore(progGame, gameDescription);
