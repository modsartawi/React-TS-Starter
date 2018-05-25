import { Observable } from 'rxjs';
import { mapTo, tap, map, filter } from 'rxjs/operators';
import {ActionType} from '../actions';
import { START_FETCH, INCREEMENT } from '../actions/action-types';



export const testEpic = (action$: Observable<ActionType>): Observable<ActionType> => {
  return action$.pipe(
    filter(c => c.type === START_FETCH),
    map(x => {console.log(x);return x; } ),
    tap(x => console.log('from observable', x)),
  
    mapTo({ type: INCREEMENT })
  );
};
