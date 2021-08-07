import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import {
  CloseLoginModal,
  OpenRegisterModal,
} from '../../Redux/Modals/ModalActions'
import LoginModalFunction from './ModalFunctions/LoginModalFunctions.js'

export default function LoginModal() {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const state = useSelector(state => state.modals.loginModalState)
  const { formState, handleChange, Login } = LoginModalFunction()
  return (
    <SweetAlert
      custom
      showCloseButton
      title={<h1 className="text-Primary">{t('login')}</h1>}
      show={state}
      showConfirm={false}
      onConfirm={() => dispatch(CloseLoginModal())}
      onCancel={() => dispatch(CloseLoginModal())}
      closeBtnStyle={{ padding: '10px' }}
    >
      <form className="  px-8 pt-6 pb-8 mb-4 bg-transparent" onSubmit={Login}>
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
            name="phone_number"
            type="text"
            value={formState.phone_number}
            onChange={handleChange}
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
              value={formState.password}
              type="password"
              onChange={handleChange}
              placeholder="**********"
            />
          </div>
        </div>

        <div className="mb-6">
          <button className="text-sm px-2 text-Secondary hover:underline transition-all ease-in-out duration-500">
            {t('forgot')}
          </button>
        </div>

        <div className="mb-6 grid gap-3">
          <button
            className="shadow px-10 bg-Primary hover:bg-PrimaryHover transition-all ease-in-out duration-500 focus:shadow-outline focus:outline-none text-Light font-bold py-2  rounded"
            type="submite"
          >
            {t('login')}
          </button>
          <button
            className="shadow px-10 text-Primary border border-Primary transition-all ease-in-out duration-500 hover:bg-PrimaryHover hover:text-Light focus:shadow-outline focus:outline-none bg-Light font-bold py-2  rounded"
            type="button"
            onClick={() => {
              dispatch(CloseLoginModal()) && dispatch(OpenRegisterModal())
            }}
          >
            {t('create')}
          </button>
        </div>
      </form>
    </SweetAlert>
  )
}
