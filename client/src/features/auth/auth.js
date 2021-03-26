// 1. imports
import { useSelector, useDispatch } from 'react-redux'
import request, { AuthService, Storage } from '../../utils/request'

// 2. action definitions
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS'
const LOGIN_PENDING = 'auth/LOGIN_PENDING'
const LOGOUT = 'auth/LOGOUT'

// 3. initial state
const initialState = {
  example: '',
  // on load get if user is authenticated
  isAuthenticated: AuthService.isAuthenticated(),
  pending: false,
}

// 4. reducer
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return { ...state, pending: true }
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true, pending: false }
    case LOGOUT:
      return { ...state, isAuthenticated: false, pending: false }
    default:
      return state
  }
}

function loginUser(username, password) {
  return (dispatch) => {
    return request.login(username, password).then((resp) => {
      console.log('testing')
      dispatch({
        type: LOGIN_SUCCESS,
      })
      return resp
    })
  }
}

function logoutUser() {
  return (dispatch) => {
    return request.logout().then((resp) => {
      dispatch({
        type: LOGOUT,
      })
    })
  }
}

function signupUser(username, password) {
  return (dispatch) => {
    return request.signup(username, password).then((resp) => {
      dispatch({
        type: LOGOUT,
      })
    })
  }
}

// 6. custom hook
export function useAuth() {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(
    (appState) => appState.auth.isAuthenticated
  )
  const login = (username, password) => dispatch(loginUser(username, password))
  const signup = (username, password) =>
    dispatch(signupUser(username, password))
  const logout = () => dispatch(logoutUser())
  const testProtected = () => request.get('/dashboard')
  const user = AuthService.getUser()
  const decodeUser = (token) => AuthService.decodeTokenPayload(token)
  return {
    login,
    logout,
    signup,
    isAuthenticated,
    testProtected,
    user,
    decodeUser,
  }
}
