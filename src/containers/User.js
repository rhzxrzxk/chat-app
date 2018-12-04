import { connect } from 'react-redux';
import User from '../components/User';
import * as actions from '../actions/User';
import moment from 'moment';

const mapStateToProps = (state) => ({
  loginStatus: state.user.loginStatus,
  user: state.user.user,
  pass: state.user.pass,
  users: state.user.users,
  imgFile: state.user.imgFile,
  userMsg: state.user.userMsg,
  userValidation: state.user.userValidation,
  passMsg: state.user.passMsg,
  passValidation: state.user.passValidation
});

const mapDispatchToProps = dispatch => ({
  inputImgFile(imgFile) {
    dispatch(actions.inputImgFile(imgFile));
  },
  inputUser(user) {
    dispatch(actions.inputUser(user));
  },
  inputPass(pass) {
    dispatch(actions.inputPass(pass));
  },
  addUser(user, pass, imgFile, users, userMsg, passMsg, userValidation, passValidation) {
    const existing = (p, ps) => {
      let eBool
      for (var i=0; i<ps.length; i++) {
        if (ps[i]["user"] === p) {
          eBool = true;
          break;
        }
        eBool = false;
      }
      return eBool;
    }

    if (existing(user, users) == false && userValidation == false && passValidation == false) {
      var m = moment();
      var mf = m.format("YYYY/MM/DD HH:mm");
      dispatch(actions.allowRegistration(user, pass, imgFile, mf));
    } else {
      dispatch(actions.denyRegistration());
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
    if (existing(user, pass, users) === true) {
      dispatch(actions.allowLogin(user));
    } else {
      dispatch(actions.denyLogin());
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
