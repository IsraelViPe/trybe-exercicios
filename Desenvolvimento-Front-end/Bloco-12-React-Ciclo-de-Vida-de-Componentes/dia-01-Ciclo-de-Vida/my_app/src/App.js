import React, { Component } from 'react'
import User from './components/User';

export default class App extends Component {
  state = {
    loading: true,
    userAPI : [],
  }
 
 async componentDidMount() {
    const request = await fetch('https://api.randomuser.me/')
    const response = await request.json();
    this.setState({
      userAPI: response.results,
      loading: false
    })
  }

  shouldComponentUpdate(_nextProps, nextState) {
   const AGE = 50;
    const {userAPI}= nextState
    const {dob:{age}}= userAPI[0]
    
    if(age < AGE) return true;
  }

  getUserElements(user) {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    };
  }
  render() {
    const LOAD = <p>Carregando</p>;
    
    const {loading, userAPI} = this.state
    
    return (
      <div>
        {  loading ? LOAD : <User 
        person={ this.getUserElements(userAPI[0])}/>   }
      </div>
    )
  }
}

