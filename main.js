#! /usr/bin/env node
import inquirer from "inquirer";
const systemGenNumber = Math.floor(Math.random() * 10);
// console.log(systemGenNumber);
const answer = await inquirer.prompt([
    {
        name: "userGuess",
        type: "number",
        message: "Guess a number between 1 to 10"
    }
]);
const { userGuess } = answer;
console.log(`User guess ${userGuess}, System number ${systemGenNumber}`);
if (userGuess == systemGenNumber) {
    console.log("Your guess is correct \n You Won!");
}
else {
    console.log("Your guess is incorrect \n You Lost!");
}
