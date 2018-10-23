import { createStore, applyMiddleware, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as reducers from './reducers';
import { Auth } from './middleware/auth';
import { authCheck } from './actions';

export default (initialState, browserHistory) => {
  const rootReducer = combineReducers(reducers);
  const routerMW = routerMiddleware(browserHistory);

  const store = createStore(
    connectRouter(browserHistory)(rootReducer),
    initialState,
    composeWithDevTools(applyMiddleware(routerMW, reduxThunk, Auth))
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(combineReducers('./reducers'));
    });
  }

  store.dispatch(authCheck());

  return store;
};
