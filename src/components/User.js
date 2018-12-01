import React from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';

export default class User extends React.Component {

  render() {
    return(
      <div>
        <h2>新規</h2>
        <input type="text" placeholder="ユーザー名" onChange={(e) => this.props.inputUser(e.target.value)} />
        <input type="text" placeholder="パスワード" onChange={(e) => this.props.inputPass(e.target.value)} />
        <input type="text" placeholder="画像URL" onChange={(e) => this.props.inputImgUrl(e.target.value)} />
        <Link to="/posts">{<input type="button" value="登録！" onClick={() => this.props.addUser(this.props.user, this.props.pass, this.props.imgUrl, this.props.users)
        } />}</Link>

        <h2>ログイン</h2>
        <input type="text" placeholder="ユーザー名" onChange={(e) => this.props.inputUser(e.target.value)} />
        <input type="text" placeholder="パスワード" onChange={(e) => this.props.inputPass(e.target.value)} />
        <Link to="/posts">{<input type="button" value="ログイン！" onClick={() => this.props.loginUser(this.props.user, this.props.pass, this.props.users)} />}</Link>
      </div>
    );
  }
}
