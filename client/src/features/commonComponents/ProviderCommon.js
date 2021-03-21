import { createContext, useReducer } from 'react'

const initialState = { goals: [], trackingGoals: [], count: 0 }
export const store = createContext(initialState)
const { Provider } = store

// arr.reduce
// [1,2,3].reduce((a, b) => a + b, 10) // 16
const id = () => Math.random().toString() + '-' + Math.random().toString()

function goalReducer(state, action) {
  console.log(state, action)
  switch (action.type) {
    case 'ADD_GOAL':
      return {
        ...state,
        goals: [...state.goals, { id: id(), description: action.payload }],
        trackingGoals: [
          ...state.trackingGoals,
          { id: id(), description: action.payload },
        ],
        count: state.count + 1,
      }
    case 'REMOVE_Goal':
      const goalId = action.payload
      const newGoals = state.goals.filter((goal) => goal.id !== goalId)
      return {
        ...state,
        goals: newGoals,
        trackingGoals: newGoals,
        count: state.count - 1,
      }

    case 'CHECKED':
      const checked = state.goals.map((item) => {
        if (item.id === action.payload) {
          const newObj = { ...item, isComplete: !item.isComplete }
          return newObj
        }
        return item
      })
      return { ...state, goals: checked, trackingGoals: checked }
    case 'ACTIVE':
      const activeGoals = [
        ...state.goals.filter((goal) => goal.isComplete !== true),
      ]
      return { ...state, goals: activeGoals }

    case 'COMPLETED':
      const completedGoals = [
        ...state.GOALs.filter((goal) => goal.isComplete === true),
      ]
      return { ...state, goals: completedGoals }

    case 'ALL':
      const allGoals = { ...state, goals: [...state.trackingGoals] }
      return allGoals
    case 'CLEAR_COMPLETED':
      const clearCompleted = [
        ...state.goals.filter((goal) => goal.isComplete !== true),
      ]
      return { ...state, trackingGoals: clearCompleted, goals: clearCompleted }
    default:
      throw new Error()
  }
}

const StateProvider = ({ children }) => {
  // {type: 'ADD_GOAL', payload: 'hello'}
  const [state, dispatch] = useReducer(goalReducer, initialState)
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export default StateProvider
