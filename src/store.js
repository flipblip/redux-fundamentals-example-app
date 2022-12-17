import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import { print1, print2, print3 } from "./exampleAddons/middleware";
import { loggerMiddleware } from "./exampleAddons/enhancers";
import { delayedMessageMiddleware } from "./exampleAddons/enhancers";
// import { sayHiOnDispatch,
//         includeMeaningOfLife
// } from "./exampleAddons/enhancers"

// The createStore API will create the store.
// It will additionally import createStore and the root reducer, then, call createStore and pass in the root reducer
// const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)
// const store = createStore(rootReducer, undefined, composedEnhancer);

// let preloadedState
// const persistedTodosString = localStorage.getItem('todos')

// if (persistedTodosString){
//     preloadedState = {
//         todos: JSON.parse(persistedTodosString)
//     }
// }

const middlewareEhancer = applyMiddleware(print1, print2, print3, loggerMiddleware, delayedMessageMiddleware)




// Pass the enhancer as the second arg, since there's no preloadedState
const store = createStore(rootReducer, middlewareEhancer);

console.log('Dispatching an action to store')
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' });
console.log('Dispatch complete')

// We can also pass preloadedState value as the createStore's second argument.
// This can be used to add data when the store is created. e.g., valuses included in a HTML page from the server, or values persisted in localStorage when the user revisits the page.

// const store = createStore(rootReducer, preloadedState)

export default store;