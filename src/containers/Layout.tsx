import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from 'store/reducers/rootReducer';
import { decrement, increment, add } from '../store/actions/testActions';
import { ActionType } from '../store/actions';
import { withRouter, RouteComponentProps } from 'react-router-dom';


const mapProps = (state: RootState) => ({
  data: state.test.data
});

const actions = {
  decrement,
  increment,
  add
};

export interface Props extends RouteComponentProps<any> {
  data: number;
  increment: ActionType;
  decrement: ActionType;
  add : ActionType<number>;
}

class Layout extends React.Component<Props , {}> {
  state = {
    value : 0
  }

  handleChange = (e:any) => {
    this.setState({value: +e.target.value})
  }
  handleAddValue = () => {
    const {add} = this.props;
    add(this.state.value);
  }
  render() {
    console.log(this.props);
    const { data, decrement, increment } = this.props;
    return (
      <div>
        <h1>{data}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <input value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleAddValue}>Add Value</button>
      </div>
    );
  }
}

export default withRouter( connect(mapProps, actions)(Layout));
