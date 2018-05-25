import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import {routerMiddleware} from 'react-router-redux';
import { History } from 'history';
import rootReducer from './reducers/rootReducer'

export const configureStore = (history: History, preloadedState? : any) => {
  const middlewares :any[] = [routerMiddleware(history)] ;
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewareEnhancer];

  const composedEnhancer  = composeWithDevTools(...storeEnhancers);

  const store = createStore(
    rootReducer,
    preloadedState,
    composedEnhancer
  )


  if (process.env.NODE_ENV !== 'production') {
    const hotModule  = module as any;

    if (hotModule['hot'] ) {
      hotModule['hot'].accept('./reducers/rootReducer', () => {
        const newRootReducer = require('./reducers/rootReducer').default;
        store.replaceReducer(newRootReducer)
      })
    }
  }

  return store;
}