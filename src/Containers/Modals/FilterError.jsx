import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import { RemoveFilterError } from '../../Redux'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

export default function FilterError() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const coursesData = useSelector(state => state.courses)

  return (
    <SweetAlert
      error
      custom
      showCloseButton
      title={<span className="text-Danger text-2xl">{t('error')}</span>}
      show={coursesData.filterError}
      showConfirm={false}
      onConfirm={() => dispatch(RemoveFilterError())}
      onCancel={() => dispatch(RemoveFilterError())}
      closeBtnStyle={{ padding: '10px', color: 'rgb(200,200,200)' }}
      closeOnClickOutside={false}
    >
      <div className="py-4 text-2xl"> {t('notFoundFilter')}</div>
    </SweetAlert>
  )
}
