import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name?');

const isEven = num => num % 2 === 0;

const getAnswer = num => readlineSync.question(`Question: ${num}`);

const startGame = (name, counter = 0) => {
  const randomNumber = Math.round(Math.random() * 10);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  const userAnswer = getAnswer(randomNumber);
  console.log(`Your answer: ${userAnswer}`);
  if (correctAnswer !== userAnswer) {
    console.log(`${userAnswer} is the wrong answer ;(. Correct answer was ${correctAnswer}
    Let's try again, ${name}!`);
    return;
  }
  console.log('Correct!');
  const count = counter + 1;
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  startGame(name, count);
};

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number even otherwise answer "no"');
  const userName = getName();
  startGame(userName);
};

export default evenGame;
