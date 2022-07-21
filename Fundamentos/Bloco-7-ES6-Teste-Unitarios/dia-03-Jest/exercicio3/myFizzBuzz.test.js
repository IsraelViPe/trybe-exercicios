const { myFizzBuzz, sum } = require("./myFizzBuzz");
// const fizz = require("./myFizzBuzz");

// describe("testes da função myfizzBuzz", () => {
//   it("se o num for 15 o retorno deve ser fizzbuzz", () => {
//     expect("fizzbuzz").toBe(myFizzBuzz(15));
//   });
//   it("se o num for 3 o retorno deve ser fizz", () => {
//     expect("fizz").toBe(myFizzBuzz(3));
//   });
//   it("se o num for 5 o retorno deve ser buzz", () => {
//     expect("buzz").toBe(myFizzBuzz(5));
//   });
//   it("se o num for 2 o retorno deve ser 2 ", () => {
//     expect(2).toBe(myFizzBuzz(2));
//   });
//   it("se num for NaN o retorno deve ser false", () => {
//     expect(myFizzBuzz(NaN)).toBe("false");
//   });
// });


it('should throw error', () => {
  expect(() => { sum("a",2)}).toThrow();
});