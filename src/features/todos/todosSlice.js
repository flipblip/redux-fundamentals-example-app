
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
        default:
            return state
    }
}