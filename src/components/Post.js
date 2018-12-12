import React from 'react';
import { Link } from 'react-router-dom';

export default class Post extends React.Component {

  render() {
    return(
      <div style={{padding: 32}}>
        <h2>投稿する</h2>
        <img src={this.props.currentImgFile} height="88"/>
        <h3>{this.props.currentUser}</h3>
        <input type="text" value={this.props.post} onChange={(e) => this.props.inputPost(e.target.value)} />
        <input type="button" value="投稿" onClick={() => this.props.addPost(this.props.post, this.props.currentUser, this.props.currentImgFile, this.props.imgFile)
        } />
        <h2 style={{marginTop: 48}}>投稿一覧</h2>
        {this.props.posts.map(function(item, i) {
          if (i>0){
            return (
              <div style={{marginBottom: 36}}>
                <div>
                  <img src={item["currentImgFile"]} height="88"/>
                </div>
                <div>
                  {item["currentUser"]}
                </div>
                <div>
                  {item["post"]}
                </div>
                <div>
                  {item["moment"]}
                </div>
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
