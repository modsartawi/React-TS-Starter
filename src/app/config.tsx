import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { configureStore } from '../store/configureStore';
import {rootEpic} from '../store/reducers/rootReducer'
import App from './App';
import 'typeface-roboto';

const root = document.getElementById('app');

 
const history = createBrowserHistory();

const store = configureStore(history, rootEpic);

const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

export default () => ReactDOM.render(app, root);
