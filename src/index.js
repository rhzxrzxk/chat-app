import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import createBrowserHistory from 'history/createBrowserHistory';
import createStore from './createStore';

import App from './App';

//historyのインスタンスを生成して、storeを作成する
const history = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
  //Providerを用いて、ストアをReactのcontextに渡す。
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
