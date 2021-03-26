import { createSlice } from '@reduxjs/toolkit'
import request from '../../../utils/request'

export const prizeCartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    total: 0,
    totalPoints: 0,
  },

  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes

    addPrizeToCart: (state, action) => {
      const prize = { ...action.payload }
      const foundPrize = state.cart.find((item) => item.id === prize.id)
      if (!foundPrize) {
        state.cart.push({ ...prize, quantity: 1 })
        state.total += 1
        state.totalPoints += prize.points
        console.log('test')
      } else {
        foundPrize.quantity = foundPrize.quantity + 1
        state.total += 1
        state.totalPoints += foundPrize.points
      }
      //   console.log(state.total);
      //   logger(state);
      // const logger=(v) =>consloe.log(JSON.parse(JSON.stringify(v)))
    },
    decrement: (state, action) => {
      const prize = { ...action.payload }
      const foundPrize = state.cart.find((item) => item.id == prize.id)
      foundPrize.quantity -= 1
      state.totalPoints -= prize.points
    },
    increment: (state, action) => {
      const prize = { ...action.payload }
      const foundPrize = state.cart.find((item) => item.id == prize.id)
      foundPrize.quantity += 1
      state.totalPoints += prize.points
    },
    removePrize: (state, action) => {
      const productToRemove = action.payload
      console.log(productToRemove)
      state.totalPoints -= productToRemove.points * productToRemove.quantity
      state.cart = state.cart.filter((item) => item.id != productToRemove.id)
    },
    clearCart: (state) => {
      state.cart = []
      state.total = 0
      state.totalPoints = 0
    },
  },
})

export const {
  addPrizeToCart,
  removePrize,
  decrement,
  increment,
  clearCart,
} = prizeCartSlice.actions

export const createTransactions = (cart) => async (dispatch) => {
  await request.post('/transactions', cart)
  dispatch(clearCart())
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// export const cartAsync = () => (dispatch) => {
//   setTimeout(() => {
//     dispatch(addCart());
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCart = (state) => state.prizeCart.cart
export const selectTotal = (state) => state.prizeCart.total
export const selectTotalPoints = (state) => state.prizeCart.totalPoints
// export const selectCartVisibility = (state) => state.cartV.cartVisibility;

export default prizeCartSlice.reducer
