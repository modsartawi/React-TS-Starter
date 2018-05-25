import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store/reducers/rootReducer';
// import { Dispatch } from 'redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { TestState } from '../store/reducers/testReducer';
import { increment, decrement } from '../store/actions/testActions';
import { ActionType } from '../store/actions';


export interface Props extends Partial<RouteComponentProps<void>> {
  test?: TestState;
  increment?: ActionType;
  decrement?: ActionType;
}

@connect(
  (state: AppState): Pick<Props, 'test'> => ({
    test: state.test
  }),
  (dispatch: Dispatch): Pick<Props, 'increment' | 'decrement'> =>
    bindActionCreators({ increment, decrement }, dispatch)
)
class Lay extends React.Component<Props> {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.test!.data}</h1>
        <button onClick={this.props.increment} />
      </div>
    );
  }
}

export default Lay;
