import {
  FETCH_PARTNERS_REQUEST,
  FETCH_PARTNERS_SECCESS,
  FETCH_PARTNERS_FAILURE,
} from './ActionTypes'

const initialState = {
  loading: false,
  data: [],
  errors: [],
}

const PartnersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PARTNERS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_PARTNERS_SECCESS:
      return {
        ...state,
        loading: false,
        data: { ...action.payload },
      }
    case FETCH_PARTNERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default PartnersReducer
