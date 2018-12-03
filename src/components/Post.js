import React from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';

export default class Post extends React.Component {

  render() {
    return(
      <div>
        <h2>投稿する</h2>
        <img src={this.props.imgFile} width="128" height="128"/>
        <h3>{this.props.currentUser}</h3>
        <input type="text" value={this.props.post} onChange={(e) => this.props.inputPost(e.target.value)} />
        <input type="button" value="投稿" onClick={() => this.props.addPost(this.props.post, this.props.currentUser)
        } />
        <h2>投稿一覧</h2>
        <ul>
          {
            this.props.posts.map(function(item, i) {
              return (<li key={i}>{["投稿：", item["post"], "：投稿者：", item["currentUser"]]}</li>)
            })
          }
        </ul>
        <Link to="/posts">{<input type="button" value="チャット" />}</Link>
        <Link to="/user_mgt">{<input type="button" value="ユーザー管理" />}</Link>
        <Link to="/logout">{<input type="button" value="ログアウト" />}</Link>
      </div>
    );
  }
}
