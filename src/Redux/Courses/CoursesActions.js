import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SECCESS,
  FETCH_COURSES_FAILURE,
  FETCH_LATEST_COURSES_FAILURE,
  FETCH_LATEST_COURSES_REQUEST,
  FETCH_LATEST_COURSES_SECCESS,
} from './ActionTypes'
import axios from 'axios'

export const FetchCoursesRequest = () => {
  return {
    type: FETCH_COURSES_REQUEST,
  }
}

export const FetchCoursesSeccess = data => {
  return {
    type: FETCH_COURSES_SECCESS,
    payload: data,
  }
}

export const FetchCoursesFailure = error => {
  return {
    type: FETCH_COURSES_FAILURE,
    payload: error,
  }
}
export const FetchLatestCoursesRequest = () => {
  return {
    type: FETCH_LATEST_COURSES_REQUEST,
  }
}

export const FetchLatestCoursesSeccess = data => {
  return {
    type: FETCH_LATEST_COURSES_SECCESS,
    payload: data,
  }
}

export const FetchLatestCoursesFailure = error => {
  return {
    type: FETCH_LATEST_COURSES_FAILURE,
    payload: error,
  }
}

export const FetchCourses = () => {
  return dispatch => {
    dispatch(FetchCoursesRequest())

    axios
      .get(`https://kurdchain.dastey2.com/api/view/course`)
      .then(response => {
        dispatch(FetchCoursesSeccess(response.data.courses))
      })
      .catch(error => {
        dispatch(FetchCoursesFailure(error))
      })
  }
}
export const FetchLatestCourses = () => {
  return dispatch => {
    dispatch(FetchLatestCoursesRequest())

    axios
      .get(`https://kurdchain.dastey2.com/api/view/course`)
      .then(response => {
        dispatch(FetchLatestCoursesSeccess(response.data.courses))
      })
      .catch(error => {
        dispatch(FetchLatestCoursesFailure(error))
      })
  }
}
