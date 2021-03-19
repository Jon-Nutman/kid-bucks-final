import { createSlice } from '@reduxjs/toolkit'

// const obj = {
//   title: todoTitle,
//   description: todoDescription,
//   deadline: '01-20-2020',
//   points: todoPoints,
//   status: 'not_started',
//   parent_id: 1,
//   child_id: 2,
// }

export const goalSlice = createSlice({
  name: 'goal',
  initialState: {
    goals: [],
  },
  reducers: {
    addGoal: (state, action) => {
      const newGoal = {
        id: Date.now(),
        description: action.payload,
        completed: false,
      }
      state.goals.push(newGoal)
    },
  },
})

console.log(goalSlice)

export const { addGoal } = goalSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectGoals = (state) => state.goal.goals

export default goalSlice.reducer
