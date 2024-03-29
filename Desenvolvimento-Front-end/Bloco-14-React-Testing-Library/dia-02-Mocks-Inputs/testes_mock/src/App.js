import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state= {
      joke: '',
    }

    this.fetchJoke = this.fetchJoke.bind(this);
  }

  componentDidMount() {
    this.fetchJoke()
  }

  handleClick = () => {
     this.fetchJoke()
  }

  fetchJoke() {
    const API_URL = 'https://icanhazdadjoke.com/';
    const REQUEST_CONFIG = {headers: { Accept: 'application/json'}}
    fetch(API_URL, REQUEST_CONFIG)
    .then((response) => response.json())
    .then((data) => this.setState({
      joke: data.joke
    }));
  }

  render() {
    const { joke } = this.state;
    return (
      <div>
        <p>{joke}</p>
        <button
        data-testid= "buttonAdd"
        onClick={ this.handleClick }
        type='button'>
          New Joke
        </button>
      </div>
    )
  }
}

