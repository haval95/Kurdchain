import {
  FETCH_SIGNALS_REQUEST,
  FETCH_SIGNALS_SECCESS,
  FETCH_SIGNALS_FAILURE,
} from './ActionTypes'
import axios from 'axios'

export const FetchSignalsRequest = () => {
  return {
    type: FETCH_SIGNALS_REQUEST,
  }
}

export const FetchSignalsSeccess = data => {
  return {
    type: FETCH_SIGNALS_SECCESS,
    payload: data,
  }
}

export const FetchSignalsFailure = error => {
  return {
    type: FETCH_SIGNALS_FAILURE,
    payload: error,
  }
}

export const FetchSignals = () => {
  return dispatch => {
    dispatch(FetchSignalsRequest())

    axios
      .get(`https://kurdchain.trade/app/api/signal`)
      .then(response => {
        dispatch(FetchSignalsSeccess(response.data))
      })
      .catch(error => {
        dispatch(FetchSignalsFailure(error))
      })
  }
}
