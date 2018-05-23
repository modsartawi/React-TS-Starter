
export const createReducer = (initialState : any, fnMap : any)  => {
    return (state = initialState, {type , payload}:any) : any => {
      const handler = fnMap[type];
  
      return handler ? handler(state, payload): state
    }
  }