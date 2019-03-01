import { getUserAnswer, wrognAnswer, randomNumber } from '..';

const isEven = num => num % 2 === 0;

const evenGame = (counter = 0) => {
  const limit = 3;
  if (limit === counter) {
    return true;
  }
  const question = randomNumber(100)
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const userAnswer = getUserAnswer(question);
  console.log(`Your answer: ${userAnswer}`);
  if (correctAnswer !== userAnswer) {
    return wrognAnswer(userAnswer, correctAnswer);
  }
  console.log('Correct!');
  const count = counter + 1;
  return evenGame(count);
};

export default evenGame;
