import React, { Component } from 'react'

export default class User extends Component {
  render() {
    const {person: {name, email, age, image}} = this.props
    return (
        // renderizado exibindo foto, nome, email e idade do usuário.

      <div>
        <p>{name}</p>
        <p>{email}</p>
        <p>{age}</p>
        <img src={image} alt={name} />
      </div>
    )
  }
}
