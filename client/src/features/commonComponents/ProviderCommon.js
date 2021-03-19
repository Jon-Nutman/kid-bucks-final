import { createContext, useReducer } from "react"

const initialState = { todos: [],trackingTodos: [], count: 0 }
export const store = createContext(initialState)
const { Provider } = store

// arr.reduce
// [1,2,3].reduce((a, b) => a + b, 10) // 16
const id = () => Math.random().toString() + "-" + Math.random().toString()

function todoReducer(state, action) {
  console.log(state, action)
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { id: id(), description: action.payload }],
        trackingTodos: [...state.trackingTodos, { id: id(), description: action.payload }],
        count: state.count + 1,
      }
    case "REMOVE_TODO":
      const todoId = action.payload
      const newTodos = state.todos.filter((todo) => todo.id !== todoId)
      return { ...state,
         todos: newTodos,
        trackingTodos: newTodos, 
        count: state.count - 1
     }

    case "CHECKED":
      const checked = state.todos.map((item) => {
        if (item.id === action.payload) {
          const newObj = { ...item, isComplete: !item.isComplete }
          return newObj
        }
        return item
      })
      return { ...state, 
        todos: checked, 
        trackingTodos : checked
    }
    case "ACTIVE":
        const activeTodos = [...state.todos.filter((todo) => todo.isComplete !== true),
        ]
        return {...state, todos: activeTodos}

    case "COMPLETED":
      const completedTodos = [
        ...state.todos.filter((todo) => todo.isComplete === true),
      ]
      return { ...state, todos: completedTodos }

    case "ALL":
        const allTodos = {...state, todos:[...state.trackingTodos] }
      return allTodos
    case "CLEAR_COMPLETED":
        const clearCompleted = [...state.todos.filter((todo) => todo.isComplete !== true),
        ]
        return {...state, trackingTodos: clearCompleted, todos: clearCompleted}
    default:
      throw new Error()
  }
}

const StateProvider = ({ children }) => {
  // {type: 'ADD_TODO', payload: 'hello'}
  const [state, dispatch] = useReducer(todoReducer, initialState)
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export default StateProvider
