import axios from 'axios'
import { loading, stopLoaing } from '../Loading/LoadingAction'
import { LOGIN, LOGOUT, REQUEST, REQEUST_FAILED } from './ActionTypes'

export const login = data => {
  return {
    type: LOGIN,
    payload: data,
  }
}

export const logout = () => {
  return {
    type: LOGOUT,
  }
}

export const request = () => {
  return {
    type: REQUEST,
  }
}

export const failed = error => {
  return {
    type: REQEUST_FAILED,
    payload: error,
  }
}

export const loginUser = data => {
  return dispatch => {
    dispatch(request())
    dispatch(loading())
    axios
      .post(`https://kurdchain.dastey2.com/api/login`, data, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then(response => {
        dispatch(login(response.data))
        localStorage.setItem('LoggedInUser', JSON.stringify(response.data))
        dispatch(stopLoaing())
      })
      .catch(error => {
        dispatch(failed(error))
        dispatch(stopLoaing())
        console.log(error)
      })
  }
}

export const logOutUser = token => {
  return dispatch => {
    dispatch(loading())
    localStorage.removeItem('LoggedInUser')
    axios.post(`https://kurdchain.dastey2.com/api/logout`, token)
    dispatch(logout())
    dispatch(stopLoaing())
  }
}
