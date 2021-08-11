import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SECCESS,
  FETCH_NEWS_FAILURE,
  FETCH_LATESTNEWS_FAILURE,
  FETCH_LATESTNEWS_REQUEST,
  FETCH_LATESTNEWS_SECCESS,
} from './ActionTypes'

const initialState = {
  latestNewsLoading: false,
  loading: false,

  news: [],
  latestNews: [],
  errors: [],
  latestNewsError: '',
  last: null,
  current: null,
}

const NewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_NEWS_SECCESS:
      return {
        ...state,
        loading: false,
        news: [...state.news, ...action.payload.news],
        current: action.payload.current_page,
        last: action.payload.last_page,
      }
    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case FETCH_LATESTNEWS_REQUEST:
      return {
        ...state,
        latestNewsLoading: true,
      }
    case FETCH_LATESTNEWS_SECCESS:
      return {
        ...state,
        latestNewsLoading: false,
        latestNews: action.payload,
      }
    case FETCH_LATESTNEWS_FAILURE:
      return {
        ...state,
        latestNewsLoading: false,
        latestNewsError: action.payload,
      }
    default:
      return state
  }
}

export default NewsReducer
