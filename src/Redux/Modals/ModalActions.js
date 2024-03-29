import * as MODAL_ACTIONS from './ActionTypes'

export const OpenChangePasswordModal = () => {
  return {
    type: MODAL_ACTIONS.OPEN_CHANGE_PASSWORD_MODAL,
  }
}
export const OpenLoginModal = (includeRequiredMessge = false) => {
  return {
    type: MODAL_ACTIONS.OPEN_LOGIN_MODAL,
    payload: includeRequiredMessge,
  }
}
export const OpenPaymentModal = id => {
  return {
    type: MODAL_ACTIONS.OPEN_PAYMENT_MODAL,
    payload: id,
  }
}
export const OpenRegisterModal = () => {
  return {
    type: MODAL_ACTIONS.OPEN_REGISTER_MODAL,
  }
}
export const OpenResetPasswordModal = () => {
  return {
    type: MODAL_ACTIONS.OPEN_RESET_PASSWORD_MODAL,
  }
}
export const OpenForgotPasswordModal = () => {
  return {
    type: MODAL_ACTIONS.OPEN_FORGOT_PASSWORD_MODAL,
  }
}
export const OpenSubscribeModal = () => {
  return {
    type: MODAL_ACTIONS.OPEN_SUBSCRIBE_MODAL,
  }
}
export const OpenCourseRequestedModal = () => {
  return {
    type: MODAL_ACTIONS.OPEN_COURSE_REQUESTED_MODAL,
  }
}
export const OpenMakeDealModal = () => {
  return {
    type: MODAL_ACTIONS.OPEN_MAKE_DEAL_MODAL,
  }
}
export const CloseForgotPasswordModal = () => {
  return {
    type: MODAL_ACTIONS.CLOSE_FORGOT_PASSWORD_MODAL,
  }
}

export const CloseChangePasswordModal = () => {
  return {
    type: MODAL_ACTIONS.CLOSE_CHANGE_PASSWORD_MODAL,
  }
}
export const CloseLoginModal = () => {
  return {
    type: MODAL_ACTIONS.CLOSE_LOGIN_MODAL,
  }
}
export const ClosePaymentModal = () => {
  return {
    type: MODAL_ACTIONS.CLOSE_PAYMENT_MODAL,
  }
}
export const CloseRegisterModal = () => {
  return {
    type: MODAL_ACTIONS.CLOSE_REGISTER_MODAL,
  }
}
export const CloseResetPasswordModal = () => {
  return {
    type: MODAL_ACTIONS.CLOSE_RESET_PASSWORD_MODAL,
  }
}

export const CloseSubscribeModal = () => {
  return {
    type: MODAL_ACTIONS.CLOSE_SUBSCRIBE_MODAL,
  }
}
export const CloseCourseRequestedModal = () => {
  return {
    type: MODAL_ACTIONS.CLOSE_COURSE_REQUESTED_MODAL,
  }
}
export const CloseMakeDealModal = () => {
  return {
    type: MODAL_ACTIONS.CLOSE_MAKE_DEAL_MODAL,
  }
}
