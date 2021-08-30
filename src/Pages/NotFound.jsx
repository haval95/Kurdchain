import React from 'react'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from '../Assets/Images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NotFound() {
  const { t } = useTranslation()
  return (
    <div className=" grid p-10 font-bold justify-center items-center  ">
      <img
        src={logo}
        alt=""
        className="justify-self-center  p-6  mt-3 flex space-x-2  items-center   max-h-40 "
      />

      <div className="bg-Light text-center gap-2 p-10 bg-opacity-90 shadow-inner grid justify-center border border-dashed border-Primary ">
        <FontAwesomeIcon
          icon="exclamation-circle"
          className="text-Danger text-center justify-self-center"
          size="3x"
        />
        <h1 className="text-2xl text-Danger">{t('notFound.oops')}</h1>
        <h1 className="">{t('notFound.explain')}</h1>
        <Link
          to="/"
          className="justify-self-center  p-2 border border-Primary rounded-xl mt-3 flex space-x-2  items-center hover:bg-Primary hover:text-Light transition duration-300 ease-in-out"
        >
          {t('navbar.home')}
        </Link>
      </div>
    </div>
  )
}
