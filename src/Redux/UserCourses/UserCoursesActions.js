import * as ACTIONS from './ActionTypes'
import axios from 'axios'
import i18n from 'i18next'
import { toast } from 'react-toastify'
import { ClosePaymentModal } from '../Modals/ModalActions'
export const FetchUserCoursesRequest = () => {
  return {
    type: ACTIONS.FETCH_CURRENT_USER_COURSES_REQUEST,
  }
}

export const FetchUserCoursesSeccess = data => {
  return {
    type: ACTIONS.FETCH_CURRENT_USER_COURSES_SUCCESS,
    payload: data,
  }
}

export const FetchUserCoursesFailure = error => {
  return {
    type: ACTIONS.FETCH_CURRENT_USER_COURSES_FAILURE,
    payload: error,
  }
}

export const FetchUserCourses = token => {
  return dispatch => {
    dispatch(FetchUserCoursesRequest())
    axios
      .get(`https://kurdchain.dastey2.com/api/get/courses`, token)
      .then(response => {
        dispatch(FetchUserCoursesSeccess(response.data))
      })
      .catch(error => {
        dispatch(FetchUserCoursesFailure(error))
      })
  }
}
export const buyCourse = (id, token) => {
  console.log(token, id)
  return dispatch => {
    dispatch(FetchUserCoursesRequest())
    axios
      .post(`https://kurdchain.dastey2.com/api/buy/course/${id}`, {}, token)
      .then(() => {
        toast.success(i18n.t('sendRequest'), {
          position: 'top-center',

          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        dispatch(FetchUserCourses(token))
        dispatch(ClosePaymentModal())
      })
      .catch(() => {
        toast.error(i18n.t('sendFail'), {
          position: 'top-center',

          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        dispatch(ClosePaymentModal())
      })
  }
}
