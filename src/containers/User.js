import { connect } from 'react-redux';
import User from '../components/User';
import * as actions from '../actions/User';

const mapStateToProps = (state) => ({
  loginStatus: state.user.loginStatus,
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
  addUser(user, pass, imgUrl, users) {
    const existing = (p, ps) => {
      let bool
      for (var i=0; i<ps.length; i++) {
        if (ps[i]["user"] === p) {
          bool = true;
          break;
        }
        bool = false;
      }
      return bool;
    }
    if (existing(user, users) == true) {
      dispatch(actions.denyRegistration());
    } else {
      dispatch(actions.allowRegistration(user, pass, imgUrl));
    }
  },
  loginUser(user, pass, users) {
    const existing = (p, q, ps) => {
      let bool
      for (var i=0; i<ps.length; i++) {
        if (ps[i]["user"] === p && ps[i]["pass"] === q) {
          bool = true;
          break;
        }
        bool = false;
      }
      return bool;
    }
    if (existing(user, pass, users) == true) {
      dispatch(actions.allowLogin());
    } else {
      dispatch(actions.denyLogin());
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
