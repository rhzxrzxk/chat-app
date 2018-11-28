import { connect } from 'react-redux';
import User from '../components/User';
import * as actions from '../actions/User';

const mapStateToProps = (state) => ({
  user: state.user.user,
  pass: state.user.pass,
  imgUrl: state.user.imgUrl,
  users: state.user.users,
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

export default connect(mapStateToProps, mapDispatchToProps)(User);
