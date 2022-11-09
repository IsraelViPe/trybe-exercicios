
const uppercase = require('./exercicio7');

// describe('testa função uppercase', () => {
    it ('testa função callback passada como argumento transforma a string em caixa alta', (done) => {
        
        function callback(frase) {
        
            return`${frase}`;
        }
       const expected = uppercase('lala',callback); 
       console.log(expected)
        expect(expected).toBe('LALA')
        
       
        done();
    })
// })