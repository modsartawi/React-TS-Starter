import * as React from 'react';
import { Route, Switch } from 'react-router';
import Loy from '../containers/Lay';
import { hot } from 'react-hot-loader';

 const App = hot(module)(() => (
  <Switch>
   
    <Loy     />
    <Route path="/:rootId" component={Loy} />
  </Switch>
));


export default App;