import React, { Component } from 'react'
import MyContext from '../../context/MyContext'

export default class Daugther extends Component {
    state={
        howMuch: '',
    }

    handleChange = ({target: {value}}) => {
        this.setState({
            howMuch: value,
        })
    }
  render() {
    const { howMuch } = this.state;
    
    return (
      <div>
        <h4>Eu sou a Filha</h4>
        <MyContext.Consumer>
            {
                value => (
                    <div>
                        <p>{`eu tenho ${value.money} para gastar`}</p>
                        <button
                                type="button"
                                onClick={() => value.spent(Number(howMuch))}>Gastar</button>
                    </div>
                )
            }
        </MyContext.Consumer>
       
        <input
        onChange={ this.handleChange }
        type="number"
        name="howMuch"
        value={ howMuch }
        />
      </div>
    )
  }
}
