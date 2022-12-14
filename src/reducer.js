
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
        default:
            // When an action type is unrecognizable by our reducer or the reducer doesn't care about that specific action, return the existing state unchanged
            return state
    }
}

// Next, we'll add the 'todos/todoAdded' action logic