import { Observable } from 'rxjs';
import { mapTo, tap, filter } from 'rxjs/operators';
import { Action } from 'redux';
import { START_FETCH, INCREEMENT } from '../actions/action-types';


export const testEpic = (action$: Observable<Action>): Observable<Action> => {
  return action$.pipe(
    filter(c => c.type === START_FETCH),
    tap(x => console.log('from observable', x)),
    mapTo({ type: INCREEMENT })
  );
};
