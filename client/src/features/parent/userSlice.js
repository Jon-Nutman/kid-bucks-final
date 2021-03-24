import { createSlice } from '@reduxjs/toolkit'
import request from '../../utils/request'

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    children: [],
  },
  reducers: {
    setChildren: (state, action) => {
      state.children = action.payload
    },
  },
})

// when you set your action creating functions to
// feed the reducer you want to deconstruct those functions.

export const { setChildren } = userSlice.actions

export const getChildren = () => async (dispatch) => {
  const children = await request.get(`/users-children`)
  dispatch(setChildren(children.data))
}

export const addChild = (child) => async (dispatch) => {
  await request.post('/registration/child', child)
  dispatch(getChildren())
}

export const deleteChild = (childId) => async (dispatch) => {
  await request.delete('/users/child/' + childId)
  dispatch(getChildren())
}
export const selectChildren = (state) => state.users.children

export default userSlice.reducer
