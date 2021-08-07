import { LOGIN, LOGOUT, REQUEST, REQEUST_FAILED } from './ActionTypes'

const localData = JSON.parse(localStorage.getItem('LoggedInUser'))

const localStorageData = localData
  ? {
      isLoading: false,
      isAuthenticated: true,
      user: {
        data: localData.user,
        config: {
          headers: {
            'content-type': 'application/json',
            authorization: `bearer ${localData.access_token}`,
          },
        },
      },
    }
  : {
      isLoading: false,
      isAuthenticated: false,
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
        isAuthenticated: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export default UserReducer
