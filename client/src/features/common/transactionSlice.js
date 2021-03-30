import { createSlice } from '@reduxjs/toolkit'
import request from '../../utils/request'

export const transaction = createSlice({
  name: 'transaction',
  initialState: {
    transactions: [],
    balance: 0,
    deduction: 0,
  },
  reducers: {
    setTransactions: (state, action) => {
      state.transactions = action.payload
    },
    setBalance: (state, action) => {
      state.balance = action.payload
    },
    setDeduction: (state, action) => {
      state.deduction = action.payload
    },
  },
})

export const { setTransactions, setBalance, setDeduction } = transaction.actions

export const getTransactions = (childId) => async (dispatch) => {
  await request.get('/transactions/' + childId).then((response) => {
    dispatch(setTransactions(response.data))
    console.log(response.data)
  })
}
export const getBalanceByChildId = (childId) => async (dispatch) => {
  await request.get('/balance/' + childId).then((response) => {
    dispatch(setBalance(response.data.balance))
    dispatch(setDeduction(response.data.deduction))
  })
}

export const approveTransaction = (transactionId, childId) => async (
  dispatch
) => {
  await request.patch('/transactions/' + transactionId, { status: 'approved' })
  dispatch(getTransactions(childId))
}
export const denyTransaction = (transactionId, childId) => async (dispatch) => {
  await request.patch('/transactions/' + transactionId, { status: 'denied' })
  dispatch(getTransactions(childId))
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTransactions = (state) => state.transaction.transactions
export const selectBalance = (state) => state.transaction.balance
export const selectDeduction = (state) => state.transaction.deduction

export default transaction.reducer
