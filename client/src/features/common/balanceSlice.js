import { createSlice } from '@reduxjs/toolkit'
import request from '../../utils/request'

export const balance = createSlice({
  name: 'balance',
  initialState: {
    balance: [],
  },
  reducers: {
    setBalance: (state, action) => {
      state.balance = action.payload
    },
  },
})

export const { setBalance } = balance.actions

export const getBalanceByChildid = (childId) => async (dispatch) => {
  await request.get('/prize-bins/' + childId).then((response) => {
    dispatch(setBalance(response.data.balance))
    console.log(response.data)
  })
}

export const selectBalance = (state) => state.balance.balance

export default transaction.reducer