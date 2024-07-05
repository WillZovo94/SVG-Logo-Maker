const inquirer = require('inquirer');
const fs = require('fs');
// grab the module.exports from the shapes.js file in the lib folder.
const { Triangle, Square, Circle } = require('./lib/shapes');

// Questions variable with different input types for inquirer to use.
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'type in 3 characters for a text',
        // This makes sure you can only put 3 max
        validate: function (input) {
            if (input.length <= 3) {
                return true;
            } else {
                return 'You may only use 3 characters max'
            }
        }
    },
    {
        type: 'input',
        name: 'Tcolor',
        message: 'type in text color'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Pick a shape',
        choices: [
            'circle', 'square', 'triangle'
        ]
    },
    {
        type: 'input',
        name: 'Scolor',
        message: 'Type in shape color'
    }
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Successfully Generated a SVG File!')
    })
}

// a function to create shapes based on inputs
function init () {
    // call the inquirer to create a questionnaire
    inquirer.prompt(questions)
    .then((answers) => {
        if(answers.shape === 'triangle') {
            const official = new Triangle(answers.text, answers.Tcolor, answers.Scolor);
            svgString = official.generateSvgTriangle();
            writeToFile('./examples/DemoOfficial.svg', svgString);
        } else if (answers.shape === 'circle') {
            const official = new Circle(answers.text, answers.Tcolor, answers.Scolor);
            svgString = official.generateSvgCircle();
            writeToFile('./examples/DemoOfficial.svg', svgString);
        } else if (answers.shape === 'square') {
            const official = new Square(answers.text, answers.Tcolor, answers.Scolor);
            svgString = official.generateSvgSquare();
            writeToFile('./examples/DemoOfficial.svg', svgString);
        } else {
            console.log('Invalid shape input');
        }
    })
};

init();