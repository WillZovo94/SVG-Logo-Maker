const inquirer = require('inquirer');
const fs = require('fs');
const { generateSvgTriangle, generateSvgCircle, generateSvgSquare } = require('./lib/shapes');


const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'type in 3 characters for a text'
    },
    {
        type: 'input',
        name: 'Tcolor',
        message: 'type in text color'
        // PROB CAN PUT DIFF ACCEPTABLE COLORS INSTEAD. color keyword OR hexadecimal color
    },
    {
        type: 'input',
        name: 'shape',
        message: 'Type in your shape'
        // circle, triangle, square (prob can use a different type to select them instead)
    },
    {
        type: 'input',
        name: 'Scolor',
        message: 'Type in shape color'
        // Color keyword or hexadecimal number
    }
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Successfully Generated a SVG File!')
    })
}
function init () {
    inquirer.prompt(questions)
    .then((answers) => {
        if(answers.shape === 'triangle') {
            const official = generateSvgTriangle(answers);
            writeToFile('./examples/DemoOfficial.svg', official);
        } else if (answers.shape === 'circle') {
            const official = generateSvgCircle(answers);
            writeToFile('./examples/DemoOfficial.svg', official);
        } else if (answers.shape === 'square') {
            const official = generateSvgSquare(answers);
            writeToFile('./examples/DemoOfficial.svg', official);
        } else {
            console.log('Invalid shape input');
        }
    })
};

init();









/*

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
*/
