import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from 'store/reducers/rootReducer';
import { decrement, increment } from '../store/actions/testActions';
import { ActionType } from '../store/actions';
import { withRouter, RouteComponentProps } from 'react-router-dom';
const mapProps = (state: RootState) => ({
  data: state.test.data
});

const actions = {
  decrement,
  increment
};

export interface Props extends RouteComponentProps<any> {
  data: number;
  increment: ActionType;
  decrement: ActionType;

}

class Layout extends React.Component<Props , {}> {
  render() {
    console.log(this.props);
    const { data, decrement, increment } = this.props;
    return (
      <div>
        <h1>{data}</h1>
        <button onClick={increment}>Add</button>
        <button onClick={decrement}>Minus</button>
      </div>
    );
  }
}

export default withRouter( connect(mapProps, actions)(Layout));
