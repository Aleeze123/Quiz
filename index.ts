#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.yellow.underline.italic("\n\t\t\t WELCOME TO ALEEZE QUIZ APP"));

type Questions = {
    question: string;
    choices: string[];
    correctAnswer: string;
};
const questions: Questions[] = [
    {
        question: 'Which company developed JavaScript in the 1990s?',
        choices: ['Microsoft', 'Netscape', 'Google', 'Apple'],
        correctAnswer: 'Netscape'
    },
    {
        question: 'How do you declare a variable that cannot be reassigned in JavaScript?',
        choices: ['let', 'var', 'const', 'immutable'],
        correctAnswer: 'const'
    },
    {
        question: 'What file extension is used for TypeScript files?',
        choices: ['.java', '.js', '.ts', '.jsx'],
        correctAnswer: '.ts'
    },
    {
        question: 'Which of the following is a common data type in JavaScript?',
        choices: ['Record', 'Object', 'Matrix', 'Tuple'],
        correctAnswer: 'Object'
    },
    {
        question: 'What is a common abbreviation for JavaScript?',
        choices: ['JDK', 'GS', 'JVM', 'JS'],
        correctAnswer: 'JS'
    },
    {
        question: 'What is the main purpose of using loops in JavaScript?',
        choices: ['To perform repetitive tasks efficiently', 'To generate random numbers', 'To create user interfaces', 'To debug JavaScript code'],
        correctAnswer: 'To perform repetitive tasks efficiently'
    },
    {
        question: 'Which keyword is used to wait for a promise to resolve in an async function?',
        choices: ['wait', 'then', 'async', 'await'],
        correctAnswer: 'await'
    },
];

async function askQuestions() {
    let correctAnswers = 0;
    let wrongAnswers = 0;

    // Loop through each question in the questions array   
    //for of loop
    for (const q of questions) {

        // Prompt the user with the current question and choices
        const answer = await inquirer.prompt([   
            {
                type: 'list',
                name: 'response',
                message: q.question,
                choices: q.choices
            }
        ]);

        // Check if the user's answer matches the correct answer
        if (answer.response === q.correctAnswer) {
            console.log(chalk.green.bold(`Correct\n`));
            correctAnswers++; // Increment the score for a correct answer
        } 
        else {
            console.log(`${chalk.bold.redBright(" Wrong!")} The correct answer is "${chalk.bold.green(q.correctAnswer)}".\n`);
            wrongAnswers++;
        }
    }

    // user's final score
    console.log(chalk.bold.underline.magenta(`\tFinal Score:`))
    console.log(chalk);
    
    console.log(chalk.bold.underline(`${chalk.bold.green(`Correct Answers: ${correctAnswers}`)}\n${chalk.red(`Wrong Answers: ${wrongAnswers}`)}\n${chalk.yellow(`Total Questions: ${questions.length}`)}`));
    
}

askQuestions();



