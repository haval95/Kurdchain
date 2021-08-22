import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import { CloseMakeDealModal } from '../../Redux/Modals/ModalActions'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import NavigationButton from '../../Components/NavigationButton'

export default function MakeDealModal() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const state = useSelector(state => state.modals.makeDealModalstate)

  return (
    <SweetAlert
      custom
      showCloseButton
      title={<h1 className="text-Primary">{t('payment')}</h1>}
      show={state}
      showConfirm={false}
      onConfirm={() => dispatch(CloseMakeDealModal())}
      onCancel={() => dispatch(CloseMakeDealModal())}
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
        <p className="my-4 text-Dark font-light">{t('contactusnow')}</p>
        <NavigationButton
          text={t('navbar.contact')}
          location="/contact"
          style="uppecase"
          clickAction={() => {
            dispatch(CloseMakeDealModal())
          }}
        />
      </form>
    </SweetAlert>
  )
}
