import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import { ClosePaymentModal } from '../../Redux/Modals/ModalActions'
import { buyCourse } from '../../Redux/UserCourses/UserCoursesActions'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

export default function PaymentModal() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const state = useSelector(state => state.modals)
  const user = useSelector(state => state.user)

  return (
    <SweetAlert
      custom
      showCloseButton
      title={<h1 className="text-Primary">{t('payment')}</h1>}
      show={state.paymentModalState}
      showConfirm={false}
      onConfirm={() => dispatch(ClosePaymentModal())}
      onCancel={() => dispatch(ClosePaymentModal())}
      closeBtnStyle={{ padding: '10px', color: 'rgb(200,200,200)' }}
    >
      <form className="  px-8 pt-6 mb-4 bg-transparent">
        <h1 className="text-xl text-Dark  ">{t('paymentSlogan')}</h1>

        <div className="grid grid-cols-2 items-center">
          <img
            src="https://media-exp3.licdn.com/dms/image/C560BAQHCx0vqc-ws_A/company-logo_200_200/0/1530769908765?e=2159024400&v=beta&t=4YkWzBCA_W8EMmsbVwC85ncNgzuZ9MkWKi7Hmn5FCWA"
            alt="asia hawala"
          />
          <p>some text</p>
        </div>

        {state && state.paymentForCourseId && user.isAuthenticated ? (
          <>
            <p className="text-xl my-2  text-Primary">{t('buyCourse')} </p>
            <button
              className="font-bold justify-self-center bg-Primary px-3 hover:bg-PrimaryHover text-Light  w-full py-1 uppercase shadow-md hover:shadow-none  rounded-md transition duration-500 ease-in-out"
              onClick={() =>
                dispatch(buyCourse(state.paymentForCourseId, user.user.config))
              }
            >
              {t('sendRquestBtn')}
            </button>
          </>
        ) : null}
      </form>
    </SweetAlert>
  )
}
