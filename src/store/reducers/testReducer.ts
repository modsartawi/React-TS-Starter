import { INCREEMENT, DECREMENT } from '../actions/action-types';
import { createReducer } from '../common/reducer-util';

export interface TestState {
  data : number;
}

const initialState : TestState = {
  data: 43
};

export const incrementCounter = (state : TestState, payload:any) => {
  return { ...state, data: state.data + 1 };
}

export const decrementCounter = (state:TestState, payload:any) => {
  return { ...state, data: state.data - 1 };
}


export default createReducer(initialState, {
  [INCREEMENT]: incrementCounter,
  [DECREMENT]: decrementCounter
});
