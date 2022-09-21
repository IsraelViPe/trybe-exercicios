

import React, { Component } from 'react'
import './App.css'


export default class App extends Component {


  state= {
    numeroDeCliques2: 0,
    numeroDeCliques3: 0
  }
 
  // com arrow function 
  msgPrint2 = () => {
   this.setState((bla,_props)=> ({
     numeroDeCliques2: bla.numeroDeCliques2 + 1 
    }))
    
  }
  msgPrint3 = (num) => {
    this.setState((x,_props) => ({
      numeroDeCliques3: x.numeroDeCliques3 + 1
    }))
  }
  getColor(num) {
    return num % 2 === 0 ? 'green': 'white';
  }

  render() {
    const {numeroDeCliques2,numeroDeCliques3} = this.state;
    console.log(numeroDeCliques3 % 2 === 0)
    return (
      <div>
        
        <button onClick={this.msgPrint2}
        style={{backgroundColor:this.getColor(numeroDeCliques2)}}
        >{`${this.getColor(numeroDeCliques2)} ${numeroDeCliques2}`}</button>
        <button onClick={() => this.msgPrint3(numeroDeCliques3)}>{numeroDeCliques3}</button>
      </div>
    )
  }
}
