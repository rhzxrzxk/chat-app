import { connect } from 'react-redux';
import Post from '../components/Post';
import * as actions from '../actions/Post';

const mapStateToProps = (state) => ({
  post: state.post.post,
  posts: state.post.posts,
  currentUser: state.user.currentUser,
  imgFile:state.user.imgFile,
});

const mapDispatchToProps = dispatch => ({
  inputPost(post) {
    dispatch(actions.inputPost(post));
  },
  addPost(post) {
    dispatch(actions.addPost(post));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
