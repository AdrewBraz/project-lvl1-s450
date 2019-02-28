import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name?');

const isEven = num => num % 2 === 0;

const getAnswer = value => readlineSync.question(`Question: ${value}`);

const startGame = (name, counter = 0, limit = 3) => {
  if (limit === counter) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  const question = Math.round(Math.random() * 10);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const userAnswer = getAnswer(question);
  console.log(`Your answer: ${userAnswer}`);
  if (correctAnswer !== userAnswer) {
    console.log(`${userAnswer} is the wrong answer ;(. Correct answer was ${correctAnswer}`);
    console.log(`Let's try again, ${name}!`);
    return;
  }
  console.log('Correct!');
  const count = counter + 1;
  startGame(name, count);
};

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number even otherwise answer "no"');
  const userName = getName();
  startGame(userName);
};

export default evenGame;
