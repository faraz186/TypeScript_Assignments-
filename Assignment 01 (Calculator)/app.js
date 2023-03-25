import chalkAnimation from 'chalk-animation';
import inquirer from "inquirer";
import chalk from "chalk";
let DynamicTimer = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("\t\t\t Welcome to Faraz's Calculator. let's start.. \n\n");
    await DynamicTimer();
    rainbowTitle.stop();
}
await welcome();
async function askQuestion() {
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "operation",
            message: "Which operation you want to perform? \n",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter 1st value:"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter 2nd value:"
        }
    ]);
    if (answers.operation == "Addition") {
        console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if (answers.operation == "Subtraction") {
        console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }
    else if (answers.operation == "Multiplication") {
        console.log(chalk.green(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
    else if (answers.operation == "Division") {
        console.log(chalk.green(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }
}
;
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "If you continue? Press y or n:"
        });
    } while (again.restart == 'y');
}
startAgain();
