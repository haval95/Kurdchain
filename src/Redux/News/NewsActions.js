import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SECCESS,
  FETCH_NEWS_FAILURE,
  FETCH_LATESTNEWS_REQUEST,
  FETCH_LATESTNEWS_SECCESS,
  FETCH_LATESTNEWS_FAILURE,
} from './ActionTypes'
import axios from 'axios'

export const FetchLatesetNewsRequest = () => {
  return {
    type: FETCH_LATESTNEWS_REQUEST,
  }
}

export const FetchLatesetNewsSeccess = data => {
  return {
    type: FETCH_LATESTNEWS_SECCESS,
    payload: data,
  }
}

export const FetchLatesetNewsFailure = error => {
  return {
    type: FETCH_LATESTNEWS_FAILURE,
    payload: error,
  }
}

export const FetchNewsRequest = () => {
  return {
    type: FETCH_NEWS_REQUEST,
  }
}

export const FetchNewsSeccess = data => {
  return {
    type: FETCH_NEWS_SECCESS,
    payload: data,
  }
}

export const FetchNewsFailure = error => {
  return {
    type: FETCH_NEWS_FAILURE,
    payload: error,
  }
}

export const FetchNews = (page = 1) => {
  return dispatch => {
    dispatch(FetchNewsRequest())

    axios
      .get(`https://kurdchain.dastey2.com/api/news?page=${page}`)
      .then(response => {
        let data = {
          news: response.data.news.data,
          current_page: response.data.news.current_page,
          last_page: response.data.news.last_page,
        }

        dispatch(FetchNewsSeccess(data))
      })
      .catch(error => {
        dispatch(FetchNewsFailure(error))
      })
  }
}

export const FetchLatestNews = () => {
  return dispatch => {
    dispatch(FetchLatesetNewsRequest())

    axios
      .get(`https://kurdchain.dastey2.com/api/news/latest`)
      .then(response => {
        let data = response.data.news
        dispatch(FetchLatesetNewsSeccess(data))
      })
      .catch(error => {
        dispatch(FetchLatesetNewsFailure(error))
      })
  }
}
