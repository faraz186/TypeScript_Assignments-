import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
let TimerOut = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("\t\t\t\t Welcome to the QuizApp \n\n");
    await TimerOut();
    rainbowTitle.stop();
}
await welcome();
async function AskQuestion() {
    let answers = await inquirer.prompt([
        {
            type: "list",
            name: "questionNo1",
            choices: ["JavaScript", "React"],
            message: " TypeScript is a Subset of ??",
        },
        {
            type: "list",
            name: "questionNo2",
            choices: ["tsc app.ts", "npm start"],
            message: "Compile the TS File into JS File run command??",
        },
        {
            type: "list",
            name: "questionNo3",
            choices: ["npm i -y", "npm install -g -y"],
            message: "Install npm packages run command?? ",
        },
        {
            type: "list",
            name: "questionNo4",
            choices: ["TypeScript", "transferScript"],
            message: "TS stands for ?? ",
        },
        {
            type: "list",
            name: "questionNo5",
            choices: ["vercel", "firebase"],
            message: "In NextJS which website is best for hosting",
        }
    ]);
    if (answers.questionNo1 === "JavaScript") {
        console.log("Congrats!! Correct answer");
    }
    else
        () => {
            console.log("Incorrect");
        };
    if (answers.questionNo2 === "tsc app.ts") {
        console.log("Congrats!! Correct answer");
    }
    else {
        console.log("Incorrect");
    }
    if (answers.questionNo3 === "npm i -y") {
        console.log("Congrats!! Correct answer");
    }
    else {
        console.log("Incorrect");
    }
    if (answers.questionNo4 === "TypeScript") {
        console.log("Congrats!! Correct answer");
    }
    else {
        console.log("Incorrect");
    }
    if (answers.questionNo5 === "vercel") {
        console.log("Congrats!! Correct answer");
    }
    else {
        console.log("Incorrect");
    }
}
AskQuestion();
