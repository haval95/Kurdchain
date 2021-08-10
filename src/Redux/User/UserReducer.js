import { LOGIN, LOGOUT, REQUEST, REQEUST_FAILED } from './ActionTypes'

const localData = JSON.parse(localStorage.getItem('LoggedInUser'))

const localStorageData = localData
  ? {
      isLoading: false,
      isAuthenticated: true,
      errors: [],
      user: {
        data: localData.user,
        config: {
          headers: {
            Authorization: `Bearer ${localData.access_token}`,
          },
        },
      },
    }
  : {
      isLoading: false,
      isAuthenticated: false,
      errors: [],
      user: {
        data: '',

        config: {
          headers: {
            'content-type': 'application/json',
            authorization: '',
          },
        },
      },
    }

const initialState = {
  isLoading: localStorageData.isLoading,
  isAuthenticated: localStorageData.isAuthenticated,
  user: localStorageData.user,
  errors: localStorageData.errors,
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case LOGIN:
      return {
        isAuthenticated: true,
        isLoading: false,
        errors: [],
        user: {
          data: action.payload.user,
          config: {
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${action.payload.access_token}`,
            },
          },
        },
      }

    case LOGOUT:
      return {
        isAuthenticated: false,
        user: {
          id: '',
          email: '',
          username: '',
          role: '',
          config: {
            headers: {
              'content-type': 'application/json',
              authorization: '',
            },
          },
        },
      }
    case REQEUST_FAILED:
      return {
        ...state,
        isLoading: false,

        errors: action.payload,
      }

    default:
      return state
  }
}

export default UserReducer
