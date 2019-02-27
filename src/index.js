import readlineSync from 'readline-sync';

const readlineFunc = () => readlineSync.question('May I have your name?');

const startFunc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineFunc();
  console.log(`Hello, ${userName}`);
};

export default startFunc;
