import { connect } from 'react-redux';
import Auth from '../components/Auth';
import * as actions from '../actions/User';

const mapStateToProps = (state, ownProps) => ({
  children: ownProps.children,
  loginStatus: state.user.loginStatus,
});

export default connect(mapStateToProps)(Auth);
