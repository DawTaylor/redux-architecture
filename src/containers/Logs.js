import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addLog, fetchLogs } from '../store/actions';

class Logs extends Component {
  render() {
    return <h1>logs list</h1>;
  }
}

const mapStateToProps = state => ({
  logs: state.logs,
});

export default connect(
  mapStateToProps,
  { addLog, fetchLogs }
)(Logs);
