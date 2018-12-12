import React from 'react';
import { Link } from 'react-router-dom';

var createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

export default class UserMgt extends React.Component {
  handleChangeFile = (e) => {
    var files = e.target.files;
    var image_url = createObjectURL(files[0]);
    this.props.inputImgFile(image_url);
  };

  render() {
    var deleteUser = (i) => {
      this.props.deleteUser(this.props.users, i, this.props.currentUser, this.props.currentImgFile);
    };

    return(
      <div style={{padding: 32}}>
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

        <h2 style={{marginTop: 48}}>ユーザー一覧</h2>

        {this.props.users.map(function(item, i) {
          if (i>0){
            return (
              <div style={{marginBottom: 36}}>
                <div>
                  <img src={item["imgFile"]} height="88"/>
                </div>
                <div>
                  {item["user"]}
                </div>
                <div>
                  {item["moment"]}
                </div>
                <Link to="/user_mgt">{<input type="button" value="削除" onClick={() => deleteUser(i)} />}</Link>
              </div>
            )
          }
        })}
        <Link to="/posts">{<input type="button" value="チャット" />}</Link>
        <Link to="/user_mgt">{<input type="button" value="ユーザー管理" />}</Link>
        <Link to="/logout">{<input type="button" value="ログアウト" />}</Link>
      </div>
    );
  }
}
