import React, { useEffect } from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
//import uuid from 'react-uuid'
import {
  OpenLoginModal,
  CloseRegisterModal,
} from '../../Redux/Modals/ModalActions'
import RegisterModalFunctions from './ModalFunctions/RegisterModalFunctions'
import { useForm } from 'react-hook-form'

export default function RegisterModal() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const state = useSelector(state => state.modals.registerModalState)
  const errorMessages = useSelector(state => state.user.RegisterErrors)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    formState: { errors },
  } = useForm()
  const password = watch('password', '')

  useEffect(() => {
    errorMessages &&
      errorMessages.map(error => {
        setError(error.type, {
          type: 'manual',
          message: error.message,
        })
      })
  }, [errorMessages])

  useEffect(() => {
    if (!state) {
      setValue('phone_number', '')
      setValue('email', '')
      setValue('username', '')
    }
  }, [state])

  const { SubmitRegisteration } = RegisterModalFunctions()

  return (
    <SweetAlert
      custom
      showCloseButton
      title={<span className="text-Primary text-2xl">{t('create')}</span>}
      show={state}
      showConfirm={false}
      onConfirm={() => dispatch(CloseRegisterModal())}
      onCancel={() => dispatch(CloseRegisterModal())}
      closeBtnStyle={{ padding: '10px', color: 'rgb(200,200,200)' }}
      closeOnClickOutside={false}
    >
      <form
        className="  px-8 pt-6  mb-4 bg-transparent"
        onSubmit={handleSubmit(SubmitRegisteration)}
      >
        <div className="mb-4">
          <label
            className="block text-Secondary text-sm font-bold text-start-important mb-2 capitalize"
            htmlFor="username"
          >
            {t('username')}
          </label>

          <input
            className={`${
              errors.username
                ? 'border-Danger focus:border-Danger ring-Danger bg-Danger'
                : 'border-Primary focus:border-PrimaryHover ring-Primary '
            } shadow appearance-none  rounded w-full py-2 px-3 text-Secondary  bg-LightGray outline-none  focus:ring-1 border`}
            id="username"
            name="username"
            type="text"
            placeholder={t('exname')}
            {...register('username', {
              required: t('required'),
            })}
          />
          {errors.username && (
            <div className="text-Danger pt-1 text-end-important">
              {errors.username.message}
            </div>
          )}
        </div>
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
          <label
            className="block text-Secondary text-sm font-bold text-start-important mb-2"
            htmlFor="password"
          >
            {t('confirmPwd')}
          </label>

          <div className="mb-6">
            <input
              className={`${
                errors.password_confirmation
                  ? 'border-Danger focus:border-Danger ring-Danger bg-Danger'
                  : 'border-Primary focus:border-PrimaryHover ring-Primary '
              } shadow appearance-none  rounded w-full py-2 px-3 text-Secondary  bg-LightGray outline-none  focus:ring-1 border`}
              id="ConfirmPassword"
              name="password_confirmation"
              type="password"
              placeholder="**********"
              {...register('password_confirmation', {
                required: t('required'),
                validate: value => value === password || t('dontmatch'),
              })}
            />
            {errors.password_confirmation && (
              <div className="text-Danger pt-1 text-end-important">
                {errors.password_confirmation.message}
              </div>
            )}
          </div>
        </div>

        <div className="mb-6 grid gap-3">
          <button
            className="shadow px-10 bg-Primary hover:bg-PrimaryHover transition-all ease-in-out duration-500 focus:shadow-outline focus:outline-none text-Light font-bold py-2  rounded"
            type="submite"
          >
            {t('create')}
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
