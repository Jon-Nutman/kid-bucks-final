import { createSlice } from '@reduxjs/toolkit'

export const prizeSlice = createSlice({
  name: 'prize',
  initialState: {
    prizes: []
  },
  reducers: {
    addPrize: (state, action) => {
      const newPrize = {
        id: Math.random(),
        description: action.payload,
        completed: false
      }
      state.prizes.push(newprize)
    }
  },
})

export const { addprize } = prizeSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectprizes = (state) => state.prize.prizes

export default prizeSlice.reducer
