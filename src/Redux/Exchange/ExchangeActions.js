import {
  FETCH_EXCHANGE_REQUEST,
  FETCH_EXCHANGE_SECCESS,
  FETCH_EXCHANGE_FAILURE,
} from './ActionTypes'
import axios from 'axios'

export const FetchEchangeRequest = () => {
  return {
    type: FETCH_EXCHANGE_REQUEST,
  }
}

export const FetchEchangeSeccess = data => {
  return {
    type: FETCH_EXCHANGE_SECCESS,
    payload: data,
  }
}

export const FetchEchangeFailure = error => {
  return {
    type: FETCH_EXCHANGE_FAILURE,
    payload: error,
  }
}

export const FetchEchange = () => {
  return dispatch => {
    dispatch(FetchEchangeRequest())

    axios
      .get(`https://kurdchain.dastey2.com/api/exchange`)
      .then(response => {
        dispatch(FetchEchangeSeccess(response.data.exchange))
      })
      .catch(error => {
        dispatch(FetchEchangeFailure(error))
      })
  }
}
