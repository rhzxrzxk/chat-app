import { connect } from 'react-redux';
import UserMgt from '../components/UserMgt';
import * as actions from '../actions/User';
import moment from 'moment';

const mapStateToProps = (state) => ({
  user: state.user.user,
  pass: state.user.pass,
  imgFile: state.user.imgFile,
  users: state.user.users,
  currentUser: state.user.currentUser,
  loginStatus: state.user.loginStatus,
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
  deleteUser(users, i, currentUser) {
    if (users[i]["user"] === currentUser) {
      users.splice(i, 1);
      const nextUsers = users;
      dispatch(actions.deleteMe(nextUsers));
    } else {
      users.splice(i, 1);
      const nextUsers = users;
      dispatch(actions.deleteOthers(nextUsers));
    }
  },
  addUser(user, pass, imgFile, users) {
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
    if (existing(user, users) === true) {
      dispatch(actions.denyRegistration());
    } else {
      var m = moment();
      var mf = m.format("YYYY/MM/DD HH:mm");
      dispatch(actions.allowRegistration(user, pass, imgFile, mf));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMgt);
