#!/usr/bin/env node
// File that runs when you link/install pkg and run roll-dice

import minimist from 'minimist';
import { roll } from "../lib/roll.js"

const argv = minimist(process.argv.slice(2));

const result = roll(argv.sides, argv.dice, argv.rolls);

console.log(JSON.stringify(result));

export {default};