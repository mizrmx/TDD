/*
Calcular el area de un cuadrado de 5 x 5 debe de dar como resultado 25
Calcular el area de un cuadrado de 2 x 2 debe de dar como resultado 4
Calcular el area de un rectangulo de 2 x 4 debe dar como resultado 8
Calcular el area de un triangulo de altura 12 y base 20 debe dar como resultado 120
*/

const { it, expect } = require("@jest/globals");
const CalculadorDeArea = require('./main'); 


describe('Calculador de areas', () => {
    const calculadorDeArea = new CalculadorDeArea();
    it('Calcular el area de un cuadrado de 5 x 5 debe de dar como resultado 25',() => {
        const resultado = calculadorDeArea.calcularAreaCuadrado(5);
        expect(resultado).toBe(25);
    });

    it('Calcular el area de un cuadrado de 2 x 2 debe de dar como resultado 4',() => {
        const resultado = calculadorDeArea.calcularAreaCuadrado(2);
        expect(resultado).toBe(4);
    });

    it('Calcular el area de un cuadrado de 0 x 0 debe de dar como resultado un mensaje de error',() => {
        const resultado = calculadorDeArea.calcularAreaCuadrado(0);
        expect(resultado).toBe('Error el lado debe ser mayor a 0');
    });

    it('Calcular el area de un rectangulo de 2 x 4 debe dar como resultado 8',() => {
        const resultado = calculadorDeArea.calcularAreaRectangulo(2,4);
        expect(resultado).toBe(8);
    });

    it('Calcular el area de un triangulo de altura 12 y base 20 debe dar como resultado 120',() => {
        const resultado = calculadorDeArea.calcularAreaTriangulo(12,20);
        expect(resultado).toBe(120);
    });
});