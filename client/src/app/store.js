import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'
import usersReducer from '../features/users/usersSlice'
import authReducer from '../features/auth/auth'
import goalReducer from '../features/commonComponents/goals/goalSlice'
import prizeReducer from '../features/commonComponents/prizeBin/prizeSlice'

export default configureStore({
  reducer: {
    // counter: counterReducer,
    users: usersReducer,
    auth: authReducer,
    goal: goalReducer,
    prize: prizeReducer,
  },
})
