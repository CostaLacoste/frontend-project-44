#!/usr/bin/env node

import runGame from "../src/runGame.js";
import { isPrime, genNum } from "../src/help.js";

const genPrimeQuest = () => {
    const num = genNum();
    const question = num
    const correctAnswer = isPrime(num) ? 'yes' : 'no'
    return [question, correctAnswer]
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
runGame(description, genPrimeQuest);