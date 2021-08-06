import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import {
  OpenLoginModal,
  CloseRegisterModal,
} from '../../Redux/Modals/ModalActions'

export default function RegisterModal() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const state = useSelector(state => state.modals.registerModalState)

  return (
    <SweetAlert
      custom
      showCloseButton
      title={<h1 className="text-Primary">{t('register')}</h1>}
      show={state}
      showConfirm={false}
      onConfirm={() => dispatch(CloseRegisterModal())}
      onCancel={() => dispatch(CloseRegisterModal())}
      closeBtnStyle={{ padding: '10px' }}
    >
      <form className="  px-8 pt-6  mb-4 bg-transparent">
        <div className="mb-4">
          <label
            className="block text-Secondary text-sm font-bold text-start-important mb-2 capitalize"
            htmlFor="phone"
          >
            {t('username')}
          </label>

          <input
            required
            className="shadow appearance-none  rounded w-full py-2 px-3 text-Secondary  bg-LightGray focus:outline-none focus:shadow-outline"
            id="phone"
            name="phone"
            type="text"
            placeholder={t('exname')}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-Secondary text-sm font-bold text-start-important mb-2 capitalize"
            htmlFor="phone"
          >
            {t('email')}
          </label>

          <input
            required
            className="shadow appearance-none  rounded w-full py-2 px-3 text-Secondary  bg-LightGray focus:outline-none focus:shadow-outline"
            id="phone"
            name="phone"
            type="text"
            placeholder="you@email.com"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-Secondary text-sm font-bold text-start-important mb-2"
            htmlFor="phone"
          >
            {t('phoneNumber')}
          </label>

          <input
            required
            className="shadow appearance-none  rounded w-full py-2 px-3 text-Secondary  bg-LightGray focus:outline-none focus:shadow-outline"
            id="phone"
            name="phone"
            type="text"
            placeholder={t('07721234567')}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-Secondary text-sm font-bold text-start-important mb-2"
            htmlFor="password"
          >
            {t('pwd')}
          </label>

          <div className="mb-6">
            <input
              className="shadow appearance-none  rounded w-full py-2 px-3 text-Secondary mb-3 bg-LightGray  focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="**********"
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block text-Secondary text-sm font-bold text-start-important mb-2"
            htmlFor="password"
          >
            {t('confirmPwd')}
          </label>

          <div className="mb-6">
            <input
              className="shadow appearance-none  rounded w-full py-2 px-3 text-Secondary mb-3 bg-LightGray  focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="**********"
            />
          </div>
        </div>

        <div className="mb-6 grid gap-3">
          <button
            className="shadow px-10 bg-Primary hover:bg-PrimaryHover transition-all ease-in-out duration-500 focus:shadow-outline focus:outline-none text-Light font-bold py-2  rounded"
            type="button"
          >
            {t('register')}
          </button>
          <button
            className="shadow px-10 text-Primary border border-Primary transition-all ease-in-out duration-500 hover:bg-PrimaryHover hover:text-Light focus:shadow-outline focus:outline-none bg-Light font-bold py-2  rounded"
            type="button"
            onClick={() => {
              dispatch(CloseRegisterModal()) && dispatch(OpenLoginModal())
            }}
          >
            {t('login')}
          </button>
        </div>
      </form>
    </SweetAlert>
  )
}
