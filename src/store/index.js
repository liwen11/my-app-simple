import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'

function countReducer(state = 0, action) {
  console.log(state, action)
  switch(action.type) {
    case 'ADD': 
      return state + 1;
    case 'MINUS':
      return state - 1
    default: 
      return state
  }
}

function loginReducer(state = false, action) {
  switch(action.type) {
    case 'LOGIN': 
      return true;
    case 'LOGOUT':
      return false
    default: 
      return false
  }
}

const store = createStore(loginReducer, applyMiddleware(thunk))
export default store