import React, { Component } from "react";
import ValidEmail from "./components/ValidEmail";
import '../src/App.css';

export default class App extends Component {
  state = {
    email: "",
    saveEmail: "",
    submit: false,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      email: value,
      submit: false,
    });
  };

  handleClick = () => {
    this.setState({
      saveEmail: this.state.email,
      email: "",
      submit: true,
    });
  };
  // handleClick = () => {
  //   this.setState({
  //     submit: false,
  //   })

  // }
  render() {
    const { saveEmail, email, submit } = this.state;
    return (
      <div>
        <header>
          <h1>RLT - introdução </h1>
        </header>
        <form>
          <label htmlFor="email">
            Email
            <input
              id="email"
              onChange={this.handleChange}
              name="email"
              value={email}
              type="email"
            />
          </label>
          <button
            onClick={this.handleClick}
            data-testid="button"
            type="button"
            value="Enviar"
          >
            Enviar
          </button>
          <button type="button">Voltar</button>
        </form>
        <ValidEmail  
        email={saveEmail} />
      </div>
    );
  }
}
