import { createSlice } from '@reduxjs/toolkit'
import request from '../../utils/request'

export const goalSlice = createSlice({
  name: 'goal',
  initialState: {
    goals: [],
    children: [],
  },
  reducers: {
    setGoals: (state, action) => {
      state.goals = action.payload
    },
    setChildren: (state, action) => {
      state.children = action.payload
    },
  },
})

// when you set your action creating functions to
// feed the reducer you want to deconstruct those functions.

export const { setGoals, setChildren } = goalSlice.actions

// these functions dispatch actions.  Get requests to the backend, etc. to be called in the Components.

export const getGoalsByChildId = (childId) => async (dispatch) => {
  const goalsArray = await request.get(`/goals/${childId}`)
  dispatch(setGoals(goalsArray.data))
}

export const addGoal = (goal) => async (dispatch) => {
  await request.post('/goals', goal)
  dispatch(getGoalsByChildId(goal.child_id))
}

export const getChildren = () => async (dispatch) => {
  const children = await request.get(`/users-children`)
  dispatch(setChildren(children.data))
}

export const updateGoalStatusById = (goalId, childId, status) => async (
  dispatch
) => {
  const statusChecked = status ? 'reported' : 'not_started'
  await request.patch(`/goals/${goalId}`, { status: statusChecked })
  dispatch(getGoalsByChildId(childId))
}

export const deleteGoalById = (goalId, childId) => async (dispatch) => {
  await request.delete(`/goals/${goalId}`)
  dispatch(getGoalsByChildId(childId))
}
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectGoals = (state) => state.goal.goals
export const selectChildren = (state) => state.goal.children

export default goalSlice.reducer
