import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
// const initialRoute: RouteComponentProps<{} | null> = {
//   history: {  length: 0,
//     action: 'PUSH',
//     location: {},
//     push : void
//     },
//   location: {},
//   match: {},
//   staticContext: {}
// };
const context = React.createContext<Partial<RouteComponentProps<{}>>>({});
const Provider = context.Provider;
class MyRouter extends React.Component<RouteComponentProps<{}>> {
  render() {
    const { history, location, match, staticContext, children } = this.props;
    return (
      <Provider value={{ history, location, match, staticContext }}>
        {children}
      </Provider>
    );
  }
}
export const Consumer = context.Consumer;
export default withRouter(MyRouter);
