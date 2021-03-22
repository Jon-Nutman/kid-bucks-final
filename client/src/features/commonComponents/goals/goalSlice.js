import { createSlice } from '@reduxjs/toolkit'
import request from '../../../utils/request'

export const goalSlice = createSlice({
  name: 'goal',
  initialState: {
    goals: [],
  },
  reducers: {
    setGoals: (state, action) => {
      state.goals = action.payload
    },
  },
})

console.log(goalSlice)

// when you set your action creating functions to
// feed the reducer you want to deconstruct those functions.

export const { setGoals } = goalSlice.actions

// these functions dispatch actions.  Get requests to the backend, etc. to be called in the Components.

export const getGoalsByChildId = (childId) => async (dispatch) => {
  const goalsArray = await request.get(`/goals/${childId}`)
  dispatch(setGoals(goalsArray.data))
}

export const deleteGoalById = (goalId, childId) => async (dispatch) => {
  await request.delete(`/goals/${goalId}`)
  dispatch(getGoalsByChildId(childId))
}
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectGoals = (state) => state.goal.goals

export default goalSlice.reducer
