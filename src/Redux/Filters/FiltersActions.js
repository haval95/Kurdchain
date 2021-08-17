import {
  FETCH_FILTERS_REQUEST,
  FETCH_FILTERS_SECCESS,
  FETCH_FILTERS_FAILURE,
} from './ActionTypes'
import axios from 'axios'

export const FetchFiltersRequest = () => {
  return {
    type: FETCH_FILTERS_REQUEST,
  }
}

export const FetchFiltersSeccess = data => {
  return {
    type: FETCH_FILTERS_SECCESS,
    payload: data,
  }
}

export const FetchFiltersFailure = error => {
  return {
    type: FETCH_FILTERS_FAILURE,
    payload: error,
  }
}

export const FetchFilters = () => {
  return dispatch => {
    dispatch(FetchFiltersRequest())

    axios
      .get(`https://kurdchain.dastey2.com/api/get/course/filter`)
      .then(response => {
        dispatch(FetchFiltersSeccess(response.data))
      })
      .catch(error => {
        dispatch(FetchFiltersFailure(error))
      })
  }
}
