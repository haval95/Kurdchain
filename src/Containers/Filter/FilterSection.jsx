import React, { useEffect, useState } from 'react'
import { PropTypes } from 'prop-types'

import { useTranslation } from 'react-i18next'
import Title from '../../Components/Title'
export default function FilterSection({ state }) {
  const { t } = useTranslation()
  const [collapse, setcollapse] = useState(state)
  useEffect(() => {
    setcollapse(state)
  }, [state])
  return (
    <div
      className={`${
        collapse ? 'transform translate-y-0' : 'transform translate-y-full'
      } fixed  p-5 lg:rounded-2xl   w-screen  bg-LightGray shadow-md text-center h-100 lg:h-auto   top-0   justify-center z-51 overflow-y-auto  transition-all ease-in-out duration-500 lg:space-y-8  lg:w-full lg:static lg:z-40  lg:transform-none  `}
    >
      <div>
        <Title text={t('filterBy')} color="Secondary" />
      </div>
      <hr className="w-full my-5  text-GrayBorder"></hr>
      <div className=" w-full text-start justify-start items-center grid">
        <Title
          text={t('type')}
          color="Secondary"
          type="smallSubTitle"
          underline="none"
          style="text-start justify-self-start mb-4"
        />
        <div className="block">
          <label className="block items-center">
            <input
              type="checkbox"
              className="  form-checkbox mx-2 border  border-Secondary bg-Secondary text-indigo-600 h-4 w-4"
            />
            <span className="ml-2">Option 1</span>
          </label>

          <label checkbox="block items-center">
            <input
              type="checkbox"
              className="  form-checkbox mx-2 border  border-Secondary bg-Secondary  h-4 w-4"
            />
            <span className="ml-2">Option 2</span>
          </label>

          <label className="block items-center">
            <input
              type="checkbox"
              className="  form-checkbox mx-2 border  border-Secondary bg-Secondary text-pink-600 h-4 w-4"
            />
            <span className="ml-2">Option 3</span>
          </label>
        </div>
        <hr className="w-full mt-5  text-GrayBorder"></hr>
        <Title
          text={t('instructor')}
          color="Secondary"
          type="smallSubTitle"
          underline="none"
          style="text-start justify-self-start my-4"
        />
        <div className="block">
          <label className="block items-center">
            <input
              type="checkbox"
              className="  form-checkbox mx-2 border  border-Secondary bg-Secondary  h-4 w-4"
            />
            <span className="ml-2">Option 1</span>
          </label>

          <label checkbox="block items-center">
            <input
              type="checkbox"
              className="  form-checkbox mx-2 border  border-Secondary bg-Secondary  h-4 w-4"
            />
            <span className="ml-2">Option 2</span>
          </label>

          <label className="block items-center">
            <input
              type="checkbox"
              className="  form-checkbox mx-2 border  border-Secondary bg-Secondary text-pink-600 h-4 w-4"
            />
            <span className="ml-2">Option 3</span>
          </label>
        </div>
        <hr className="w-full mt-5  text-GrayBorder"></hr>
        <Title
          text={t('price')}
          color="Secondary"
          type="smallSubTitle"
          underline="none"
          style="text-start justify-self-start my-4"
        />
        <div className="block">
          <label className="block items-center">
            <input
              type="radio"
              name="price"
              className="  form-checkbox mx-2 border  border-Secondary bg-Secondary  h-4 w-4"
            />
            <span className="ml-2">$1 - $100</span>
          </label>

          <label checkbox="block items-center">
            <input
              type="radio"
              name="price"
              className="  form-checkbox mx-2 border  border-Secondary bg-Secondary  h-4 w-4"
            />
            <span className="ml-2">$100 - $500</span>
          </label>

          <label className="block items-center">
            <input
              type="radio"
              name="price"
              className="  form-checkbox mx-2 border  border-Secondary bg-Secondary text-pink-600 h-4 w-4"
            />
            <span className="ml-2">$500 - $1000</span>
          </label>

          <label className="block items-center">
            <input
              type="radio"
              name="price"
              className="  form-checkbox mx-2 border  border-Secondary bg-Secondary text-pink-600 h-4 w-4"
            />
            <span className="ml-2 capitalize">{t('over')} $1000</span>
          </label>

          <label className="block items-center">
            <input
              type="radio"
              name="price"
              className="  form-checkbox mx-2 border  border-Secondary bg-Secondary text-pink-600 h-4 w-4"
            />
            <span className="ml-2 capitalize">{t('all')} </span>
          </label>
        </div>
        <hr className="w-full mt-5  text-GrayBorder"></hr>
        <Title
          text={t('language')}
          color="Secondary"
          type="smallSubTitle"
          underline="none"
          style="text-start justify-self-start my-4"
        />
        <div className="block">
          <label className="block items-center">
            <input
              type="checkbox"
              className="  form-checkbox mx-2 border  border-Secondary bg-Secondary  h-4 w-4"
            />
            <span className="ml-2">Option 1</span>
          </label>

          <label checkbox="block items-center">
            <input
              type="checkbox"
              className="  form-checkbox mx-2 border  border-Secondary bg-Secondary  h-4 w-4"
            />
            <span className="ml-2">Option 2</span>
          </label>

          <label className="block items-center">
            <input
              type="checkbox"
              className="  form-checkbox mx-2 border  border-Secondary bg-Secondary text-pink-600 h-4 w-4"
            />
            <span className="ml-2">Option 3</span>
          </label>
        </div>
      </div>
      <div className="block mb-32 ">
        <hr className="w-full mt-5  text-GrayBorder"></hr>
        <button className="bg-Secondary capitalize hover:bg-SecondaryHover  my-3 transition ease-in-out duration-500 text-Light font-bold py-2 w-full rounded">
          {t('apply')}
        </button>
      </div>
    </div>
  )
}

FilterSection.propTypes = {
  state: PropTypes.bool,
}

FilterSection.defaultProps = {
  state: false,
}
