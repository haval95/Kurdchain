import * as ACTIONS from './ActionTypes'
import axios from 'axios'

export const FetchUserCoursesRequest = () => {
  return {
    type: ACTIONS.FETCH_CURRENT_USER_COURSES_REQUEST,
  }
}

export const FetchUserCoursesSeccess = data => {
  return {
    type: ACTIONS.FETCH_CURRENT_USER_COURSES_SUCCESS,
    payload: data,
  }
}

export const FetchUserCoursesFailure = error => {
  return {
    type: ACTIONS.FETCH_CURRENT_USER_COURSES_FAILURE,
    payload: error,
  }
}

export const FetchUserCourses = token => {
  return dispatch => {
    dispatch(FetchUserCoursesRequest())

    axios
      .get(`https://kurdchain.dastey2.com/api/get/courses`, token)
      .then(response => {
        dispatch(FetchUserCoursesSeccess(response.data))
      })
      .catch(error => {
        dispatch(FetchUserCoursesFailure(error))
      })
  }
}
