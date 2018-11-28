import React from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';

export default class UserMgt extends React.Component {
  render() {
    return(
      <div>
        <h2>新規</h2>
        <input type="text" placeholder="ユーザー名" onChange={(e) => this.props.inputUser(e.target.value)} />
        <input type="text" placeholder="パスワード" onChange={(e) => this.props.inputPass(e.target.value)} />
        <input type="text" placeholder="画像URL" onChange={(e) => this.props.inputImgUrl(e.target.value)} />
        <input type="button" value="登録ボタン！" onClick={() => this.props.addUser(this.props.user, this.props.pass, this.props.imgUrl)
        } />

        <h2>ユーザー一覧</h2>
        <ul>
          {
            this.props.users.map(function(item, i) {
              return (
                <div>
                  <li key={i}>ユーザー名：{item["user"]}</li>
                  <li key={i}>パスワード：{item["pass"]}</li>
                  <li key={i}>画像URL：{item["imgUrl"]}</li>
                </div>
              )
            })
          }
        </ul>
        <Link to="/posts">{<input type="button" value="チャット！" />}</Link>
        <Link to="/user_mgt">{<input type="button" value="ユーザー管理！" />}</Link>
      </div>
    );
  }
}
