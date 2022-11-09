import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from "./App";


describe("tela de inserção de email", () => {
  test("Verifica se existe um input de email na tela", () => {
    render(<App />);
    const inputEmail = screen.getByLabelText("Email");

    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe("email");
    expect(inputEmail).toHaveProperty("type", "email");
    //acessar os elemento da tela

    //interagir com os elementos (se for necessário)

    //fazer os testes
  });

  test("Verifica se existe 2 botões na tela", () => {
    //acessar os elemento da tela
    render(<App />);
    const buttons = screen.getAllByRole("button");

    // getAllByRole me retorna um array com todos o elementos que desempenham tal papel

    //fazer os testes
    expect(buttons).toHaveLength(2);
  });

  test('Verifica se existe o botão de "Enviar"', () => {
    //acessar os elemento da tela
    render(<App />);
    const button = screen.getByTestId("button");

    // getByTestId me permite localizar expecificamente o elemento que eu espero que esteja sendo renderizado

    //fazer os testes
    expect(button).toBeInTheDocument();
    expect(button).toHaveValue("Enviar");
  });

  test("Verifica que ao digitar o email e clicar em enviar o email é renderizado", () => {
    //acessar os elemento da tela
    render(<App />);
    const inputEmail = screen.getByLabelText("Email");
    const button = screen.getByTestId("button");
    const userEmail = screen.getByTestId("emailText");

    //interagir com os elementos (se for necessário)
    // preciso importar o userEvent para testar o comportamento da App

    userEvent.type(inputEmail, "teste@teste.com");
    //configurei uma interação do tipo type (digitação) com o valor 'teste@teste.com', simulando a iteração de um usuário real

    userEvent.click(button); //evento de click setado

    //fazer os testes
    expect(inputEmail).toHaveValue("");
    expect(userEmail).toHaveTextContent("Email: teste@teste.com");
  });
  //não sei porque não está passando retorna 
  //  TypeError: Cannot read properties of undefined (reading 'type')
});
