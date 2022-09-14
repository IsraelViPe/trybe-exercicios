import React from "react";
import { render, screen } from '@testing-library/react'
import ValidEmail from "./components/ValidEmail";

test('Testando um componente, caso o email seja válido', () => {
    const EMAIL_USER = 'email@email.com';
    const wasSubmited = true; 
    render(<ValidEmail submit={wasSubmited} email={EMAIL_USER} />);
    const isValid = screen.getByText('Email Válido');
    expect(isValid).toBeInTheDocument();
})

test('testa se a mensagem só aparece depois que o email é submetido', () => {
    render(<ValidEmail email="" />);
    const isValidText = screen.queryByTestId('id-is-email-valid');
    expect(isValidText).not.toBeInTheDocument();
})

test('Testando um componente, caso o email seja inválido', () => {
    const EMAIL_USER = 'emailerrado';
    render(<ValidEmail email={EMAIL_USER} />);
    const isInvalid = screen.getByText('Email Inválido');
    expect(isInvalid).toBeInTheDocument();
})

test('Testa se quando o email for invalido a mensagem ficara vermelha', () => {
    const EMAIL_USER = 'emailerrado';
    render(<ValidEmail email={EMAIL_USER} />);
    const textMsg = screen.getByText('Email Inválido');
    expect(textMsg).toHaveAttribute('class', 'red');
})