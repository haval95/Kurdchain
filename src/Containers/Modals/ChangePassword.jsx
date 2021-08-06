import React, { useState } from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

import { useTranslation } from 'react-i18next'

export default function ChangePassword() {
  const { t } = useTranslation()
  const [show, setshow] = useState(false)

  return (
    <SweetAlert
      custom
      title={<h1 className="text-Primary">{t('changePwd')}</h1>}
      show={show}
      showConfirm={false}
      onConfirm={() => setshow(false)}
      onCancel={() => setshow(false)}
    >
      <form className="  px-8 pt-6 mb-4 bg-transparent">
        <div className="mb-4">
          <label
            className="block text-Secondary text-sm font-bold text-start-important mb-2"
            htmlFor="phone"
          >
            {t('oldPwd')}
          </label>

          <input
            className="shadow appearance-none  rounded w-full py-2 px-3 text-Secondary  bg-LightGray focus:outline-none focus:shadow-outline"
            id="password"
            name="oldPwd"
            type="password"
            placeholder="***********"
          />
        </div>
        <div className="my-6">
          <label
            className="block text-Secondary text-sm font-bold text-start-important mb-2"
            htmlFor="password"
          >
            {t('newPwd')}
          </label>

          <input
            className="shadow appearance-none  rounded w-full py-2 px-3 text-Secondary  bg-LightGray focus:outline-none focus:shadow-outline"
            id="password"
            name="newPwd"
            type="password"
            placeholder="*********"
          />
        </div>
        <div className="my-6">
          <label
            className="block text-Secondary text-sm font-bold text-start-important mb-2"
            htmlFor="password"
          >
            {t('confirmPwd')}
          </label>

          <input
            className="shadow appearance-none  rounded w-full py-2 px-3 text-Secondary  bg-LightGray focus:outline-none focus:shadow-outline"
            id="password"
            name="confirmPwd"
            type="password"
            placeholder="*********"
          />
        </div>

        <div className="mb-6 grid gap-3">
          <button
            className="shadow px-10 bg-Primary hover:bg-PrimaryHover transition-all ease-in-out duration-500 focus:shadow-outline focus:outline-none text-Light font-bold py-2  rounded"
            type="button"
          >
            {t('change')}
          </button>
        </div>
      </form>
    </SweetAlert>
  )
}
