#!/usr/bin/env node

import runGame from "../src/runGame.js";
import { calcNums, genMathOp, genNum } from "../src/help.js";

const genCalcQuest = () => {
    const a = genNum();
    const b = genNum();
    const ops = genMathOp();

    const question = `${a} ${ops} ${b}`;
    const answer = String(calcNums(a, b, ops));

    return [question, answer];
};

const description = 'What is the result of the expression?'
runGame(description, genCalcQuest);