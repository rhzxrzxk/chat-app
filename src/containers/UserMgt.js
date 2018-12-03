import { connect } from 'react-redux';
import UserMgt from '../components/UserMgt';
import * as actions from '../actions/User';

const mapStateToProps = (state) => ({
  user: state.user_mgt.user,
  pass: state.user_mgt.pass,
  imgFile: state.user_mgt.imgFile,
  users: state.user_mgt.users,
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
    if (existing(user, users) == true) {
      dispatch(actions.denyRegistration());
    } else {
      dispatch(actions.allowRegistration(user, pass, imgFile));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMgt);
