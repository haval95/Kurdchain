import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { CloseForgotPasswordModal } from '../../Redux/Modals/ModalActions'
import ForgotModalFunctions from './ModalFunctions/ForgotModalFunctions.js'
import { useForm } from 'react-hook-form'

export default function LoginModal() {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const state = useSelector(state => state.modals.forgotPasswordModalState)

  const { forgotPwd } = ForgotModalFunctions()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <SweetAlert
      custom
      showCloseButton
      title={<h1 className="text-Primary">{t('forgotPwd')}</h1>}
      show={state}
      showConfirm={false}
      onConfirm={() => dispatch(CloseForgotPasswordModal())}
      onCancel={() => dispatch(CloseForgotPasswordModal())}
      closeBtnStyle={{ padding: '10px' }}
      closeOnClickOutside={false}
    >
      <form
        className="  px-8 pt-6 pb-8 mb-4 bg-transparent"
        onSubmit={handleSubmit(forgotPwd)}
      >
        <p className="mb-6">{t('forgotPwdMsg')}</p>
        <div className="mb-4">
          <label
            className="block text-Secondary text-sm font-bold text-start-important mb-2 capitalize"
            htmlFor="email"
          >
            {t('email')}
          </label>
          <input
            className={`${
              errors.email
                ? 'border-Danger focus:border-Danger ring-Danger bg-Danger'
                : 'border-Primary focus:border-PrimaryHover ring-Primary '
            } shadow appearance-none  rounded w-full py-2 px-3 text-Secondary  bg-LightGray outline-none  focus:ring-1 border`}
            id="email"
            name="email"
            type="text"
            placeholder="you@email.com"
            {...register('email', {
              required: t('required'),
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: t('wrongEmailError'),
              },
            })}
          />
          {errors.email && (
            <div className="text-Danger pt-1 text-end-important">
              {errors.email.message}
            </div>
          )}
        </div>
        <div className="mb-6 grid gap-3">
          <button
            className="shadow px-10 bg-Primary hover:bg-PrimaryHover transition-all ease-in-out duration-500 focus:shadow-outline focus:outline-none text-Light font-bold py-2  rounded"
            type="submite"
          >
            {t('send')}
          </button>
        </div>
      </form>
    </SweetAlert>
  )
}
