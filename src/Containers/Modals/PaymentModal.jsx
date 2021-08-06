import React, { useState } from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

import { useTranslation } from 'react-i18next'
import NavigationButton from '../../Components/NavigationButton'

export default function PaymentModal() {
  const { t } = useTranslation()
  const [show, setshow] = useState(false)

  return (
    <SweetAlert
      custom
      title={<h1 className="text-Primary">{t('payment')}</h1>}
      show={show}
      showConfirm={false}
      onConfirm={() => setshow(false)}
      onCancel={() => setshow(false)}
    >
      <form className="  px-8 pt-6 mb-4 bg-transparent">
        <h1 className="text-xl text-Secondary font-medium mb-6">
          {t('paymentSlogan')}
        </h1>

        <div className="grid grid-cols-2 items-center">
          <img
            src="https://media-exp3.licdn.com/dms/image/C560BAQHCx0vqc-ws_A/company-logo_200_200/0/1530769908765?e=2159024400&v=beta&t=4YkWzBCA_W8EMmsbVwC85ncNgzuZ9MkWKi7Hmn5FCWA"
            alt="asia hawala"
          />
          <p>some text</p>
        </div>

        <p className="mb-6">{t('contactUsForProblem')}</p>
        <div className="mb-6 grid gap-3">
          <NavigationButton text={t('navbar.contact')} />
        </div>
      </form>
    </SweetAlert>
  )
}
