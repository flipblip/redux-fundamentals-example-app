import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducer";

// The createStore API will create the store.
// It will additionally import createStore and the root reducer, then, call createStore and pass in the root reducer

let preloadedState
const persistedTodosString = localStorage.getItem('todos')

if (persistedTodosString){
    preloadedState = {
        todos: JSON.parse(persistedTodosString)
    }
}

// We can also pass preloadedState value as the createStore's second argument.
// This can be used to add data when the store is created. e.g., valuses included in a HTML page from the server, or values persisted in localStorage when the user revisits the page.

const store = createStore(rootReducer, preloadedState)

export default store;