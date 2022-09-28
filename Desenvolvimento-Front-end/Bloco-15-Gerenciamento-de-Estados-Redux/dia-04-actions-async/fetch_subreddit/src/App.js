import React, { Component } from 'react'

export default class App extends Component {
  state = {
    selectedTheme : '',
  }
  handleChange = ({target:{value}}) => {
    console.log(value)
     this.setState({
      selectedTheme: value,
     }) 
  }
  render() {
    const { selectedTheme } = this.state;
    
    return (
      <div>
        <h1>Tema Selecionado : { selectedTheme } </h1>
        <select 
        onChange={ this.handleChange}
        name='selectedtheme'>
          <option value="reactjs">reactjs</option>
          <option value="frontend">frontend</option>
        </select>
      </div>
    )
  }
}

