import inquirer from 'inquirer';
import chalk from 'chalk';

let count = 0;

async function startCounter() {
    console.clear();
    console.log(chalk.blue.bold(`--- TS CLI COUNTER ---`));
    console.log(chalk.yellow(`Current Count: `) + chalk.green.bold(count));
    console.log(chalk.dim('-----------------------'));

    const action = await inquirer.prompt([
        {
            type: 'list',
            name: 'operation',
            message: 'What would you like to do?',
            choices: [
                'Increment (+)',
                'Decrement (-)',
                'Reset',
                'Exit'
            ]
        }
    ]);

    switch (action.operation) {
        case 'Increment (+)':
            count++;
            startCounter();
            break;
        case 'Decrement (-)':
            count--;
            startCounter();
            break;
        case 'Reset':
            count = 0;
            startCounter();
            break;
        case 'Exit':
            console.log(chalk.magenta('Goodbye!'));
            process.exit();
    }
}

startCounter();