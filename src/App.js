import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import User from './containers/User';
import Post from './containers/Post';
import UserMgt from './containers/UserMgt'

class App extends Component {
  render() {
    return(
      <div className="App">
        <User />
        <Route path="/posts" component={Post} />
        <Route path="/user_mgt" component={UserMgt} />
      </div>
    );
  }
}

export default App;
