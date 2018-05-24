import { DECREMENT, INCREEMENT, ADD } from './action-types';
import { ActionType } from '../actions';
export const increment: ActionType = () => {
  return {
    type: INCREEMENT
  };
};

export const decrement: ActionType = () => {
  return {
    type: DECREMENT
  };
};

export const add: ActionType<number> = (payload: number) => {
  return {
    type: ADD,
    payload
  };
};
