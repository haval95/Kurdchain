import * as ACTIONS from './ActionTypes'

const initialState = {
  loading: false,
  data: {},
  errors: [],
}

const UserCoursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_CURRENT_USER_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ACTIONS.FETCH_CURRENT_USER_COURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case ACTIONS.FETCH_CURRENT_USER_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export default UserCoursesReducer
