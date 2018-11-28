import { connect } from 'react-redux';
import UserMgt from '../components/UserMgt';
import * as actions from '../actions/UserMgt';

const mapStateToProps = (state) => ({
  user: state.user_.user,
  pass: state.user_mgt.pass,
  imgUrl: state.user_mgt.imgUrl,
  users: state.user_mgt.users,
});

const mapDispatchToProps = dispatch => ({
  inputUser(user) {
    dispatch(actions.inputUser(user));
  },
  inputPass(pass) {
    dispatch(actions.inputPass(pass));
  },
  inputImgUrl(imgUrl) {
    dispatch(actions.inputImgUrl(imgUrl));
  },
  addUser(user, pass, imgUrl) {
    dispatch(actions.addUser(user, pass, imgUrl));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMgt);
