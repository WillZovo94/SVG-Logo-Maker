const { Triangle, Square, Circle } = require('./shapes.js');

// Made test to check the customization of the shapes
describe('Shape inputs with color and text', () => {
    describe('Circle', () => {
        test('Circle should match color and text inputs', () => {
            const circle = new Circle('Cir', 'blue', 'orange');
            expect(circle.Tcolor).toContain('blue');
            expect(circle.Scolor).toContain('orange');
            expect(circle.text).toContain('Cir');
        })
    })

    describe('Square', () => {
        test('Square should match color and text inputs', () => {
            const square = new Square('Squ', 'pink', 'black');
            expect(square.Tcolor).toContain('pink');
            expect(square.Scolor).toContain('black');
            expect(square.text).toContain('Squ');
        })
    })

    describe('Triangle', () => {
        test('Triangle should match color and text inputs', () => {
            const triangle = new Triangle('Tri', 'violet', 'brown');
            expect(triangle.Tcolor).toContain('violet');
            expect(triangle.Scolor).toContain('brown');
            expect(triangle.text).toContain('Tr');
        })
    })
})

