
const { getPokemonDetails } = require("./exercicio8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
   const errorMsg = new Error('Não temos esse pokémon para você :(');
   const callback = (erro,msg) => {
    
        expect(erro).toEqual(errorMsg)
        done();
    
   } 
   getPokemonDetails((element) => element.name === "pika", callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const Msg = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember'
    const callback = (erro, msg) => {
        expect(msg).toBe(Msg)
        done ();
    }
    getPokemonDetails((element) => element.name === 'Charmander', callback);
  });
});

