import Store from './Store'

const actionIncrement = { type: 'INCREMENT', amount: 5 };
const actionDecrement = { type: 'DECREMENT', amount: 2 };

function updateState(state, action) {
  if (action.type === 'INCREMENT') {
    return {
      count: state.count + action.amount
    }
  }

  if (action.type === 'DECREMENT') {
    return {
      count: state.count - action.amount
    }
  }

  return state;
}

const initialState = {
  count: 1
};

export const store = new Store(updateState, initialState);

const unsubscribe = store.subscribe(() => console.log('state changed subscribe 1', store.state));

store.subscribe(() => console.log('state changed subscribe 2', store.state))

// console.log('state', store.state);
// console.log('state', store.state);
// console.log('state', store.state);

store.update(actionIncrement);
console.log('-- --');
unsubscribe();
store.update(actionDecrement);
console.log('-- --');
store.update(actionDecrement);

