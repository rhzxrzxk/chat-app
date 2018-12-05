import { connect } from 'react-redux';
import Post from '../components/Post';
import * as actions from '../actions/Post';
import moment from 'moment';

const mapStateToProps = (state) => ({
  post: state.post.post,
  posts: state.post.posts,
  currentUser: state.user.currentUser,
  currentImgFile:state.user.currentImgFile,
  imgFile:state.user.imgFile,
});

const mapDispatchToProps = dispatch => ({
  inputPost(post) {
    dispatch(actions.inputPost(post));
  },
  addPost(post, currentUser, currentImgFile, imgFile) {
    var m = moment();
    var mf = m.format("YYYY/MM/DD HH:mm");
    dispatch(actions.addPost(post, currentUser, currentImgFile, imgFile, mf));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
