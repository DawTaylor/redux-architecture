import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { authWithGoogle, authLogout } from '../store/actions';

class Login extends Component {
  render() {
    const { authWithGoogle, authLogout } = this.props;
    return (
      <Fragment>
        <h1>Login</h1>
        <button type="button" onClick={authWithGoogle}>
          Fazer login com google
        </button>
        <button type="button" onClick={authLogout}>
          Fazer logout
        </button>
      </Fragment>
    );
  }
}

Login.propTypes = {
  authWithGoogle: PropTypes.func.isRequired,
};

export default connect(
  null,
  { authWithGoogle, authLogout }
)(Login);
