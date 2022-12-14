import { combineReducers } from "redux"
// combineReducers accepts an object where the key names will become the keys in our root state object, and the values are the slice reducer functions that know how to update those slices of the Redux state.

import todosReducer from "./features/todos/todosSlice"
import filtersReducer from "./features/todos/filtersSlice"

const rootReducer = combineReducers({
    // Define a top-level state field named `todos`, handled by `todosReducer`
    todos: todosReducer,
    filters: filtersReducer
})

export default rootReducer;

/** In this hand-written root reducer, for each slice reducer, the state owned by that reducer is passed in, and the result is assigned back to the root state object, if not for combineReducers, we would have to repeat this patttern */

// export default function rootReducer(state = {}, action){
//     // always return a new object for the root state
//     return{
//         // the value of `state.todos` is whatever the todos reducer returns

//         todos: todosReducer(state.todos, action),
//         // For both reducers, we only pass in their slice of the state

//         filters: filtersReducer(state.filters, action)
//     }
// }


/** This is the code before we sliced up our reducer
 
// Creating the root reducer
// We'll add some fake todo entries to get us started
const initialState = {
    todos: [
        {
            id: 0, text: 'Learn React', completed: true
        },
        {
            id: 1, text: 'Learn Redux', completed: false, color: 'purple'
        },
        {
            id: 2, text: 'Build something fun!', completed: false, color: 'blue'
        }
    ],
    filters: {
        status: 'All',
        colors: []
    }
}

// Use the initialState as a default value
export default function appReducer(state = initialState, action){
    switch(action.type){
        case 'todos/todoAdded': {
            // We should return a new state object
            return{
                // This object holds all the existing state data
                ...state,

                // However, it includes a new array for the `todos` field
                todos: [
                    // with all of the old todos
                    ...state.todos,
                    // plus the new todo object
                    {
                        // auto-increment ID
                        id: nextTodoId(state.todos),
                        text: action.payload,
                        completed: false
                    }
                ]
            }
        }
        case 'todos/todoToggled': {
            return{
                // Make a copy of the entire state object
                ...state,
                // We also need to make a copy of the old todos array
                todos: state.todos.map(todo =>{
                    // If not the todo item we're looking for, leave it alone
                    if (todo.id !== action.payload){
                        return todo
                    }

                    // When we'eve found the todo we want to change, return a copy:
                    return{
                        ...todo,
                        // Flip the completed flag
                        completed: !todo.completed
                    }
                })
            }
        }
        case 'filters/statusFilterChanged': {
            return{
                ...state,
                // Overwrite the filters value
                filters: {
                    // copy the other filter fields
                    ...state.filters,
                    // And replace the status field with the new value
                    status: action.payload
                }
            }
        }
        default:
            // When an action type is unrecognizable by our reducer or the reducer doesn't care about that specific action, return the existing state unchanged
            return state
    }
}


/** */