import React, { Component } from 'react'
import { connect } from 'react-redux'

export class RedditList extends Component {
    
  render() {
    
    return (
      <div>
        <h2>Subreddits encontrados</h2>
        <ul>

        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    subredditList: state.reducer.subreddit,
    errorMessage: state.reducer.error
})

export default connect (mapStateToProps)(RedditList);

