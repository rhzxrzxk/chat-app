import { connect } from 'react-redux';
import Logout from '../components/Logout';
import * as actions from '../actions/User';

const mapStateToProps = (state) => state;

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(actions.logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
