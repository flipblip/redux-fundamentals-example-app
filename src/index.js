import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './store'

import './api/server'
import { Provider } from 'react-redux'

// // Log the initial state
// console.log('Initial state: ', store.getState())

// // {todos: [....], filters: {status, colors}}
// // We want to log it every time the state changes
// // We'll use the subscribe() which returns a function for unregistering the listener
// const unsubscribe = store.subscribe(() =>
//   console.log('State after dispatch: ', store.getState())
// )

// // We'll now dispatch some actions

// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions'})
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers'})
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn redux store'})

// store.dispatch({ type: 'todos/todoToggled', payload: 0})
// store.dispatch({ type: 'todos/todoToggled', payload: 1})

// store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Active'})

// store.dispatch({
//   type: 'filters/colorFilterChanged',
//   payload: { color: 'red', changeType: 'added'}
// })

// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions'})

// console.log('State after dispatch: ', store.getState())
// // Stop listening to state updates

// unsubscribe()

// // Dispatch one more action to see what happens

// store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store'})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
