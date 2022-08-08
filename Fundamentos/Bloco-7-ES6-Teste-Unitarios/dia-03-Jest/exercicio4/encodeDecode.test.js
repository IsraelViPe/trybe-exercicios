
const encodeDecode = require("./encodeDecode");

describe("teste para encode", () => {
  it("se encode é uma função", () => {
    expect(typeof encodeDecode.encode).toBe("function");
  });
  it("aeiou deve ser igual a 12345", () => {
    expect("12345").toBe(encodeDecode.encode("aeiou"));
  });
  it("bacedifogu deve ser igual a b1c2d3f4g5", () => {
    expect("b1c2d3f4g5").toBe(encodeDecode.encode("bacedifogu"));
  });
  it("umdoistres.length é igual a 5md43str2s.length", () => {
    expect(encodeDecode.encode("umdoistres")).toHaveLength(10);
  });
});
