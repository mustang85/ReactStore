import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './redux';
import './style.css';

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
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

const store = createStore(reducer, initialState);

const actionIncrement = (amount) => ({ type: 'INCREMENT', amount });
const actionDecrement = (amount) => ({ type: 'DECREMENT', amount });
const actionReset = () => ({ type: 'RESET' })

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }

  increment = () => {
    const amount = parseInt(this.inputAmout.value, 10);
    store.dispatch(actionIncrement(amount));
  }

  decrement = () => {
    const amount = parseInt(this.inputAmout.value, 10);
    store.dispatch(actionDecrement(amount));
  }

  reset = () => {
    store.dispatch(actionReset());
  }

  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }



  render() {
    const { count } = store.getState();
    return (
      <div className="counter">
        <div className="count">{count}</div>

        <div className="buttons">
          <div className="btn" onClick={this.decrement}>-</div>
          <div className="btn" onClick={this.reset}>reset</div>
          <div className="btn" onClick={this.increment}>+</div>
        </div>

        <input className="input-txt" type="text" ref={(amount) => this.inputAmout = amount } defaultValue="1"/>

      </div>
    );
  }
}
