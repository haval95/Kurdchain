import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import {
  CloseLoginModal,
  OpenRegisterModal,
  OpenForgotPasswordModal,
} from '../../Redux/Modals/ModalActions'
import LoginModalFunction from './ModalFunctions/LoginModalFunctions.js'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

export default function LoginModal() {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const state = useSelector(state => state.modals.loginModalState)
  const errorMessages = useSelector(state => state.user.loginErrors)
  const { Login } = LoginModalFunction()

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm()
  useEffect(() => {
    if (!state) {
      setValue('phone_number', '')
      setValue('password', '')
    }
  }, [state])

  useEffect(() => {
    errorMessages &&
      errorMessages.map(() => {
        setError('phone_number', {
          type: 'manual',
          message: t('phoneOrPwd'),
        })
        setError('password', {
          type: 'manual',
          message: t('phoneOrPwd'),
        })
      })
  }, [errorMessages])

  const ForgotPwd = () => {
    dispatch(CloseLoginModal())
    dispatch(OpenForgotPasswordModal())
  }

  return (
    <SweetAlert
      custom
      showCloseButton
      title={<span className="text-Primary text-2xl">{t('login')}</span>}
      show={state}
      showConfirm={false}
      onConfirm={() => dispatch(CloseLoginModal())}
      onCancel={() => dispatch(CloseLoginModal())}
      closeBtnStyle={{ padding: '10px' }}
      closeOnClickOutside={false}
    >
      <form
        className="  px-8 pt-6 pb-8 mb-4 bg-transparent"
        onSubmit={handleSubmit(Login)}
      >
        <div className="mb-4">
          <label
            className="block text-Secondary text-sm font-bold text-start-important mb-2"
            htmlFor="phone_number"
          >
            {t('phoneNumber')}
          </label>

          <input
            className={`${
              errors.phone_number
                ? 'border-Danger focus:border-Danger ring-Danger bg-Danger'
                : 'border-Primary focus:border-PrimaryHover ring-Primary '
            } shadow appearance-none  rounded w-full py-2 px-3 text-Secondary  bg-LightGray outline-none  focus:ring-1 border`}
            id="phone"
            name="phone_number"
            type="text"
            placeholder="07721234567"
            {...register('phone_number', {
              required: t('required'),
              pattern: { value: /^[0-9]+$/i, message: t('wrongNumber') },
              minLength: { value: 11, message: t('max11') },
              maxLength: { value: 11, message: t('max11') },
            })}
          />
          {errors.phone_number && (
            <div className="text-Danger pt-1 text-end-important">
              {errors.phone_number.message}
            </div>
          )}
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
              className={`${
                errors.password
                  ? 'border-Danger focus:border-Danger ring-Danger bg-Danger'
                  : 'border-Primary focus:border-PrimaryHover ring-Primary '
              } shadow appearance-none  rounded w-full py-2 px-3 text-Secondary  bg-LightGray outline-none  focus:ring-1 border`}
              id="password"
              name="password"
              type="password"
              placeholder="**********"
              {...register('password', {
                required: t('required'),
                minLength: { value: 6, message: t('min6') },
              })}
            />
            {errors.password && (
              <div className="text-Danger pt-1 text-end-important">
                {errors.password.message}
              </div>
            )}
          </div>
        </div>

        <div className="mb-6">
          <button
            type="button"
            className="text-sm px-2 text-Secondary hover:underline transition-all ease-in-out duration-500"
            onClick={ForgotPwd}
          >
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
