import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store/reducers/rootReducer';
// import { Dispatch } from 'redux';
import format from 'date-fns/format';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { TestState } from '../store/reducers/testReducer';
import { increment, decrement } from '../store/actions/testActions';
import { ActionType } from '../store/actions';
 
import {reduxForm,  InjectedFormProps, Field} from 'redux-form';
 

import DateInput from '../common/form/DateInput';
import {combineValidators, isRequired} from 'revalidate';
export interface Props extends Partial<RouteComponentProps<void>>, InjectedFormProps<{}> {
  test?: TestState;
  increment?: ActionType;
  decrement?: ActionType;
}


const validate = combineValidators({
  myDate : isRequired({message:"where is the date"})
})
 

@connect(
  (state: AppState): Pick<Props, 'test'> => ({
    test: state.test
  }),
  (dispatch: Dispatch): Pick<Props, 'increment' | 'decrement'> =>
    bindActionCreators({ increment, decrement }, dispatch)
)
class Lay extends React.Component<Props > {
  render() {
    
    return (
      <div>
         <p>{format(new Date(), 'YYYY-MM-dd hh:mm a')}</p> 
        <Field component={DateInput} name="myDate" />
        <h1>{this.props.test!.data}</h1>
        <button onClick={this.props.increment} />
      </div>
    );
  }
}

export default reduxForm({form:"customerForm", validate})( Lay );
