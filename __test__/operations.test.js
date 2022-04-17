// importar las funciones de operations.js

import { sumar, restar, multiplicar, division } from "../helper/operations";

test("Suma", () => {
    // vamos a usar la funcion expect para llamar la funcion sumar y
    // pasarle 2 parametros y esperar un resultado 
    expect(sumar(1, 3)).toBe(4);
});

test("Restar",() => {
    expect(restar(4, 2)).toBe(2);
});

test("Multiplicar", () => {
    expect(multiplicar(3, 6)).toBe(18);
});

test("Division", () => {
    expect(division(20, 5)) .toBe(4);
});