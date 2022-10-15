function retornaNumeroAleatorio() {
    return Math.floor(Math.random() * 100);
}

function divisivelPorDois() {
    return (retornaNumeroAleatorio() % 2) === 0
}

function somaDoisNumeros() {
    return retornaNumeroAleatorio() + retornaNumeroAleatorio();
}

//MOCK

describe("Aprendendo sobre mocks", () => {
    it("Testa se a função foi chamada", () => {

        somaDoisNumeros = jest.fn();
        somaDoisNumeros(); // criei o mock na linha de cima mas preciso chamá-lo no contexto do teste
        expect(somaDoisNumeros).toHaveBeenCalled();
    });

    it("Testa o resultado da função", () => {
        somaDoisNumeros = jest.fn().mockReturnValue(8);

        expect(somaDoisNumeros()).toBe(8);

    });

    it( "Testa quantas vezes a função foi chamada", () => {
        somaDoisNumeros = jest.fn();
        somaDoisNumeros();
        somaDoisNumeros();
        somaDoisNumeros();
        expect(somaDoisNumeros).toHaveBeenCalledTimes(3);

    }); 

    it("Testa que retorna true quando o numero é par e false quando o numero é impar", () => {
        retornaNumeroAleatorio= jest.fn().mockReturnValue(2)
        expect(divisivelPorDois()).toBe(true);
        retornaNumeroAleatorio= jest.fn().mockReturnValue(3)
        expect(divisivelPorDois()).toBe(false);
    })
})