import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropType from 'prop-types';

export default class Auth extends React.Component {
  render() {
    if (this.props.loginStatus === '1') {
      return this.props.children
    } else {
      return(
        <Redirect to="/" />
      )
    }
  }
}
