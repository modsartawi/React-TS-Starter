import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'typeface-roboto';
import { configureStore } from './store/configureStore';
import Layout from './containers/Layout';
const root = document.getElementById('app');

const App = () => (
  <div>
   
    <Route path="/" render={ () => <Layout   /> } />
  </div>
);

const store = configureStore();

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export default () => ReactDOM.render(app, root);
