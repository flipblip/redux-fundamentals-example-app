import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { print1, print2, print3 } from "./exampleAddons/middleware";
import { loggerMiddleware } from "./exampleAddons/enhancers";
import { delayedMessageMiddleware } from "./exampleAddons/enhancers";


const composedEnhancer = composeWithDevTools(
        applyMiddleware()
)

const store = createStore(rootReducer, composedEnhancer)

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

// const middlewareEhancer = composeWithDevTools(applyMiddleware(print1, print2, print3, loggerMiddleware, delayedMessageMiddleware))




// Pass the enhancer as the second arg, since there's no preloadedState
// const store = createStore(rootReducer, middlewareEhancer);

// console.log('Dispatching an action to store')
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' });
// console.log('Dispatch complete')

// We can also pass preloadedState value as the createStore's second argument.
// This can be used to add data when the store is created. e.g., valuses included in a HTML page from the server, or values persisted in localStorage when the user revisits the page.

// const store = createStore(rootReducer, preloadedState)

export default store;



//      SUMMARY:

        //- Redux apps always have a single store
                // - You create a store with the REdux createStore API
                // - Every store will have a single root reducer function
        //- Stores have three main methods
                // - getState, which returns the current state
                // - dispatch, sends an action to the reducer, effectively updatinng the state
                // - subscribe, takes a listener callback that runs each time an action is dispatched
        //- Store enhancers will let us customize the store when its created
                // - Enhancers wrap the store and can override its emthdos
                // - createStore accepts one enhancer as an argument
                // - Multiple enhancers can be merged together using the compose API
        //- Middleware are the main way to customize the store
                // - You apply middleware using the applyMiddleware method enhancer
                // - Middleware are written as three nested fucntions inside each toher
                // - Middlware run each time an action is dispatched
                // - Can have side effects inside
        //- Redux DevTools monitors an app's state changes over time