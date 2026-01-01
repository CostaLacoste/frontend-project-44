#!/usr/bin/env node

import runGame from "../src/runGame.js";
import { gcd, genNum } from "../src/help.js";

const genGcdQuest = () => {
    const a = genNum();
    const b = genNum();

    const question = `${a} ${b}`;
    const correctAnswer = String(gcd(a, b));

    return [question, correctAnswer];
};

const description = 'Find the greatest common divisor of given numbers.';

runGame(description, genGcdQuest);