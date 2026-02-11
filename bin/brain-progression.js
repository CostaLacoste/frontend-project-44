#!/usr/bin/env node

import runGame from "../src/runGame.js";
import { genArithmeticProgr, replaceRandomWithDots } from "../src/help.js";

const genProgrQuest = () => {
    const arr = genArithmeticProgr();
    const [newArr, correctAnswer] = replaceRandomWithDots(arr);

    const question = newArr.join(' ');

    return [question, String(correctAnswer)];
};
const description = 'What number is missing in the progression?';
runGame(description, genProgrQuest);