import React, { Component } from 'react'
import Daugther from './Daugther'

export default class Father extends Component {
  render() {
    return (
      <div>
        <h3>EU sou o Pai</h3>
        <Daugther  />
      </div>
    )
  }
}
