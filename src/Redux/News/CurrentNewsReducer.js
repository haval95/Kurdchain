import {
  FETCH_CURRENTNEWS_FAILURE,
  FETCH_CURRENTNEWS_REQUEST,
  FETCH_CURRENTNEWS_SECCESS,
} from './ActionTypes'

const initialState = {
  loading: false,
  currentNews: {},
  errors: {},
}

const CurrentNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENTNEWS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_CURRENTNEWS_SECCESS:
      return {
        ...state,
        loading: false,
        currentNews: action.payload,
      }
    case FETCH_CURRENTNEWS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default CurrentNewsReducer
