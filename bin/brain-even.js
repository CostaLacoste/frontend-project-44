#!/usr/bin/env node

import { question } from "readline-sync";
import { isEven, genNum } from "../src/help.js";

const genQuestion = () => {
    const num = genNum();
    const answer = isEven(num) ? yes : no;

    return {
        question: String(num),
        answer,
    };
};

const roundsCount = 3;

for (let i = 0; i < roundsCount; i += 1) {
  const { question, correctAnswer } = genQuestion();

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase();

  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log("Let's try again");
    process.exit(0);
  }

  console.log('Correct!');
};

const description = `Answer "yes" if the number is even, otherwise answer "no".`;
console.log(description);
console.log(genQuestion());