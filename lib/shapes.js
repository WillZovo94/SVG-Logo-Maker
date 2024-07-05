// Each one of these classes are for each shape. The selected shape is on the init function, but here, we see the inputs used for the creation of color and text.

class Circle {
    constructor(text, Tcolor, Scolor) {
        this.text = text;
        this.Tcolor = Tcolor;
        this.Scolor = Scolor;
    }
    generateSvgCircle() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
         <circle cx="150" cy="100" r="80" fill="${this.Scolor}" />
         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.Tcolor}">${this.text}</text>
        </svg>`
    }
}

class Triangle {
    constructor(text, Tcolor, Scolor) {
        this.text = text;
        this.Tcolor = Tcolor;
        this.Scolor = Scolor;
    }
    generateSvgTriangle() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
         <polygon points="150, 10 290, 190 10, 190" fill="${this.Scolor}"/>
         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.Tcolor}">${this.text}</text>
         </svg>`
    }
}

 class Square {
    constructor(text, Tcolor, Scolor) {
        this.text = text;
        this.Tcolor = Tcolor;
        this.Scolor = Scolor;
    }
    generateSvgSquare() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
         <rect x="60" y="20" width="180" height="180" fill="${this.Scolor}" />
         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.Tcolor}">${this.text}</text>
         </svg>`
    }
}

// module.exports so we can use these in another file.
module.exports = {
    Square,
    Triangle,
    Circle,
}