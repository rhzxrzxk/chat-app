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
      <div style={{marginTop: 48, padding: 32}}>
        <h2>新規登録</h2>
        <div>
          <input type="text" placeholder="ユーザー名" onChange={(e) => this.props.inputUser(e.target.value)} />
        </div>
        <div>
          <h6>{this.props.userMsg}</h6>
        </div>
        <div>
          <input type="password" placeholder="パスワード" onChange={(e) => this.props.inputPass(e.target.value)} />
        </div>
          <h6>{this.props.passMsg}</h6>
        <div>
          <input type="file" onChange={this.handleChangeFile} />
        </div>
        <div>
          <Link to="/posts">{<input type="button" value="新規登録" onClick={() => this.props.addUser(this.props.user, this.props.pass, this.props.imgFile, this.props.users, this.props.userMsg, this.props.passMsg, this.props.userValidation, this.props.passValidation)} />}</Link>
        </div>

        <h2 style={{marginTop: 48}}>ログイン</h2>
        <div>
          <input type="text" placeholder="ユーザー名" onChange={(e) => this.props.inputUser(e.target.value)} />
        </div>
        <div>
          <input type="password" placeholder="パスワード" onChange={(e) => this.props.inputPass(e.target.value)} />
        </div>
        <div>
          <Link to="/posts">{<input type="button" value="ログイン" onClick={() => this.props.loginUser(this.props.user, this.props.pass, this.props.users)} />}</Link>
        </div>
      </div>
    );
  }
}
