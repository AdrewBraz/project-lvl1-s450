import readlineSync from 'readline-sync';

const readlineFunc = () => readlineSync.question('May I have your name?');

export default readlineFunc;
