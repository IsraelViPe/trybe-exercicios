import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RedditList } from './RedditList'
import { fetchRedditAPI } from './redux/actions'

export class App extends Component {
  state = {
    selectedTheme : '',
    loading: false,
  }
  handleChange = ({target:{value}}) => {
    const { dispatch } = this.props;
     this.setState({
      selectedTheme: value,
      loading: true,
     }, () => {
      const { selectedTheme } = this.state;
      dispatch(fetchRedditAPI(selectedTheme))
      this.setState({loading: false})
     }) 
  }
  render() {
    const { selectedTheme, loading } = this.state;
    
    return (
      <div>
        <h1>Tema Selecionado : { selectedTheme } </h1>
        <select 
        onChange={ this.handleChange}
        name='selectedtheme'>
          <option value="reactjs">reactjs</option>
          <option value="frontend">frontend</option>
        </select>
        <button>Atualizar</button>
        <RedditList />
      </div>
    )
  }
}


export default connect ()(App)