import React from 'react';
import PropType from 'prop-types';

export default class Post extends React.Component {

  render() {
    return(
      <div>
        <h2>投稿する</h2>
        <input type="text" onChange={(e) => this.props.inputPost(e.target.value)} />
        <input type="button" value="投稿！" onClick={() => this.props.addPost(this.props.post)
        } />
        <h2>投稿一覧</h2>
        <ul>
          {
            this.props.posts.map(function(item, i) {
              return (<li key={i}>{item}</li>)
            })
          }
        </ul>

      </div>
    );
  }
}
