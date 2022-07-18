const sum = require('./sum');

describe("a função sum(a,b) retorna a soma do parâmetro a com o b", () => {
 it ("o retorno de sum(4,5) é 9", () => {
    expect(9).toBe(sum(4,5));
 });
 it ("o retorno de sum (0,0) é 0", () => {
    expect(0).toBe(sum(0,0));
 });
 it ("a função sum lança um erro quando os parâmetros são 4 e (string 5)", () => {
    expect(() => sum(4,"5")).toThrow(Error);
 })
 it ("a função sum lança um erro quando os parâmetros são 4 e (string 5)", () => {
    expect(() => sum(4,"5")).toThrowError(new Error('parameters must be numbers'));
 }) 
});