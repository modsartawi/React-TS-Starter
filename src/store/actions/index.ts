export interface ActionType<T  = {}> {
    ( payload: T) : {type:string, payload?: T }
} 