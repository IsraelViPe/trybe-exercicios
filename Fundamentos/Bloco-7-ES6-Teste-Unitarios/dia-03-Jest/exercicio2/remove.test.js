const { expect } = require("expect");
const { not } = require("micromatch");
const myRemove = require("./remove");

describe("A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array", () => {
  it("a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado", () => {
    expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
  });
  it("a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it("a chamada myRemove([1, 2, 3, 4], 5) retorna o array [1, 2, 3, 4]", () => {
    expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5));
  });
});
