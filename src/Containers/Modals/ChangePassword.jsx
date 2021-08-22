import React, { useEffect } from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import { CloseChangePasswordModal } from '../../Redux/Modals/ModalActions'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import ChangePasswordModalFunctions from './ModalFunctions/ChangePasswordModalFunctions'
import { useForm } from 'react-hook-form'

export default function ChangePassword() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const state = useSelector(state => state.modals.changePasswordModalState)
  const errorMessages = useSelector(state => state.user.ChangePasswordError)
  const { sendChangePasswordRequest } = ChangePasswordModalFunctions()
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    if (!state) {
      setValue('old_password', '')
      setValue('password', '')
      setValue('password_confirmation', '')
    }
  }, [state])

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

  return (
    <SweetAlert
      custom
      showCloseButton
      title={<span className="text-Primary text-2xl">{t('changePwd')}</span>}
      show={state}
      showConfirm={false}
      onConfirm={() => dispatch(CloseChangePasswordModal())}
      onCancel={() => dispatch(CloseChangePasswordModal())}
      closeBtnStyle={{ padding: '10px', color: 'rgb(200,200,200)' }}
      closeOnClickOutside={false}
    >
      <form
        className="  px-8 pt-6 mb-4 bg-transparent"
        onSubmit={handleSubmit(sendChangePasswordRequest)}
      >
        <div className="mb-6">
          <label
            className="block text-Secondary text-sm font-bold text-start-important mb-2"
            htmlFor="password"
          >
            {t('oldPwd')}
          </label>

          <div className="mb-6">
            <input
              className={`${
                errors.old_password
                  ? 'border-Danger focus:border-Danger ring-Danger bg-Danger'
                  : 'border-Primary focus:border-PrimaryHover ring-Primary '
              } shadow appearance-none  rounded w-full py-2 px-3 text-Secondary  bg-LightGray outline-none  focus:ring-1 border`}
              id="old_password"
              name="old_password"
              type="password"
              placeholder="**********"
              {...register('old_password', {
                required: t('required'),
                minLength: { value: 8, message: t('min6') },
              })}
            />
            {errors.old_password && (
              <div className="text-Danger pt-1 text-end-important">
                {errors.old_password.message}
              </div>
            )}
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block text-Secondary text-sm font-bold text-start-important mb-2"
            htmlFor="password"
          >
            {t('newPwd')}
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
                minLength: { value: 8, message: t('min6') },
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
                errors.password
                  ? 'border-Danger focus:border-Danger ring-Danger bg-Danger'
                  : 'border-Primary focus:border-PrimaryHover ring-Primary '
              } shadow appearance-none  rounded w-full py-2 px-3 text-Secondary  bg-LightGray outline-none  focus:ring-1 border`}
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              placeholder="**********"
              {...register('password_confirmation', {
                required: t('required'),
                minLength: { value: 8, message: t('min6') },
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
            type="submit"
          >
            {t('change')}
          </button>
        </div>
      </form>
    </SweetAlert>
  )
}
