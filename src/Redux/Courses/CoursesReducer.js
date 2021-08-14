import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SECCESS,
  FETCH_COURSES_FAILURE,
  FETCH_LATEST_COURSES_FAILURE,
  FETCH_LATEST_COURSES_SECCESS,
  FETCH_LATEST_COURSES_REQUEST,
} from './ActionTypes'

const initialState = {
  latestCoursesLoading: false,
  loading: false,
  data: [],
  latestCourses: [],
  errors: [],
  latestCoursesError: [],
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
      }
    case FETCH_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case FETCH_LATEST_COURSES_REQUEST:
      return {
        ...state,
        latestCoursesLoading: true,
      }
    case FETCH_LATEST_COURSES_SECCESS:
      return {
        ...state,
        latestCoursesLoading: false,
        latestCourses: action.payload,
      }
    case FETCH_LATEST_COURSES_FAILURE:
      return {
        ...state,
        latestCoursesLoading: false,
        latestCoursesError: action.payload,
      }
    default:
      return state
  }
}

export default CoursesReducer
