import { PureComponent, ReactNode } from "react";
import { connect, Provider } from "react-redux";
import { CounterProps } from "store/features/counter";
import counterMap from "store/mappers/counter";
import store from "store/Redux-store";
import Counter from "store/test/Counter";

class App extends PureComponent<CounterProps> {
  render(): ReactNode {
    return (
      <Provider store={store}>
        <h1>React Redux Application</h1>
        <p>Counter value: {this.props.value}</p>
        <Counter />
      </Provider>
    );
  }
}

const InjectedApp = connect(counterMap.mapStateToProps, counterMap.mapDispatchProps)(App);

export default InjectedApp;