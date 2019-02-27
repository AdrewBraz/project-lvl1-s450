import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name?');


const startFunc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = getName();
  console.log(`Hello, ${userName}`);
};

export default startFunc;
