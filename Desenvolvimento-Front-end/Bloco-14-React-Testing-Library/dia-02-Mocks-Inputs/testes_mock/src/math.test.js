const math = require('./math');
jest.mock("./math"); // mockando todo o arquivo de uma só vez 

test("#somar", () => {

    math.somar.mockImplementation((a,b) => a + b); // aqui é como se eu fizesse uma simulação do comportamento da função
    math.somar(1,2); //aqui eu faço a chamada da função de fato
    
    expect(math.somar).toHaveBeenCalled(); // espero que ela seja chamada 
    expect(math.somar).toHaveBeenCalledTimes(1);
    expect(math.somar).toHaveBeenCalledWith(1, 2) // testo os paramêtros
    expect(math.somar(1, 2)).toBe(3); // agora testo o resultado de fato 
})

// agora vamos utilizar o jest.spyOn()

test("#somar com spyOn",  () => {
    const mockSomar = jest.spyOn(math, "somar"); // oque são esses dois parâmetros ???

    mockSomar(1, 2);
    expect(mockSomar).toHaveBeenCalled();
    expect(mockSomar).toHaveBeenCalledTimes(1);
    expect(mockSomar).toHaveBeenCalledWith(1, 2);
    // expect(mockSomar(1, 2)).resolves.toBe(3);
})

//mock.mockClear()  limpar os dados de uso de uma simulação entre dois expects;

//mock.mockReset() Útil quando você deseja resetar uma simulação para seu estado inicial;

//mock.mockRestore() quando você quer simular funções em certos casos de teste e restaurar a implementação original em outros;