import axios from 'axios'
import { loading, stopLoaing } from '../Loading/LoadingAction'
import { CloseRegisterModal, CloseLoginModal } from '../Modals/ModalActions'
import { LOGIN, LOGOUT, REQUEST, REQEUST_FAILED } from './ActionTypes'

import i18n from 'i18next'
import { toast } from 'react-toastify'

export const login = data => {
  return {
    type: LOGIN,
    payload: data,
  }
}

export const logout = () => {
  return {
    type: LOGOUT,
  }
}

export const request = () => {
  return {
    type: REQUEST,
  }
}

export const failed = error => {
  return {
    type: REQEUST_FAILED,
    payload: error,
  }
}

export const loginUser = data => {
  return dispatch => {
    dispatch(request())

    toast(i18n.t('checking'), {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    dispatch(loading())
    axios
      .post(`https://kurdchain.dastey2.com/api/login`, data, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then(response => {
        dispatch(CloseLoginModal())
        dispatch(login(response.data))
        localStorage.setItem('LoggedInUser', JSON.stringify(response.data))
        dispatch(stopLoaing())
        window.location.reload()
      })
      .catch(() => {
        let ErrorMessages = []
        dispatch(stopLoaing())

        ErrorMessages.push({
          type: 'both',
          message: 'Phone number or password are incorrect',
        })

        dispatch(failed(ErrorMessages))
      })
  }
}
export const registerUser = data => {
  return dispatch => {
    dispatch(request())
    dispatch(loading())
    toast(i18n.t('checking'), {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    axios
      .post(`https://kurdchain.dastey2.com/api/register`, data, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then(response => {
        window.location.reload()
        toast.success(i18n.t('registerSuccess'), {
          position: 'top-center',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        dispatch(login(response.data))
        localStorage.setItem('LoggedInUser', JSON.stringify(response.data))

        dispatch(stopLoaing())
        dispatch(CloseRegisterModal())
      })
      .catch(error => {
        let errors = error.response.data.errors
        let ErrorMessages = []
        dispatch(stopLoaing())
        if (errors) {
          if (errors.email)
            ErrorMessages.push({
              type: 'email',
              message: 'Email is already taken',
            })

          if (errors.phone_number)
            ErrorMessages.push({
              type: 'phone_number',
              message: 'Phone number is already taken',
            })
        }

        dispatch(failed(ErrorMessages))
      })
  }
}

export const logOutUser = token => {
  return dispatch => {
    toast(i18n.t('navbar.logout'), {
      position: 'top-center',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    dispatch(loading())

    axios
      .post(`https://kurdchain.dastey2.com/api/logout`, {}, token)
      .then(() => {
        dispatch(logout())
        localStorage.removeItem('LoggedInUser')
        dispatch(stopLoaing())
        window.location.reload()
      })
      .catch(error => {
        dispatch(failed(error))
        toast.error(i18n.t('logoutFailed'), {
          position: ' top-center',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      })
  }
}
