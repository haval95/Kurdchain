import * as MODAL_ACTIONS from './ActionTypes'

const initialState = {
  loginModaMsgState: false,
  loginModalState: false,
  changePasswordModalState: false,
  paymentModalState: false,
  paymentForCourseId: null,
  registerModalState: false,
  resetPasswordModalState: false,
  forgotPasswordModalState: false,
  subscribtionModalState: false,
  courseRequestedModalState: false,
  makeDealModalstate: false,
}

const ModalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_ACTIONS.OPEN_LOGIN_MODAL:
      return {
        ...state,
        loginModalState: true,
        loginModaMsgState: action.payload,
      }
    case MODAL_ACTIONS.OPEN_CHANGE_PASSWORD_MODAL:
      return {
        ...state,
        changePasswordModalState: true,
      }
    case MODAL_ACTIONS.OPEN_PAYMENT_MODAL:
      return {
        ...state,
        paymentModalState: true,
        paymentForCourseId: action.payload,
      }
    case MODAL_ACTIONS.OPEN_REGISTER_MODAL:
      return {
        ...state,
        registerModalState: true,
      }
    case MODAL_ACTIONS.OPEN_RESET_PASSWORD_MODAL:
      return {
        ...state,
        resetPasswordModalState: true,
      }
    case MODAL_ACTIONS.CLOSE_LOGIN_MODAL:
      return {
        ...state,
        loginModalState: false,
        loginModaMsgState: false,
      }
    case MODAL_ACTIONS.CLOSE_CHANGE_PASSWORD_MODAL:
      return {
        ...state,
        changePasswordModalState: false,
      }
    case MODAL_ACTIONS.CLOSE_PAYMENT_MODAL:
      return {
        ...state,
        paymentModalState: false,
        paymentForCourseId: null,
      }
    case MODAL_ACTIONS.CLOSE_REGISTER_MODAL:
      return {
        ...state,
        registerModalState: false,
      }
    case MODAL_ACTIONS.CLOSE_RESET_PASSWORD_MODAL:
      return {
        ...state,
        resetPasswordModalState: false,
      }
    case MODAL_ACTIONS.OPEN_FORGOT_PASSWORD_MODAL:
      return {
        ...state,
        forgotPasswordModalState: true,
      }
    case MODAL_ACTIONS.CLOSE_FORGOT_PASSWORD_MODAL:
      return {
        ...state,
        forgotPasswordModalState: false,
      }
    case MODAL_ACTIONS.OPEN_SUBSCRIBE_MODAL:
      return {
        ...state,
        subscribtionModalState: true,
      }
    case MODAL_ACTIONS.CLOSE_SUBSCRIBE_MODAL:
      return {
        ...state,
        subscribtionModalState: false,
      }
    case MODAL_ACTIONS.OPEN_COURSE_REQUESTED_MODAL:
      return {
        ...state,
        courseRequestedModalState: true,
      }
    case MODAL_ACTIONS.CLOSE_COURSE_REQUESTED_MODAL:
      return {
        ...state,
        courseRequestedModalState: false,
      }
    case MODAL_ACTIONS.OPEN_MAKE_DEAL_MODAL:
      return {
        ...state,
        makeDealModalstate: true,
      }
    case MODAL_ACTIONS.CLOSE_MAKE_DEAL_MODAL:
      return {
        ...state,
        makeDealModalstate: false,
      }

    default:
      return state
  }
}

export default ModalsReducer
