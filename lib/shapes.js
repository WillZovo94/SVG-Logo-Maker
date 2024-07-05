function generateSvgCircle(answers) {
    return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
    
     <circle cx="150" cy="100" r="80" fill="${answers.Scolor}" />
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.Tcolor}">${answers.text}</text>
    
    </svg>`
}

function generateSvgTriangle(answers) {
    return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
    
     <polygon points="150, 10 290, 190 10, 190" fill="${answers.Scolor}"/>
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.Tcolor}">${answers.text}</text>
     
     </svg>`
}

function generateSvgSquare(answers) {
    return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

     <rect x="60" y="20" width="180" height="180" fill="${answers.Scolor}" />
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.Tcolor}">${answers.text}</text>
     
     </svg>`
}

module.exports = {
    generateSvgTriangle,
    generateSvgCircle,
    generateSvgSquare
}