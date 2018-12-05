import React from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';

export default class Logout extends React.Component {
  render() {
    return(
      <div style={{marginTop: 48, padding: 32}}>
        <h2>ログアウト</h2>
        <div style={{padding: 64}}>
          <Link to="/">{<input type="button" value="ログアウト" onClick={() => this.props.logout()} />}</Link>
        </div>
        <Link to="/posts">{<input type="button" value="チャット" />}</Link>
        <Link to="/user_mgt">{<input type="button" value="ユーザー管理" />}</Link>
        <Link to="/logout">{<input type="button" value="ログアウト" />}</Link>
      </div>
    );
  }
}
