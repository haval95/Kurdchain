import React from 'react'
import ImageJumbotron from '../Components/ImageJumbotron'
import ContactJumbotron from '../Components/ContactJumbotron'
import { useSelector } from 'react-redux'
import { Redirect, useParams } from 'react-router-dom'
import ImageJumbotronLoader from '../Components/Loaders/ImageJumbotronLoader'
import LandscapeLoaderCourseNoShadow from '../Components/Loaders/LandscapeLoaderCourseNoShadow'
import { useTranslation } from 'react-i18next'
import { courseImage } from '../Helper/Domain'
import CourseDetailCard from '../Containers/Cards/CourseDetailCard'
import { useState, useEffect } from 'react'

export default function PlayCourse() {
  const { t } = useTranslation()

  const userCourses = useSelector(state => state.userCourses)
  const { id } = useParams()
  const [state, setState] = useState({ loading: true, data: [] })

  const getCourse = () => {
    const currentCorse = userCourses.data.bought.find(
      course => course.course_id == id
    )
    if (currentCorse) {
      return currentCorse
    } else if (currentCorse == null) {
      return null
    }
  }

  useEffect(() => {
    if (
      userCourses.loading == false &&
      Object.keys(userCourses.data).length > 0
    ) {
      setState({ loading: false, data: getCourse() })
    }
  }, [userCourses])

  return (
    <div>
      {state.loading == false ? (
        state.data == null ? (
          <Redirect to="/notfound" />
        ) : (
          <ImageJumbotron
            image={courseImage + state.data.course.image}
            title={
              t('currentLanguage') == 'kurdish'
                ? state.data.course.name_he
                : t('currentLanguage') == 'arabic'
                ? state.data.course.name_ar
                : state.data.course.name_en
            }
            detail={
              t('currentLanguage') == 'kurdish'
                ? state.data.course.description_he
                : t('currentLanguage') == 'arabic'
                ? state.data.course.description_ar
                : state.data.course.description_en
            }
          />
        )
      ) : (
        <ImageJumbotronLoader />
      )}

      {state.loading == false ? (
        state.data == null ? (
          <Redirect to="/notfound" />
        ) : (
          <>
            <div className="bg-Light  px-6  md:px-24 py-10 text-start grid-cols-12">
              <div className=" ">
                <iframe
                  className="hidden md:block"
                  src={state.data.course.link_video}
                  width="100%"
                  height="500"
                  allowFullScreen
                  frameBorder="0"
                ></iframe>
                <iframe
                  className="block md:hidden"
                  src={state.data.course.link_video}
                  width="100%"
                  height="300"
                  allowFullScreen
                  frameBorder="0"
                ></iframe>
              </div>
              <div className="col-span-12 md:col-span-4 lg:col-span-3 justify-self-center w-full  justify-center  ">
                <CourseDetailCard
                  duration={
                    state.data.course.time +
                    '   ' +
                    (t('currentLanguage') == 'kurdish'
                      ? state.data.course.duration.name_he
                      : t('currentLanguage') == 'arabic'
                      ? state.data.course.duration.name_ar
                      : state.data.course.duration.name_en + '(s)')
                  }
                  level={
                    t('currentLanguage') == 'kurdish'
                      ? state.data.course.level.name_he
                      : t('currentLanguage') == 'arabic'
                      ? state.data.course.level.name_ar
                      : state.data.course.level.name_en
                  }
                  language={
                    t('currentLanguage') == 'kurdish'
                      ? state.data.course.language.name_he
                      : t('currentLanguage') == 'arabic'
                      ? state.data.course.language.name_ar
                      : state.data.course.language.name_en
                  }
                  instructor={
                    t('currentLanguage') == 'kurdish'
                      ? state.data.course.instructor.name_he
                      : t('currentLanguage') == 'arabic'
                      ? state.data.course.instructor.name_ar
                      : state.data.course.instructor.name_en
                  }
                  price={state.data.course.price}
                  type={
                    t('currentLanguage') == 'kurdish'
                      ? state.data.course.type.name_he
                      : t('currentLanguage') == 'arabic'
                      ? state.data.course.type.name_ar
                      : state.data.course.type.name_en
                  }
                  id={state.data.course_id}
                />
              </div>
            </div>
          </>
        )
      ) : (
        <div className="my-6">
          <LandscapeLoaderCourseNoShadow />
        </div>
      )}

      <ContactJumbotron />
    </div>
  )
}
