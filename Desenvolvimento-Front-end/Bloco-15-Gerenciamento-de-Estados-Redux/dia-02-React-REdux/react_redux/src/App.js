import React, { Component } from 'react'
import {addEmail} from './redux/action'
import { connect } from 'react-redux'

export class App extends Component {
  state = {
    emailLocal : '',
  }
  handleChange = ({target:{name, value}}) => {
    this.setState({[name]: value})
  }
  handleClick = () => {
   const {emailLocal} = this.state;
   const { dispatch} = this.props;
   dispatch(addEmail(emailLocal))
  }
  render() {
    const { emailGlobal } = this.props;
    return (
      <div>
        <h1>{emailGlobal}</h1>
        <label htmlFor='email'>
          <input
          onChange={this.handleChange}
          type="text"
          name='emailLocal'
          id='email'>

          </input>
          <button
          type='button'
          onClick={ this.handleClick}
          >Salvar</button>
        </label>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  emailGlobal: state.login.emailGlobal
})

export default connect(mapStateToProps)(App);