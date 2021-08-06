import React from 'react'
import { PropTypes } from 'prop-types'
import { useTranslation } from 'react-i18next'

import Title from '../../Components/Title'
import Button from '../../Components/Button'

export default function CourseDetailCard({
  duration,
  level,
  language,
  instructor,
  price,
  type,
  id,
}) {
  const { t } = useTranslation()
  return (
    <div className="bg-LightGray shadow p-5 rounded-xl    ">
      <Title
        text="Specifications"
        type="subTitle"
        underline="none"
        style="text-center"
      />
      <hr className="text-GrayBorder my-2"></hr>
      <div className="grid grid-cols-2 items-center justify-items-center text-start-important ">
        <p>{t('duration')}</p> <p>{duration}</p>
      </div>
      <hr className="text-GrayBorder my-2"></hr>
      <div className="grid grid-cols-2 items-center justify-items-center text-start-important">
        <p>{t('level')}</p> <p>{level}</p>
      </div>
      <hr className="text-GrayBorder my-2"></hr>
      <div className="grid grid-cols-2 items-center justify-items-center text-start-important">
        <p>{t('language')}</p> <p>{language}</p>
      </div>
      <hr className="text-GrayBorder my-2"></hr>
      <div className="grid grid-cols-2 items-center justify-items-center text-start-important">
        <p>{t('instructor')}</p> <p>{instructor}</p>
      </div>
      <hr className="text-GrayBorder my-2"></hr>
      <div className="grid grid-cols-2 items-center justify-items-center text-start-important">
        <p>{t('price')}</p> <p>{price}</p>
      </div>
      <hr className="text-GrayBorder my-2"></hr>
      <div className="grid grid-cols-2 items-center justify-items-center text-start-important">
        <p>{t('type')}</p> <p>{type}</p>
      </div>
      <div className=" my-2 grid">
        <div className="w-28 justify-self-center  items-center">
          <Button clickAction={() => alert(id)} text="button" style="my-4 " />
        </div>
      </div>
    </div>
  )
}
CourseDetailCard.propTypes = {
  duration: PropTypes.string,
  level: PropTypes.string,
  language: PropTypes.string,
  instructor: PropTypes.string,
  price: PropTypes.number,
  type: PropTypes.string,
  id: PropTypes.string,
}

CourseDetailCard.defaultProps = {
  duration: '6',
  level: 'sthn',
  language: 'Kurdish',
  instructor: 'mohamed',
  price: 10,
  type: 'forex',
  id: '0',
}
