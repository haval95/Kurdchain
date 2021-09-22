import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SECCESS,
  FETCH_NEWS_FAILURE,
  FETCH_LATESTNEWS_REQUEST,
  FETCH_LATESTNEWS_SECCESS,
  FETCH_LATESTNEWS_FAILURE,
  FETCH_CURRENTNEWS_FAILURE,
  FETCH_CURRENTNEWS_REQUEST,
  FETCH_CURRENTNEWS_SECCESS,
  LANGUAGE_CHANGED,
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
export const FetchCurrentNewsRequest = () => {
  return {
    type: FETCH_CURRENTNEWS_REQUEST,
  }
}

export const FetchCurrentNewsSeccess = data => {
  return {
    type: FETCH_CURRENTNEWS_SECCESS,
    payload: data,
  }
}

export const FetchCurrentNewsFailure = error => {
  return {
    type: FETCH_CURRENTNEWS_FAILURE,
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
export const LanguageChanged = () => {
  return {
    type: LANGUAGE_CHANGED,
  }
}

export const FetchNews = (page = 1, language = 'english') => {
  return dispatch => {
    dispatch(FetchNewsRequest())

    axios
      .get(`https://kurdchain.trade/app/api/news/${language}?page=${page}`)
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

export const FetchLatestNews = (language = 'english') => {
  return dispatch => {
    dispatch(FetchLatesetNewsRequest())

    axios
      .get(`https://kurdchain.trade/app/api/news/latest/${language}`)
      .then(response => {
        let data = response.data.news
        dispatch(FetchLatesetNewsSeccess(data))
      })
      .catch(error => {
        dispatch(FetchLatesetNewsFailure(error))
      })
  }
}

export const FetchCurrentNews = id => {
  return dispatch => {
    dispatch(FetchCurrentNewsRequest())

    axios
      .get(`https://kurdchain.trade/app/api/view/news/${id}`)
      .then(response => {
        let data = response.data
        dispatch(FetchCurrentNewsSeccess(data))
      })
      .catch(error => {
        dispatch(FetchCurrentNewsFailure(error))
      })
  }
}
