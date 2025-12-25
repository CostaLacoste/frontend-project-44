#!/usr/bin/env node

import { isEven, genNum } from "../src/help.js";

const genQuestion = () => {
    const num = genNum();
    
};

const description = `Answer "yes" if the number is even, otherwise answer "no".`;
console.log(description, genQuestion);