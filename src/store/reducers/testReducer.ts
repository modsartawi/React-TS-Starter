import { INCREEMENT, DECREMENT, ADD } from '../actions/action-types';
import { createReducer } from '../common/reducer-util';

export interface TestState {
  data: number;
}

const initialState: TestState = {
  data: 43
};

export const incrementCounter = (state: TestState) => {
  return { ...state, data: state.data + 1 };
};

export const decrementCounter = (state: TestState) => {
  return { ...state, data: state.data - 1 };
};

export const addCounter = (state: TestState, payload: number): TestState => {
  return { ...state, data: state.data + payload };
};

export default createReducer(initialState, {
  [INCREEMENT]: incrementCounter,
  [DECREMENT]: decrementCounter,
  [ADD] :addCounter
});
