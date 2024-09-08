/* Write a program that asks the user for their name and greets them with their name. */

import { input } from "@inquirer/prompts";

const answer = await input({ message: "Enter your name" });
console.log(answer);
