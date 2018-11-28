import React from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';

export default class Logout extends React.Component {
  render() {
    return(
      <div>
        <h2>ログアウト</h2>
        <input type="button" value="ログアウト(トップ)！" />
        <Link to="/posts">{<input type="button" value="チャット！" />}</Link>
        <Link to="/user_mgt">{<input type="button" value="ユーザー管理！" />}</Link>
        <Link to="/logout">{<input type="button" value="ログアウト(ボトム)！" />}</Link>
      </div>
    );
  }
}
