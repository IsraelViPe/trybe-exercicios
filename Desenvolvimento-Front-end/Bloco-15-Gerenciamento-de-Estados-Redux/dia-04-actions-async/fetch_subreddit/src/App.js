import React, { Component } from 'react'
import { fetchFrontendSubreddit, fetchReactJsSubreddit } from './service/redditAPI'

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
    console.log(selectedTheme)
    console.log(  fetchReactJsSubreddit())
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

