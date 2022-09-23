import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  }

  //Atenção para entendimento da estrutura de uma chamada à API

  // global.fetch = (url) => {             // passo uma url
  // return Promise.resolve({              // recebo uma promise 
  // json: () => Promise.resolve({ obj })  // a resposta da promise é um objeto json com uma função 
  // })                                    // a função do obj tambem é uma promise que por fim retorna os dados  
  //}
  //

  // reproduzindo essa estrutura com o jest
  // global.fetch = jest.fn().mockResolvedValue({   // aqui reproduzimos a chamada e o retorno da primeira promise
  // json: jest.fn().mockResolvedValue({ obj})     // a resposta é um objto json que contem a chamada e o retorno da segunda promise
  // })

  // os dois jeitos mostrados acima dariam conta de simular um fetch a API e poderiam ser utilizados
  // a diferença entre eles é que utilizando o jest eu consigo introduzir matchers para realizar testes diversos
  // utilizando apenas o objeto global eu apenas consigo simular o fetch


  jest.spyOn(global, 'fetch'); // o jest spy espia chamadas do objeto global 
  //É por meio deste objeto global que conseguimos usar qualquer função do sistema
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  })

  // Outra forma de mock do fetch:
  // global.fetch = jest.fn(() => Promise.resolve({
  // json: () => Promise.resolve(joke)}));

  //terceira forma com async 
  // global.fetch = jest.fn(async () => ({
  //   json: async () => joke
  // }));


  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
  
});

describe("testa botão de nova piada", () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  }

  const newJoke = {
    id: '7h3oJtrOfxc',
    joke: 'blablabla',
    status: 200,
  }

  
  it("ao renderizar a página, a primeira piada é exibida na tela e a função é chamda uma vez", async () => {

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(joke)}));

    render(<App /> );
    const renderedJoke= await screen.findByText('Whiteboards ... are remarkable.')
    expect(renderedJoke).toBeInTheDocument();
    expect(global.fetch).toBeCalledTimes(1);
})

  
  it ("ao clicar no botão uma nova piada aparece, a primeira piada não aparece a função foi chamada 2 vezes", async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(newJoke)}));

    render(<App />)
    const button = screen.getByTestId('buttonAdd');
    const newRenderedJoke= await screen.findByText('blablabla')
    const renderedJoke= screen.queryByText('Whiteboards ... are remarkable.')
    userEvent.click(button)
    expect(newRenderedJoke).toBeInTheDocument();
    expect(renderedJoke).not.toBeInTheDocument();
    expect(global.fetch).toBeCalledTimes(2);
  })
})
