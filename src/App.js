import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import User from './containers/User';
import Post from './containers/Post';

class App extends Component {
  render() {
    return(
      <div className="App">
        <User />
        <Route path="/posts" component={Post} />
      </div>
    );
  }
}

export default App;
