import React, { useEffect, useState } from 'react'
import { PropTypes } from 'prop-types'
import uuid from 'react-uuid'
import { useTranslation } from 'react-i18next'
import Title from '../../Components/Title'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FilterFunctions from './FilterFunctions'

export default function FilterSection({ state }) {
  const { t } = useTranslation()
  const { filterData, handleChange, type, language, instructor } =
    FilterFunctions()

  const filters = useSelector(state => state.Filters)

  const [collapse, setcollapse] = useState(state)
  useEffect(() => {
    setcollapse(state)
  }, [state])
  return (
    <>
      <div
        className={`${
          collapse ? 'transform translate-y-0' : 'transform translate-y-full'
        } fixed  p-5 lg:rounded-2xl   w-screen  bg-LightGray shadow-md text-center h-100 lg:h-auto   top-0   justify-center z-51 overflow-y-auto  transition-all ease-in-out duration-500 lg:space-y-8  lg:w-full lg:static lg:z-40  lg:transform-none  `}
      >
        <div>
          <Title text={t('filterBy')} color="Secondary" />
        </div>
        <hr className="w-full my-5  text-GrayBorder"></hr>
        <form>
          <div className=" w-full text-start-important justify-start items-center grid">
            <Title
              text={t('type')}
              color="Secondary"
              type="smallSubTitle"
              underline="none"
              style="text-start-important justify-self-start mb-4"
            />
            <div className="block">
              {filters.type
                ? filters.type.map(eachtype => {
                    return (
                      <label className="block items-center" key={uuid()}>
                        <input
                          type="checkbox"
                          name="type"
                          checked={type.includes(eachtype.name_en)}
                          id={eachtype.name_en}
                          onChange={handleChange}
                          className="  form-checkbox mx-2 border  border-Secondary bg-Secondary text-indigo-600 h-4 w-4"
                        />
                        <span className="ml-2">
                          {t('currentLanguage') == 'kurdish'
                            ? eachtype.name_he
                            : t('currentLanguage') == 'arabic'
                            ? eachtype.name_ar
                            : eachtype.name_en}
                        </span>
                      </label>
                    )
                  })
                : 'loading'}
            </div>
            <hr className="w-full mt-5  text-GrayBorder"></hr>
            <Title
              text={t('instructor')}
              color="Secondary"
              type="smallSubTitle"
              underline="none"
              style="text-start-important justify-self-start my-4"
            />
            <div className="block">
              {filters.instructor
                ? filters.instructor.map(eachInstructor => {
                    return (
                      <label className="block items-center" key={uuid()}>
                        <input
                          type="checkbox"
                          name="instructor"
                          checked={instructor.includes(eachInstructor.name_en)}
                          id={eachInstructor.name_en}
                          onChange={handleChange}
                          className="  form-checkbox mx-2 border  border-Secondary bg-Secondary  h-4 w-4"
                        />
                        <span className="ml-2">
                          {t('currentLanguage') == 'kurdish'
                            ? eachInstructor.name_he
                            : t('currentLanguage') == 'arabic'
                            ? eachInstructor.name_ar
                            : eachInstructor.name_en}
                        </span>
                      </label>
                    )
                  })
                : 'loading'}
            </div>
            <hr className="w-full mt-5  text-GrayBorder"></hr>
            <Title
              text={t('price')}
              color="Secondary"
              type="smallSubTitle"
              underline="none"
              style="text-start-important justify-self-start my-4"
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
              style="text-start-important justify-self-start my-4"
            />
            <div className="block">
              {filters.language
                ? filters.language.map(eachLanguage => {
                    return (
                      <label className="block items-center" key={uuid()}>
                        <input
                          checked={language.includes(eachLanguage.name_en)}
                          type="checkbox"
                          name="language"
                          id={eachLanguage.name_en}
                          onChange={handleChange}
                          className="  form-checkbox mx-2 border  border-Secondary bg-Secondary  h-4 w-4"
                        />
                        <span className="ml-2">
                          {t('currentLanguage') == 'kurdish'
                            ? eachLanguage.name_he
                            : t('currentLanguage') == 'arabic'
                            ? eachLanguage.name_ar
                            : eachLanguage.name_en}
                        </span>
                      </label>
                    )
                  })
                : 'loading'}
            </div>
          </div>
          <div className="block mb-32 ">
            <hr className="w-full mt-5  text-GrayBorder"></hr>
            <button
              type="button"
              onClick={filterData}
              className=" hidden lg:block bg-Secondary capitalize hover:bg-SecondaryHover  my-3 transition ease-in-out duration-500 text-Light font-bold py-2 w-full rounded"
            >
              <FontAwesomeIcon icon="filter" size="sm" />
              <span className="px-1"> {t('apply')}</span>
            </button>
          </div>
        </form>
      </div>
      <button
        type="button"
        onClick={filterData}
        className={`${
          state ? 'fixed' : 'hidden'
        }  bottom-0 py-2 capitalize  font-semibold bg-Secondary px-3 w-full   z-52 text-Light grid grid-flow-col gap-2 justify-center items-center lg:hidden `}
      >
        <FontAwesomeIcon icon="filter" size="sm" />
        <span className="px-1"> {t('apply')}</span>
      </button>
    </>
  )
}

FilterSection.propTypes = {
  state: PropTypes.bool,
}

FilterSection.defaultProps = {
  state: false,
}
