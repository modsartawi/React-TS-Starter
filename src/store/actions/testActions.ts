import { DECREMENT, INCREEMENT, ADD, START_FETCH } from './action-types';
import { ActionTypeFn } from '../actions';
export const increment: ActionTypeFn = () => {
  return {
    type: INCREEMENT
  };
};

export const decrement: ActionTypeFn = () => {
  return {
    type: DECREMENT
  };
};

export const add: ActionTypeFn<number> = (payload: number) => {
  return {
    type: ADD,
    payload
  };
};


export const startFetch : ActionTypeFn = () => {
  return {
    type: START_FETCH
  }
}
