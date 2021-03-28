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

    // Function for when the child adds a prize from the array displayed 
    // on the PrizesList Component

    addPrizeToCart: (state, action) => {
      const prize = { ...action.payload }
      const foundPrize = state.cart.find((item) => item.id === prize.id)
      if (!foundPrize) {
        state.cart.push({ ...prize, quantity: 1 })
        state.total += 1
        state.totalPoints += prize.points
      } else {
        foundPrize.quantity = foundPrize.quantity + 1
        state.total += 1
        state.totalPoints += foundPrize.points
      }

    },

    // Actions for items once they are in the cart on the PrizeCart Component:

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

    // this clears the cart once the child submits their order in PrizeCart.js
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

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCart = (state) => state.prizeCart.cart
export const selectTotal = (state) => state.prizeCart.total
export const selectTotalPoints = (state) => state.prizeCart.totalPoints
// export const selectCartVisibility = (state) => state.cartV.cartVisibility;

export default prizeCartSlice.reducer
