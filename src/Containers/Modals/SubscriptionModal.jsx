import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import { CloseSubscribeModal } from '../../Redux/Modals/ModalActions'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import NavigationButton from '../../Components/NavigationButton'

export default function SubscriptionModal() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const state = useSelector(state => state.modals.subscribtionModalState)

  return (
    <SweetAlert
      custom
      showCloseButton
      title={<h1 className="text-Primary">{t('subscribe')}</h1>}
      show={state}
      showConfirm={false}
      onConfirm={() => dispatch(CloseSubscribeModal())}
      onCancel={() => dispatch(CloseSubscribeModal())}
      closeBtnStyle={{ padding: '10px' }}
    >
      <form className="  px-8 pt-6 mb-4 bg-transparent">
        <h1 className="text-xl text-Secondary font-medium mb-6">
          {t('subscribeMsg')}
        </h1>

        <div className="mb-6 grid gap-3">
          <NavigationButton
            text={t('navbar.contact')}
            location={'/contact'}
            clickAction={() => dispatch(CloseSubscribeModal())}
          />
        </div>
      </form>
    </SweetAlert>
  )
}
