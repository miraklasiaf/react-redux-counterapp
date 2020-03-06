const redux = require('redux')
const createStore = redux.createStore;

// State
const initialState = {
    counter: 0
}

// Reducers || Immutable
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'INCREMENT' : return { 
            ...state, 
            counter: state.counter + 1
        }
        case 'ADD' : return { 
            ...state, 
            counter: state.counter + action.value 
        }
        default: 
            return state;
    }
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription || dont manually get state
store.subscribe(() => {
    console.log('| Subscription |', store.getState())
})

// Dispatching Action
store.dispatch({ type: 'INCREMENT'});
store.dispatch({ type: 'ADD', value: 10 });
console.log(store.getState());