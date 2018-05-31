import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "store/reducers/rootReducer";
import { decrement, increment, add } from "../store/actions/testActions";
import { ActionTypeFn } from "../store/actions";
import { Link } from "react-router-dom";
// import {History} from 'history';
import { reduxForm, InjectedFormProps, Field } from "redux-form";
import TextInput from "../common/form/TextInput";
import { compose } from "redux";
// import {Consumer as RouteConsumer} from '../common/MyRouter';
const actions = {
  decrement,
  increment,
  add
};
interface Customer {
  id: string;
  customerName: string;
  address: string;
}
// whatever props you may need from owner
interface OwnProps   {
  customerName: string;
}

// whatever props you may need from state
interface StateProps {
  data: number;
}

interface ActionProps {
  increment: ActionTypeFn;
  decrement: ActionTypeFn;
  add: ActionTypeFn<number>;
}

const mapProps = (state: AppState): StateProps => ({
  data: state.test.data
});

export interface Props extends  StateProps, ActionProps, InjectedFormProps<Customer> {}

class Layout extends React.Component<Props & OwnProps> {
  state = {
    value: 0
  };

  handleChange = (e: any) => {
    this.setState({ value: +e.target.value });
  };
  handleAddValue = (amount: number) => () => {
    const {add} = this.props;
    add(amount);
  };
  render() {
    const { data, increment, decrement } = this.props;
    return (
      <div>

        <Field name="customerName" component={TextInput} />
        <h1>{data}</h1>
        <button onClick={increment}>Increment</button>
        <Link to="/res/98">Link</Link>
        <button onClick={decrement}>Decrement</button>
        <input value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleAddValue(this.state.value)}>Add Value</button>
      </div>
    );
  }
}
export default compose(
  connect(mapProps, actions),
  reduxForm({ form: "someForm" })
)(Layout) as React.ComponentType<Partial<Props> & OwnProps>;
