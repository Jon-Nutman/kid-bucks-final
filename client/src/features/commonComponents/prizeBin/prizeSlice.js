import { createSlice } from '@reduxjs/toolkit'
import request from '../../../utils/request'

export const prizeSlice = createSlice({
  name: 'prize',
  initialState: {
    prizes: [],
  },
  reducers: {
    setPrizes: (state, action) => {
      state.prizes = action.payload
    },
    // state.prizes.push(newPrize)
  },
})

export const { setPrizes } = prizeSlice.actions

export const prizesAsync = (id) => (dispatch) => {
  request.get('/prize-bins/'+id).then((response) => {
    dispatch(setPrizes(response.data))
  })
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectPrizes = (state) => state.prize.prizes

export default prizeSlice.reducer
