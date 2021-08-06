import React from 'react'

import { useTranslation } from 'react-i18next'

export default function Form() {
  const { t } = useTranslation()
  return (
    <div className="w-full max-w-lg mt-10">
      <form className="bg-LightGray shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
        <div className="mb-4">
          <label
            className="block text-Secondary text-sm font-bold text-start-important mb-2"
            htmlFor="apikey"
          >
            {t('key')}
          </label>

          <input
            className="shadow appearance-none  rounded w-full py-2 px-3 text-Secondary   focus:outline-none focus:shadow-outline"
            id="apikey"
            name="apikey"
            type="text"
            placeholder={t('apikey')}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-Secondary text-sm font-bold text-start-important mb-2"
            htmlFor="secret"
          >
            {t('secret')}
          </label>

          <div className="mb-6">
            <input
              className="shadow appearance-none  rounded w-full py-2 px-3 text-Secondary mb-3   focus:outline-none focus:shadow-outline"
              id="secretkey"
              type="text"
              placeholder={t('secret')}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block text-Secondary text-sm font-bold text-start-important mb-2 "
            htmlFor="secret"
          >
            {t('typeOfTrade')}
          </label>

          <div className="mb-6">
            <select className="w-full text-Secondary p-2  focus:outline-none focus:shadow-outline">
              <option>{t('spot')}</option>
              <option>{t('future')}</option>
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label className=" block text-Secondary font-bold">
            <input
              type="checkbox"
              name="terms"
              className="bg-Secondary text-Secondary "
            />
            <span className="text-sm px-2">{t('agree')}</span>
          </label>
        </div>

        <div className="mb-6">
          <button
            className="shadow bg-Secondary hover:bg-SecondaryHover focus:shadow-outline focus:outline-none text-Light font-bold py-2 px-4 rounded"
            type="button"
          >
            {t('send')}
          </button>
        </div>
      </form>
    </div>
  )
}
