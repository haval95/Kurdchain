import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SECCESS,
  FETCH_COURSES_FAILURE,
  FILTER_DATA,
  FILTER_ERROR,
  REMOVE_FILTER_ERROR,
  CLOSE_FILTER_OPTIONS_MOBILE,
  OPEN_FILTER_OPTIONS_MOBILE,
} from './ActionTypes'
import axios from 'axios'

export const FilteringData = data => {
  return {
    type: FILTER_DATA,
    payload: data,
  }
}
export const FilterError = () => {
  return {
    type: FILTER_ERROR,
  }
}
export const openFilterOptions = () => {
  return {
    type: OPEN_FILTER_OPTIONS_MOBILE,
  }
}
export const closeFilterOptions = () => {
  return {
    type: CLOSE_FILTER_OPTIONS_MOBILE,
  }
}
export const RemoveFilterError = () => {
  return {
    type: REMOVE_FILTER_ERROR,
  }
}
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

export const FetchCourses = () => {
  return dispatch => {
    dispatch(FetchCoursesRequest())

    axios
      .get(`https://kurdchain.trade/app/api/courses`)
      .then(response => {
        dispatch(FetchCoursesSeccess(response.data.courses))
      })
      .catch(error => {
        dispatch(FetchCoursesFailure(error))
      })
  }
}
