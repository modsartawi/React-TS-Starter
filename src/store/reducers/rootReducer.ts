import { combineReducers } from 'redux';
import testReducer, { TestState } from './testReducer';


export interface RootState {
  test : TestState;

}

const rootReducer = combineReducers({
  test: testReducer
})

export default rootReducer