
// We're creating a new featruued folder, adding a todos folder inside, so that we can decalre all todo-related initial state over into the todosSlice.js file
// tThs slice file will contain all the reducer logic and all the actions realted to this part of the app's state
const initialState = [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
]

function nextTodoId(todos){
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}

export default function todosReducer(state = initialState, action){
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
        case 'todos/colorSelected': {
            return{
                ...state,
            }
        }
        default:
            return state
    }
}