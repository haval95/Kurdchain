import {
  FETCH_FILTERS_REQUEST,
  FETCH_FILTERS_SECCESS,
  FETCH_FILTERS_FAILURE,
} from './ActionTypes'

const initialState = {
  loading: false,
  type: [],
  language: [],
  instructor: [],
  errors: [],
}

const FiltersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILTERS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_FILTERS_SECCESS:
      return {
        ...state,
        loading: false,
        type: action.payload.type,
        language: action.payload.language,
        instructor: action.payload.instructor,
      }
    case FETCH_FILTERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default FiltersReducer
