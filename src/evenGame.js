import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name?');

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

const getAnswer = num => readlineSync.question(`Question: ${num}`);

const startGame = (name, counter = 0) => {
  const num = Math.round(Math.random() * 10);
  const answer = getAnswer(num);
  console.log(`Your answer: ${answer}`);
  if (isEven(num) !== answer) {
    return console.log(`${answer} is the wrong answer ;(. Correct answer was ${isEven(num)}
    Let's try again, ${name}!`);
  }
  console.log('Correct!');
  const count = counter + 1;
  return count === 3 ? console.log(`Congratulations, ${name}!`) : startGame(name, count);
};

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number even otherwise answer "no"');
  const userName = getName();
  startGame(userName);
};

export default evenGame;
