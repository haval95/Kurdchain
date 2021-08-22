import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import { CloseCourseRequestedModal } from '../../Redux/Modals/ModalActions'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import NavigationButton from '../../Components/NavigationButton'

export default function CourseRequestedModal() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const CourseRequestedState = useSelector(
    state => state.modals.courseRequestedModalState
  )

  return (
    <SweetAlert
      warning
      showCloseButton
      title={<h1 className="text-Warning">{t('requested')}</h1>}
      show={CourseRequestedState}
      showConfirm={false}
      onConfirm={() => dispatch(CloseCourseRequestedModal())}
      onCancel={() => dispatch(CloseCourseRequestedModal())}
      closeBtnStyle={{ padding: '10px', color: 'rgb(200,200,200)' }}
    >
      <div className="p-2">
        <h1 className="text-xl text-Dark  mb-6">{t('requestedMsg')}</h1>
        <p className="py-2 mb-3">{t('contactUsForProblem')}</p>
        <div className="mb-6 grid gap-3">
          <NavigationButton
            text={t('navbar.contact')}
            location={'/contact'}
            colors="bg-Warning text-Light uppercase py-1 hover:bg-WarningHover   shadow-md"
            clickAction={() => dispatch(CloseCourseRequestedModal())}
          />
        </div>
      </div>
    </SweetAlert>
  )
}
