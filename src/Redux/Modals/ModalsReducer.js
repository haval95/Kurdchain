import * as MODAL_ACTIONS from './ActionTypes'

const initialState = {
  loginModalState: false,
  changePasswordModalState: false,
  paymentModalState: false,
  registerModalState: false,
  resetPasswordModalState: false,
  forgotPasswordModalState: false,
}

const ModalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_ACTIONS.OPEN_LOGIN_MODAL:
      return {
        ...state,
        loginModalState: true,
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

    default:
      return state
  }
}

export default ModalsReducer
