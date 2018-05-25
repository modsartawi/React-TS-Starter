export interface ActionType<T = {}> {
  type: string;
  payload?: T;
}
export interface ActionTypeFn<T = {}> {
  (payload: T):ActionType<T>;
}
