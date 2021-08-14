import React from 'react'
import { useTranslation } from 'react-i18next'
import ImageJumbotron from '../Components/ImageJumbotron'
import img from '../Assets/Images/aboutbg.png'
import Title from '../Components/Title'
import { useForm, useWatch } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: 'onTouched',
  })
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [Message, setMessage] = React.useState('')

  const userName = useWatch({ control, name: 'name', defaultValue: 'Someone' })

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
          setMessage(t('sendSuccessMsg'))
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

  const { t } = useTranslation()
  return (
    <>
      <ImageJumbotron title={t('navbar.contact')} detail="" image={img} />
      <div className="bg-Light grid  md:px-16 lg:px-24 py-16">
        <div className="  mb-10 px-8 text-start grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-5  gap-8 ">
            <div className="flex flex-col space-y-8 col-span-2 text-start">
              <Title
                text={t('footer.getInTouch')}
                underline="start"
                style="text-start mb-6"
                animation="bounceIn"
              />

              <div className=" text-start-importan font-medium   pb-1 flex items-center  ">
                <FontAwesomeIcon
                  size="2x"
                  className="text-Secondary"
                  icon="phone-alt"
                />
                <div className="flex flex-col">
                  <a
                    href="tel:+9647701234567"
                    className="text-start-importan px-2 hover:text-PrimaryHover"
                  >
                    009647701234567
                  </a>
                  <a
                    href="tel:+9647701234567"
                    className="text-start-importan px-2 hover:text-PrimaryHover"
                  >
                    009647701234567
                  </a>
                </div>
              </div>

              <div className=" text-start-importan font-medium   pb-1 flex items-center ">
                <FontAwesomeIcon
                  size="2x"
                  className="text-Secondary   "
                  icon="envelope"
                />
                <a
                  href="mailto:someone@yoursite.com"
                  className="text-start-importan px-2 hover:text-PrimaryHover"
                >
                  example@example.com
                </a>
              </div>

              <div className=" text-start-importan font-medium   pb-1  flex items-center">
                <FontAwesomeIcon
                  size="2x"
                  className="text-Secondary "
                  icon="map-marked-alt"
                />
                <span className="text-center px-2 hover:text-PrimaryHover">
                  the location will come here
                </span>
              </div>
              <div className="grid  grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center text-center  gap-4 content-center ">
                <a
                  href="#"
                  className=" text-2xl p-3 shadow-lg transition ease-in-out duration-500  rounded-full hover:shadow-none  border-2 border-LightGray    text-Secondary "
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                </a>
                <a
                  href="#"
                  className=" text-2xl py-2  p-3 shadow-lg transition ease-in-out duration-500  rounded-full hover:shadow-none  border-2 border-LightGray   text-Secondary"
                >
                  <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                </a>
                <a
                  href="#"
                  className=" text-2xl py-2   p-3 shadow-lg transition ease-in-out duration-500  rounded-full hover:shadow-none  border-2 border-LightGray  text-Secondary"
                >
                  <FontAwesomeIcon icon={['fab', 'twitter']} />
                </a>
                <a
                  href="#"
                  className=" text-2xl py-2   p-3 shadow-lg transition ease-in-out duration-500  rounded-full hover:shadow-none  border-2 border-LightGray  text-Secondary"
                >
                  <FontAwesomeIcon icon={['fab', 'telegram-plane']} />
                </a>
              </div>
            </div>
            <>
              <div className="w-full col-span-3  border border-LightGray shadow-lg rounded-md p-7">
                <div className="text-center">
                  <Title
                    text={t('talk')}
                    underline="center"
                    style="text-center"
                    animation="bounceIn"
                    type="subTitle"
                  />
                  <p className="text-Gray my-3">{t('fillinContactForm')}</p>
                </div>

                {!isSubmitSuccessful && (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="text-start-importan"
                  >
                    <input
                      type="hidden"
                      value="36d5b65e-7bf2-44e6-b5b2-e6f6534671e4"
                      {...register('apikey')}
                    />
                    <input
                      type="hidden"
                      value={`${userName} sent a message from Kurdchain`}
                      {...register('subject')}
                    />
                    <input
                      type="hidden"
                      value="Kurdchain"
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
                      <label htmlFor={t('name')} className="text-sm ">
                        {t('name')}
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder={t('exname')}
                        autoComplete="false"
                        className={`w-full px-4 py-3    border-b-2  rounded-md outline-none  focus:ring-4  ${
                          errors.name
                            ? 'border-Danger focus:border-Danger ring-Danger'
                            : 'border-Info focus:border-PrimaryHover ring-Primary'
                        }`}
                        {...register('name', {
                          required: t('nameError'),
                          maxLength: 80,
                        })}
                      />
                      {errors.name && (
                        <div className="mt-1 text-Danger">
                          <small>{errors.name.message}</small>
                        </div>
                      )}
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor={t('email')}
                        className="text-start-importan"
                      >
                        {t('email')}
                      </label>
                      <input
                        id="email_address"
                        type="email"
                        placeholder="you@email.com"
                        name="email"
                        autoComplete="false"
                        className={`w-full px-4 py-3    border-b-2  rounded-md outline-none  focus:ring-4  ${
                          errors.email
                            ? 'border-Danger focus:border-Danger ring-Danger'
                            : 'border-Info focus:border-PrimaryHover ring-Primary'
                        }`}
                        {...register('email', {
                          required: t('emailError'),
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: t('wrongEmailError'),
                          },
                        })}
                      />
                      {errors.email && (
                        <div className="mt-1 text-Danger">
                          <small>{errors.email.message}</small>
                        </div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor={t('message')}
                        className="text-start-importan"
                      >
                        {t('message')}
                      </label>
                      <textarea
                        name="message"
                        placeholder={t('exmessage')}
                        className={`w-full px-4 py-3    border-b-2  rounded-md outline-none  h-36  focus:ring-4  ${
                          errors.message
                            ? 'border-Danger focus:border-Danger ring-Danger'
                            : 'border-Info focus:border-PrimaryHover ring-Primary'
                        }`}
                        {...register('message', {
                          required: t('msgError'),
                        })}
                      />
                      {errors.message && (
                        <div className="mt-1 text-Danger">
                          <small>{errors.message.message}</small>
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 text-Light transition-colors bg-Primary rounded-md hover:bg-PrimaryHover focus:outline-none 0 px-7 umami--click--contact-submit"
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
                        className="text-Primary"
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
                        text={t('sendSuccess')}
                        underline="none"
                        type="subTitle"
                        style="text-center py-3"
                        animation="bounceIn"
                      />

                      <p className="text-gray-700 md:px-3">{Message}</p>
                      <button
                        className="mt-6 text-Primary focus:outline-none shadow-lg  rounded-2xl px-6 hover:shadow-sm border-2 border-LightGray transition-all duration-500 ease-in-out"
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

                    <h3 className="text-2xl text-Danger py-7">
                      {t('sendingError')}
                    </h3>
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
        </div>
      </div>
    </>
  )
}
