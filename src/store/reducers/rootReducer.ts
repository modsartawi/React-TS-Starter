import { combineReducers } from 'redux';
import testReducer, { TestState } from './testReducer';
import {reducer as formReducer,  FormStateMap} from 'redux-form';
import { routerReducer, RouterState } from 'react-router-redux';

export interface AppState {
  form: FormStateMap
  test : TestState;
  router: RouterState

}

const rootReducer  = combineReducers<any>({
  form: formReducer,
  test: testReducer,
  router: routerReducer 
})

export default rootReducer