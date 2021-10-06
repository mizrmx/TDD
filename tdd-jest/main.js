/*

Debemos crear un calculador de areas que pueda calcular el 
area de un cuadrado, de un rectángulo y un triángulo

Casos:

Calcular el area de un cuadrado de 5 x 5 debe de dar como resultado 25
Calcular el area de un cuadrado de 2 x 2 debe de dar como resultado 4
Calcular el area de un rectangulo de 2 x 4 debe dar como resultado 8
Calcular el area de un triangulo de altura 12 y base 20 debe dar como resultado 120

*/

class calculadorDeArea {
    calcularAreaCuadrado(lado) {
        if (lado < 1) {
            return 'Error el lado debe ser mayor a 0';
        }
        return lado * lado;
    }

    calcularAreaRectangulo(ancho, alto) {
        return ancho * alto;
    }

    calcularAreaTriangulo(altura, base) {
        return base * altura / 2;
    }
}

module.exports = calculadorDeArea;