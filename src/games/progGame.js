import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';
import gameCore from '..';


const gameDescription = 'What number is missing in this progression?';

const progGame = () => {
  const step = randomNumber(1, 5);
  const length = 10;
  const missedItem = length - randomNumber(0, 10);
  const firstItem = randomNumber(0, 20);
  const progBuilder = (currentItem, itemPosition, currentProgression, correctAnswer) => {
    if (itemPosition === length) {
      return cons(currentProgression, correctAnswer);
    }
    const item = currentItem + step;
    const position = itemPosition + 1;
    if (position === missedItem) {
      const progression = `${currentProgression} ..`;
      return progBuilder(item, position, progression, `${item}`);
    }
    const progression = `${currentProgression} ${item}`;
    return progBuilder(item, position, progression, correctAnswer);
  };
  return progBuilder(firstItem, 0, '', '');
};

export default () => gameCore(progGame, gameDescription);
