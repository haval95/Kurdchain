import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SECCESS,
  FETCH_COURSES_FAILURE,
  FILTER_DATA,
  FILTER_ERROR,
  REMOVE_FILTER_ERROR,
  OPEN_FILTER_OPTIONS_MOBILE,
  CLOSE_FILTER_OPTIONS_MOBILE,
} from './ActionTypes'

const initialState = {
  loading: false,
  data: [],

  errors: [],

  filteredData: [],
  filterError: false,
  filterOptions: false,
}

const CoursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_COURSES_SECCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        filteredData: action.payload,
      }
    case FETCH_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    case FILTER_DATA:
      return {
        ...state,
        filteredData: action.payload,
        filterError: false,
      }
    case FILTER_ERROR:
      return {
        ...state,

        filterError: true,
      }
    case REMOVE_FILTER_ERROR:
      return {
        ...state,

        filterError: false,
      }
    case OPEN_FILTER_OPTIONS_MOBILE:
      return {
        ...state,

        filterOptions: true,
      }
    case CLOSE_FILTER_OPTIONS_MOBILE:
      return {
        ...state,

        filterOptions: false,
      }

    default:
      return state
  }
}

export default CoursesReducer
