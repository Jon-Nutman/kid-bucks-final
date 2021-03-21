import { createSlice } from '@reduxjs/toolkit'
import request from '../../../utils/request'

export const goalSlice = createSlice({
  name: 'goal',
  initialState: {
    goals: []
  },
  reducers: {
    setGoals: (state, action) => {
      state.goals = action.payload
    }
  },
})

export const { setGoals } = goalSlice.actions

export const getGoals = () => async dispatch => {
  await request.get('/goals').then(resp => {
    console.log('%c FROM the GET request 👇', 'color: purple; font-size: 30px')
    dispatch(setGoals(resp.data))
  })
}

export const deleteGoal = (id) => async dispatch => {
  await request.delete('/api/goals/' + id)
  dispatch(getGoals())
}

export const updateGoalStatus = (id, status) => async dispatch => {
  const newStatus = status == 'completed' ? 'active' : 'completed'
  await request.patch('/api/goals/' + id, {status: newStatus})
  dispatch(getGoals())
}

// notice how I can use object shorthand to simplify sending up the same name!
export const updateGoalDescription = (id, title) => async dispatch => {
  alert(title)
  await request.patch('/api/goals/' + id, {title})
  dispatch(getGoals())
}

export const updateGoal = (id, status) => async dispatch => {
  await request.update('/api/goals/' + id, {status: status})
  dispatch(getGoals())
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectGoals = (state) => state.goal.goals

export default goalSlice.reducer
