#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let p_name;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
      'Welcome Mate To The Game Of Tajesh! UwU \n'
    );
  
    await sleep();
    rainbowTitle.stop();
  
    console.log(`
      ${chalk.bgBlue('HOW TO PLAY')} 
      I Am A CLI Game Made By My Master Tajesh So He Can Know How Much Others Know About Him
      If You Get Any Questions Wrong I Will Be Saying ${chalk.bgRed('Chitta Dukhyo')}
      If You Complete The Game You Will Get A Surprise From My Master Tajesh.
    `);
  }

async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking Your Answer...').start();
    await sleep();

    if(isCorrect) {
        spinner.success({ text: `Chitta Bujhayeu ${p_name} Mate` });
    } else {
        spinner.error({text:`Chitta Dukhayeu ${p_name} Mate`});
        process.exit(1);
    }
}

async function askName() {
    const answers = await inquirer.prompt({
        name: 'p_name',
        type: 'input',
        message: 'What Is Your Name?',
        default(){
            return 'Mate';
        }
    });

    p_name = answers.p_name;
}

function winner(){
    console.clear();
    figlet(`Badhaixa, ${p_name} !\n $ 1, 000, 000`, (err, data) => {
console.log(gradient.pastel.multiline(data) + '\n');

console.log(
    chalk.green(
        `Tajesh Loves Kreeeetikaaaaa`
    )
);

process.exit(0);
    });
}
async function question1() {
    const answers = await inquirer.prompt({
      name: 'question_1',
      type: 'list',
      message: 'What Is Tajesh First In Game Name?\n',
      choices: [
        'NSxTEJESH',
        '7DSxLUFFy',
        'OP Itachi',
        'TejeshGaming',
      ],
    });
  
    return handleAnswer(answers.question_1 === 'TejeshGaming');
  }
  
  async function question2() {
    const answers = await inquirer.prompt({
      name: 'question_2',
      type: 'list',
      message: 'What Did Tajesh Went To Put Dashain Ko Tika This Year?\n',
      choices: ['Solukhumbu', 'Chitwan', 'Gorkha', 'Kathmandu'],
    });
    return handleAnswer(answers.question_2 === 'Gorkha');
  }
  
  async function question3() {
    const answers = await inquirer.prompt({
      name: 'question_3',
      type: 'list',
      message: `What Is The Name Of Tajesh Current GF?\n`,
      choices: ['Kerzy', 'UwUChan', 'Anjali', 'Kreeetikaaa'],
    });
  
    return handleAnswer(answers.question_3 === 'Kreeetikaaa');
  }
  
  async function question4() {
    const answers = await inquirer.prompt({
      name: 'question_4',
      type: 'list',
      message: 'What Does Tajesh Likes Most?\n',
      choices: [
        'Gaming',
        'Coding',
        'Reading',
        'Lisening Music'
      ],
    });
    return handleAnswer(answers.question_4 === 'Gaming');
  }
  
  async function question5() {
    const answers = await inquirer.prompt({
      name: 'question_5',
      type: 'list',
      message:
        'What Does Sycho Aspire To Be?\n',
      choices: ['Programmer', 'Software Engineer', 'Esport Player', 'Civil Engineer'],
    });
  
    return handleAnswer(answers.question_5 === 'Software Engineer');
  }

  // Run the game
  console.clear();
  await welcome();
  await askName();
  await question1();
    await question2();
    await question3();
    await question4();
    await question5();
 winner();