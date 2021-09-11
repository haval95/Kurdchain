import React from 'react'
import { useTranslation } from 'react-i18next'

import { useForm, useWatch } from 'react-hook-form'
import Title from '../../../Components/Title'
export default function Form() {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: 'onTouched',
  })

  console.log(watch())
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [Message, setMessage] = React.useState('')

  const userName = useWatch({
    control,
    name: 'name',
    defaultValue: ' api ',
  })

  const onSubmit = async (data, e) => {
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async response => {
        let json = await response.json()
        if (json.success) {
          setIsSuccess(true)
          setMessage(t('infoSuccessMsg'))
          e.target.reset()
          reset()
        } else {
          setIsSuccess(false)
        }
      })
      .catch(() => {
        setIsSuccess(false)
      })
  }

  return (
    <div className="w-full max-w-3xl bg-LightGray shadow-lg rounded-2xl mx-auto mt-10 ">
      <>
        <div className="w-full col-span-3  border border-LightGray shadow-lg rounded-md p-7">
          <div className="text-center">
            <Title
              text={t('subscribeForm')}
              underline="center"
              color="Secondary"
              style="text-center mb-6 capitalize"
              animation="bounceIn"
              type="subTitle"
            />
          </div>

          {!isSubmitSuccessful && (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="text-start-important"
            >
              <input
                type="hidden"
                value="36d5b65e-7bf2-44e6-b5b2-e6f6534671e4"
                {...register('apikey')}
              />
              <input
                type="hidden"
                value={`api key ${userName} `}
                {...register('subject')}
              />
              <input
                type="hidden"
                value="API FORM"
                {...register('from_name')}
              />
              <input
                type="checkbox"
                id=""
                className="hidden"
                style={{ display: 'none' }}
                {...register('botcheck')}
              ></input>

              <div className="mb-5">
                <label
                  htmlFor={t('apikeyTitle')}
                  className="block text-Secondary text-sm font-bold text-start-important mb-2  "
                >
                  {t('key')}
                </label>
                <input
                  type="text"
                  name="apikeyTitle"
                  placeholder={t('apikeyTitle')}
                  autoComplete="false"
                  className={`w-full px-4 py-3    border-1  rounded-md outline-none  focus:ring-1  ${
                    errors.apikeyTitle
                      ? 'border-Danger focus:border-Danger ring-Danger'
                      : 'border-Info focus:border-SecondaryHover ring-Secondary'
                  }`}
                  {...register('apikeyTitle', {
                    required: t('required'),
                    maxLength: 80,
                  })}
                />
                {errors.apikeyTitle && (
                  <div className="mt-1 text-Danger">
                    <small>{errors.apikeyTitle.message}</small>
                  </div>
                )}
              </div>

              <div className="mb-5">
                <label
                  htmlFor={t('secret')}
                  className="block text-Secondary text-sm font-bold text-start-important mb-2 "
                >
                  {t('secret')}
                </label>
                <input
                  id="secret"
                  type="text"
                  placeholder={t('secret')}
                  name="secret"
                  autoComplete="false"
                  className={`w-full px-4 py-3    border-1  rounded-md outline-none  focus:ring-1  ${
                    errors.secret
                      ? 'border-Danger focus:border-Danger ring-Danger'
                      : 'border-Info focus:border-SecondaryHover ring-Secondary'
                  }`}
                  {...register('secret', {
                    required: t('required'),
                  })}
                />
                {errors.secret && (
                  <div className="mt-1 text-Danger">
                    <small>{errors.secret.message}</small>
                  </div>
                )}
              </div>

              <div className="mb-5">
                <label
                  className="block text-Secondary text-sm font-bold text-start-important mb-2 "
                  htmlFor="exchange"
                >
                  {t('navbar.exchange')}
                </label>
                <select
                  className="w-full text-Secondary p-2  focus:outline-none focus:shadow-outline border"
                  id="exchange"
                  placeholder={t('navbar.exchange')}
                  name="exchange"
                  {...register('exchange', {
                    required: t('required'),
                  })}
                >
                  <option vlaue="Binance">{t('binance')}</option>
                  <option value="OKEX">{t('OKEX')}</option>
                </select>
                {errors.exchange && (
                  <div className="mt-1 text-Danger">
                    <small>{errors.exchange.message}</small>
                  </div>
                )}
              </div>
              <div className="mb-5">
                <label
                  className="block text-Secondary text-sm font-bold text-start-important mb-2 "
                  htmlFor="secret"
                >
                  {t('typeOfTrade')}
                </label>
                <select
                  className="w-full text-Secondary p-2  focus:outline-none focus:shadow-outline border"
                  id="type"
                  placeholder={t('typeOfTrade')}
                  name="type"
                  {...register('type', {
                    required: t('required'),
                  })}
                >
                  <option vlaue="spot">{t('spot')}</option>
                  <option value="future">{t('future')}</option>
                </select>
                {errors.type && (
                  <div className="mt-1 text-Danger">
                    <small>{errors.type.message}</small>
                  </div>
                )}
              </div>
              <div className="mb-6">
                <label className=" block text-Secondary font-bold">
                  <input
                    type="checkbox"
                    name="terms"
                    value="agree to the terms"
                    {...register('terms', {
                      required: t('requiredBox'),
                    })}
                    className="bg-Secondary text-Secondary "
                  />
                  <span className="text-sm px-2">{t('agree')}</span>
                </label>
                {errors.terms && (
                  <div className="mt-1 text-Danger">
                    <small>{errors.terms.message}</small>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-4 shadow-lg transition ease-in-out duration-500  hover:shadow-none text-Light  bg-Secondary rounded-md hover:bg-SecondaryHover focus:outline-none 0 px-7 umami--click--contact-submit"
              >
                {isSubmitting ? (
                  <svg
                    className="w-5 h-5 mx-auto text-Light animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  t('send')
                )}
              </button>
            </form>
          )}
          {isSubmitSuccessful && isSuccess && (
            <>
              <div className="flex flex-col items-center justify-center text-center text-white rounded-md">
                <svg
                  width="100"
                  height="100"
                  className="text-Secondary"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
                <Title
                  color="Secondary"
                  text={t('sendSuccess')}
                  underline="none"
                  type="subTitle"
                  style="text-center py-3"
                  animation="bounceIn"
                />

                <p className="text-gray-700 md:px-3">{Message}</p>
                <button
                  className="mt-6 text-Secondary focus:outline-none shadow-lg  rounded-2xl px-6 hover:shadow-sm border-2 border-LightGray transition-all duration-500 ease-in-out"
                  onClick={() => reset()}
                >
                  {t('back')}
                </button>
              </div>
            </>
          )}

          {isSubmitSuccessful && !isSuccess && (
            <div className="flex flex-col items-center justify-center text-center text-white rounded-md">
              <svg
                width="97"
                height="97"
                viewBox="0 0 97 97"
                className="text-Danger"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.335C19.554 11.0016 24.6985 7.56418 30.3604 5.21896C36.0222 2.87374 42.0906 1.66667 48.2189 1.66667C60.5957 1.66667 72.4655 6.58333 81.2172 15.335C89.9689 24.0867 94.8856 35.9566 94.8856 48.3333C94.8856 60.7101 89.9689 72.58 81.2172 81.3316C72.4655 90.0833 60.5957 95 48.2189 95Z"
                  stroke="CurrentColor"
                  strokeWidth="3"
                />
              </svg>

              <h3 className="text-2xl text-Danger py-7">{t('sendingError')}</h3>
              <p className="text-gray-300 md:px-3">{Message}</p>
              <button
                className="mt-5 focus:outline-none"
                onClick={() => reset()}
              >
                {t('try')}
              </button>
            </div>
          )}
        </div>
      </>
    </div>
  )
}
