import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import User from './containers/User';
import Post from './containers/Post';
import UserMgt from './containers/UserMgt';
import Logout from './components/Logout';
import Auth from './containers/Auth';

class App extends Component {
  render() {
    return(
      <div className="App">
      <Route exact path="/" component={User} />
      <Auth>
        <Switch>
          <Route path="/posts" component={Post} />
          <Route path="/user_mgt" component={UserMgt} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </Auth>
      </div>
    );
  }
}

export default App;
