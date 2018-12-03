import React from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';

var createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

export default class User extends React.Component {
  handleChangeFile = (e) => {
    var files = e.target.files;
    var image_url = createObjectURL(files[0]);
    this.props.inputImgFile(image_url);
  }

  render() {
    return(
      <div>
        <h2>新規登録</h2>
        <input type="text" placeholder="ユーザー名" onChange={(e) => this.props.inputUser(e.target.value)} />
        <input type="text" placeholder="パスワード" onChange={(e) => this.props.inputPass(e.target.value)} />
        <input type="file" onChange={this.handleChangeFile} />
        <Link to="/posts">{<input type="button" value="新規登録" onClick={() => this.props.addUser(this.props.user, this.props.pass, this.props.imgFile, this.props.users)
        } />}</Link>

        <h2>ログイン</h2>
        <input type="text" placeholder="ユーザー名" onChange={(e) => this.props.inputUser(e.target.value)} />
        <input type="text" placeholder="パスワード" onChange={(e) => this.props.inputPass(e.target.value)} />
        <Link to="/posts">{<input type="button" value="ログイン" onClick={() => this.props.loginUser(this.props.user, this.props.pass, this.props.users)} />}</Link>
      </div>
    );
  }
}
