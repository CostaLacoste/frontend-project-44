#!/usr/bin/env node

import { isEven, genNum } from "../src/help.js";
import runGame from "../src/runGame.js";

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const genQuestion = () => {
  const num = genNum();
  const answer = isEven(num) ? 'yes' : 'no';

  return [String(num), answer];
};

runGame(description, genQuestion);