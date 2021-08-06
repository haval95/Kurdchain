import React, { useState } from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

import { useTranslation } from 'react-i18next'

export default function ResetPassword() {
  const { t } = useTranslation()
  const [show, setshow] = useState(false)

  return (
    <SweetAlert
      custom
      title={<h1 className="text-Primary">{t('reset')}</h1>}
      show={show}
      showConfirm={false}
      onConfirm={() => setshow(false)}
      onCancel={() => setshow(false)}
    >
      <form className="  px-8 pt-6 mb-4 bg-transparent">
        <p className="mb-4 ">{t('resetSlogan')}</p>
        <div className="mb-4">
          <label
            className="block text-Secondary text-sm font-bold text-start-important mb-2"
            htmlFor="phone"
          >
            {t('phoneNumber')}
          </label>

          <input
            className="shadow appearance-none  rounded w-full py-2 px-3 text-Secondary  bg-LightGray focus:outline-none focus:shadow-outline"
            id="phone"
            name="phone"
            type="text"
            placeholder={t('07721234567')}
          />
        </div>
        <div className="my-6">
          <label
            className="block text-Secondary text-sm font-bold text-start-important mb-2"
            htmlFor="email"
          >
            {t('email')}
          </label>

          <input
            className="shadow appearance-none  rounded w-full py-2 px-3 text-Secondary  bg-LightGray focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder={t('you@example.com')}
          />
        </div>

        <div className="mb-6 grid gap-3">
          <button
            className="shadow px-10 bg-Primary hover:bg-PrimaryHover transition-all ease-in-out duration-500 focus:shadow-outline focus:outline-none text-Light font-bold py-2  rounded"
            type="button"
          >
            {t('send')}
          </button>
        </div>
      </form>
    </SweetAlert>
  )
}
