import React from'react';
import { useSelector } from 'react-redux';
import TodoListItem from './TodoListItem';

// We want when the first time our component renders, useSelector will
// call selectTodos and pass in the entire Redux state object.
// An added advantage of useSelectro is that it automatically subscribes to the REdux
// store for us. 
// This way, when an action is dispatched, it calls the selector function again

const selectTodos = state => state.todos


const TodoList = () =>{
    // const todos = []
    const todos = useSelector(selectTodos)

    // Since `todos` is an array, we can loop over it

    const renderedListItems = todos.map((todo) =>{
        return <TodoListItem key={todo.id} todo={todo} />;
    })

    return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList;