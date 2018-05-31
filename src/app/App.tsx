import * as React from 'react';
import { Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import Loy2 from '../containers/Loy2';

 const App = hot(module)(() => (
  <Switch>
   
    <Loy2 customerName="Sartawi"/>


    {/* <Loy     />
    <Route path="/:rootId" component={Loy} /> */}
  </Switch>
));


export default App;