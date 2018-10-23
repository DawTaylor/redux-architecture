import { logsRef } from '../../firebase';

import { FETCH_LOGS } from '../types';

export const fetchLogs = () => async dispatch => {
  logsRef.on('value', snapshot => {
    dispatch({
      type: FETCH_LOGS,
      payload: snapshot.val(),
    });
  });
};

export const addLog = log => async dispatch => {
  logsRef.push().set(log);
  dispatch(fetchLogs());
};
