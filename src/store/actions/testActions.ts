import {DECREMENT, INCREEMENT} from './action-types';
import {ActionType} from '../actions';
export const  increment : ActionType = () => {
    return {
        type: INCREEMENT
    }
}

export const  decrement = () => {
    return {
        type: DECREMENT
    }
}