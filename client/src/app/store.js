import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'
// import usersReducer from '../features/users/usersSlice'
import authReducer from '../features/auth/auth'
import goalReducer from '../features/common/goalSlice'
import prizeReducer from '../features/common/prizeSlice'
import transactionReducer from '../features/common/transactionSlice'
import usersReducer from '../features/parent/userSlice'
import prizeCartReducer from '../features/commonComponents/prizeBin/prizeCartSlice'

export default configureStore({
  reducer: {
    // counter: counterReducer,
    users: usersReducer,
    auth: authReducer,
    goal: goalReducer,
    prize: prizeReducer,
    prizeCart: prizeCartReducer,
    transaction: transactionReducer,
  },
})
