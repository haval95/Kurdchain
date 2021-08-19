import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import { CloseCourseRequestedModal } from '../../Redux/Modals/ModalActions'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import NavigationButton from '../../Components/NavigationButton'

export default function CourseRequested() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const state = useSelector(state => state.modals.courseRequestedModalState)

  return (
    <SweetAlert
      info
      showCloseButton
      title={<h1 className="text-Secondary">{t('requested')}</h1>}
      show={state}
      showConfirm={false}
      onConfirm={() => dispatch(CloseCourseRequestedModal())}
      onCancel={() => dispatch(CloseCourseRequestedModal())}
      closeBtnStyle={{ padding: '10px' }}
    >
      <div className="p-2">
        <h1 className="text-xl text-Secondary font-medium mb-6">
          {t('requestedMsg')}
        </h1>
        <p className="py-2 mb-3">{t('contactUsForProblem')}</p>
        <div className="mb-6 grid gap-3">
          <NavigationButton
            text={t('navbar.contact')}
            location={'/contact'}
            clickAction={() => dispatch(CloseCourseRequestedModal())}
          />
        </div>
      </div>
    </SweetAlert>
  )
}
