import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Store from './Store';
import './style.css';

const initialState = {
  count: 0
};

function updateState(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.amount };
    case 'DECREMENT':
      return { count: state.count - action.amount };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

const store = new Store(updateState, initialState);

const actionIncrement = { type: 'INCREMENT', amount: 1 };
const actionDecrement = { type: 'DECREMENT', amount: 1 };
const actionReset = { type: 'RESET' };

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }

  increment = () => {
    store.update(actionIncrement);
  }

  decrement = () => {
    store.update(actionDecrement);
  }

  reset = () => {
    store.update(actionReset);
  }

  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }



  render() {
    const { count } = store.state;
    return (
      <div className="counter">
        <div className="count">{count}</div>

        <div className="buttons">
          <div className="btn" onClick={this.decrement}>-</div>
          <div className="btn" onClick={this.reset}>reset</div>
          <div className="btn" onClick={this.increment}>+</div>
        </div>
      </div>
    );
  }
}
