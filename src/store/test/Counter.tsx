import { PureComponent, ReactNode } from "react";
import { connect } from "react-redux";
import { CounterProps } from "store/features/counter";
import counterMap from "store/mappers/counter";

// IMPORTANT NOTE:
// So, results are good, it works with everything, you can wrap components, other dependencies, it works seamlessly.

class Counter extends PureComponent<CounterProps> {
  render(): ReactNode {
    return (
      <div>
        <button type="button" onClick={this.handleIncrement}>Increment</button>
        <button type="button" onClick={this.handleDecrement}>Decrement</button>
        <button type="button" onClick={this.handleIncrementByAmount}>Increment by 5</button>
        <button type="button" onClick={this.handleDecrementByAmount}>Decrement by 3</button>
      </div>
    );
  }

  handleIncrement = () => this.props.increment();
  handleDecrement = () => this.props.decrement();
  handleIncrementByAmount = () => this.props.incrementByAmount(5);
  handleDecrementByAmount = () => this.props.decrementByAmount(3);
}

const InjectedCounter = connect(counterMap.mapStateToProps, counterMap.mapDispatchProps)(Counter);

export default InjectedCounter;
