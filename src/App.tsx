import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from 'material-ui/Button';

const  logo = require('./images/webpack-tuts.jpg');
import 'typeface-roboto';
const root = document.getElementById('app');
const App = () => (
  <div>
    <Button >Click here</Button>
    <h1>Welcome, 123</h1>
    <h1 className="san">Welcome, 123</h1>
    <img src={logo} style={{width:'200px'}} />
    
  </div>
);

export default () => ReactDOM.render(<App />, root);
