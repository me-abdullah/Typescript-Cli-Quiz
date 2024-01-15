#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';

//Quiz Questions
const quizData = [
    {
        question: "What is the full form of HTML? ",
        correctAnswer: "Hyper Text Markup Language",
        choices: [
            "Hyper Test Make up Language",
            "Hyper Text Markup Language",
            "Hyper Text Made up Language",
            "None of these"
        ]
    },
    {
        question: "What is the full form of RAM? ",
        correctAnswer: "Random Access Memory",
        choices: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Aceapt Memory",
            "None of these"
        ]
    },
    {
        question: "What is the full form of CPU? ",
        correctAnswer: "Central Processing Unit",
        choices: [
            "Central Program Unit",
            "Central Processing Unit",
            "Central Preload Unit",
            "None of these"
        ]
    },
    {
        question: "What is the full form of AI? ",
        correctAnswer: "Artificial Intelligence",
        choices: [
            "Adobe Illustrator",
            "Available Intern",
            "Artificial Intelligence",
            "Available In"
        ]
    },
    {
        question: "What is the full form of E-mail? ",
        correctAnswer: "Electronic Mail",
        choices: [
            "Electronic Mail",
            "Electric Mail",
            "Engine Mail",
            "None of these"
        ]
    }
];

(async function () {
    let userName = await inquirer.prompt([{
        name: "username",
        type: "string",
        message: "Enter your Name: "
    }]);
    console.log(chalk.red(`Hello ${userName.username}! Welcome to the typescript cli quiz system..!`));
    console.log(chalk.blue("----------------------"))

    let score = 0;

    for (const quiz of quizData) {
        const userAnswer = await inquirer.prompt([{
            name: "userAnswer",
            type: "list",
            message: quiz.question,
            choices: quiz.choices
        }]);

        if (userAnswer.userAnswer === quiz.correctAnswer) {
            score++;
        }
    }

    console.log(chalk.green(`Your score: ${score} out of ${quizData.length}`));

    // Calculate the percentage of correct answers
    const percentageScore = (score / quizData.length) * 100;
    let resultMessage = '';

    if (percentageScore >= 70) {
        resultMessage = 'Congratulations! You have passed the quiz.';
    } else {
        resultMessage = 'Sorry! You did not pass the quiz. Please try again.';
    }

    console.log(chalk.yellow(resultMessage));
})();
