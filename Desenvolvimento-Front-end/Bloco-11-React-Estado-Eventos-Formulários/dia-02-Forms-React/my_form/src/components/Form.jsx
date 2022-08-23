import React, { Component } from 'react'
import TextField from './TextField';

export default class Form extends Component {
  state = {
    texto : '',
    coisas : '',
    name : '',
    idade: 0,
    funciona: false,
    formularioComErros: false
  }

  handleChange = ({target}) => {
    const {name} = target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({[name] : value},
      () => { this.handleError();
    })
  }
  handleError = () => {
    const {idade, name} = this.state;
    if(!name || idade < 0) {
      this.setState({formularioComErros: true})
    }
  }
    render() {
    return (
      <div className='forms'>Form
        <label>
            Diga alguma coisa
            <textarea 
            name="texto"
            value={this.state.texto}
            onChange={this.handleChange} cols="30" rows="10"></textarea>
        </label>
        <label >
            Selicione a coisa
            <select 
            value={this.state.coisa} 
            onChange={this.handleChange}  
            name="coisas" >
                <option value="uma coisa" >uma coisa</option>
                <option value="outra coisa" >outra coisa</option>
            </select>
        </label>
        <TextField 
        title="nome"
        value={this.state.name}
        onChange={this.handleChange}
        type="text"
        name='name'
        
        />
        <TextField
        title="idade"
        value={this.state.idade}
        name="idade"
        type="number"
        onChange={this.handleChange}
        
        />
        <label>
            funciona 
            <input type="checkbox" 
            name="funciona" 
            onChange={this.handleChange} 
            value={this.state.funciona} />
        </label>

      </div>
    )
  }
}
