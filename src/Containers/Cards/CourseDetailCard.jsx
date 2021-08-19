import React from 'react'
import { PropTypes } from 'prop-types'
import { useTranslation } from 'react-i18next'

import Title from '../../Components/Title'
import Button from '../../Components/Button'
import {
  OpenPaymentModal,
  OpenCourseRequestedModal,
} from '../../Redux/Modals/ModalActions'
import { useDispatch, useSelector } from 'react-redux'
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
  const dispatch = useDispatch()
  const userCourses = useSelector(state => state.userCourses)

  const getButton = () => {
    if (userCourses.loading === false) {
      if (Object.keys(userCourses.data).length > 0) {
        if (
          userCourses.data.bought.filter(course => {
            return course.course_id === id
          }).length
        ) {
          return ''
        } else if (
          userCourses.data.request.filter(course => {
            return course.course_id === id
          }).length
        ) {
          return (
            <Button
              clickAction={() => dispatch(OpenCourseRequestedModal())}
              text={t('requested')}
              style="my-4 "
              color={'Secondary'}
            />
          )
        }
      }
      return (
        <Button
          clickAction={() => dispatch(OpenPaymentModal(id))}
          text={t('buy')}
          style="my-4 "
        />
      )
    }
  }

  return (
    <div className="bg-LightGray shadow p-5 rounded-xl    ">
      <Title
        text={t('specification')}
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
          {userCourses.loading === true ? 'loading' : getButton()}
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
