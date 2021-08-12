import {
  FETCH_SIGNALS_REQUEST,
  FETCH_SIGNALS_SECCESS,
  FETCH_SIGNALS_FAILURE,
} from './ActionTypes'

const initialState = {
  loading: false,
  data: [],
  errors: [],
}

const SignalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SIGNALS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_SIGNALS_SECCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case FETCH_SIGNALS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default SignalsReducer
