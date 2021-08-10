import {
  FETCH_PARTNERS_REQUEST,
  FETCH_PARTNERS_SECCESS,
  FETCH_PARTNERS_FAILURE,
} from './ActionTypes'
import axios from 'axios'

export const FetchPartnersRequest = () => {
  return {
    type: FETCH_PARTNERS_REQUEST,
  }
}

export const FetchPartnersSeccess = data => {
  return {
    type: FETCH_PARTNERS_SECCESS,
    payload: data,
  }
}

export const FetchPartnersFailure = error => {
  return {
    type: FETCH_PARTNERS_FAILURE,
    payload: error,
  }
}

export const FetchPartners = () => {
  return dispatch => {
    dispatch(FetchPartnersRequest())

    axios
      .get(`https://kurdchain.dastey2.com/api/view/partner`)
      .then(response => {
        let data = {
          ...response.data,
        }
        dispatch(FetchPartnersSeccess(data))
      })
      .catch(error => {
        dispatch(FetchPartnersFailure(error))
      })
  }
}
