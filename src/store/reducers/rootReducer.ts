import { combineReducers } from 'redux';
import testReducer, { TestState } from './testReducer';
import { combineEpics } from 'redux-observable';
import { reducer as formReducer, FormStateMap } from 'redux-form';
import { routerReducer, RouterState } from 'react-router-redux';
import { testEpic } from './testEpic';

export interface AppState {
  form: FormStateMap;
  test: TestState;
  router: RouterState;
}

export const rootEpic = combineEpics(testEpic);

const rootReducer = combineReducers<any>({
  form: formReducer,
  test: testReducer,
  router: routerReducer
});

export default rootReducer;
