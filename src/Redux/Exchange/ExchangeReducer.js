import {
  FETCH_EXCHANGE_REQUEST,
  FETCH_EXCHANGE_SECCESS,
  FETCH_EXCHANGE_FAILURE,
} from './ActionTypes'

const initialState = {
  loading: false,
  data: [],
  errors: [],
}

const EchangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXCHANGE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_EXCHANGE_SECCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case FETCH_EXCHANGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default EchangeReducer
