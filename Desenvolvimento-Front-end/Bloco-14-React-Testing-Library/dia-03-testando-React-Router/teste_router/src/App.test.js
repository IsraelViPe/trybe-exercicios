import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';


describe('testa aplicação toda' , () => {
  
  it('deve renderizar o componente App', () => {
    renderWithRouter(<App />);
    const homeTitle = screen.getByRole('heading', {
      name: 'Você está na página Início',
    });
    expect(homeTitle).toBeInTheDocument();
  });
  
  it('deve renderizar o componente Sobre', () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', {
      name: /sobre/i
    })
    expect(aboutLink).toBeInTheDocument();
   userEvent.click(aboutLink);
   const aboutTitle = screen.getByRole('heading', {
    name: /você está na página sobre/i
  })
   expect(history.location.pathname).toBe('/about');
   expect(aboutTitle).toBeInTheDocument();
  })
})

it('deve testar um caminho não existente e a renderização do Not Found', () => {
  const {history} = renderWithRouter(<App />);

  act(() => {
    history.push('/pagina/que-nao-existe');
  })
  const notFoundTitle = screen.getByRole('heading', {
    name: /página não encontrada/i
  })
  expect(notFoundTitle).toBeInTheDocument();
})

it ('deve renderizar o componente About (apenas componente)', () => {
  renderWithRouter(<About />);

  const aboutTitle = screen.getByRole('heading',
    { name: 'Você está na página Sobre' });
  expect(aboutTitle).toBeInTheDocument();
})

// posso testar o About passando pelo App usando o history