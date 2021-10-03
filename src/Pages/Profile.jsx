import React from 'react'
import { useSelector } from 'react-redux'
import uuid from 'react-uuid'
import { useTranslation } from 'react-i18next'

import TopProfile from '../Containers/Sections/Profile/TopProfile'
import Header from '../Containers/Cards/ProfileCardsHeader'
import Card from '../Containers/Cards/ProfileContentCard'
import logo from '../Assets/Images/logo.svg'
import LandscapeLoaderCourseLtr from '../Components/Loaders/LandscapeLoaderCourseLtr'

export default function Profile() {
  const { t } = useTranslation()
  const userCourses = useSelector(state => state.userCourses)

  return (
    <div className="mb-8">
      <TopProfile />

      <Header />

      {userCourses.loading == false &&
      Object.keys(userCourses.data).length > 0 ? (
        userCourses.data.bought.length ? (
          userCourses.data.bought.map(course => {
            return (
              <div key={uuid()}>
                <Card
                  title={
                    t('currentLanguage') == 'kurdish'
                      ? course.course.name_he
                      : t('currentLanguage') == 'arabic'
                      ? course.course.name_ar
                      : course.course.name_en
                  }
                  content={
                    t('currentLanguage') == 'kurdish'
                      ? course.course.description_he
                      : t('currentLanguage') == 'arabic'
                      ? course.course.description_ar
                      : course.course.description_en
                  }
                  duration={
                    course.course.time +
                    ' ' +
                    (t('currentLanguage') == 'kurdish'
                      ? course.course.duration.name_he
                      : t('currentLanguage') == 'arabic'
                      ? course.course.duration.name_ar
                      : course.course.duration.name_en)
                  }
                  date={course.expire_date}
                  id={course.course_id}
                />
              </div>
            )
          })
        ) : (
          <div className="text-blue text-xl font-bold text-center   grid  md:px-20 md:mx-20 p-5 ">
            <div className=" grid  font-bold    ">
              <div className="bg-white text-center gap-2 p-10 bg-opacity-90 shadow-inner border border-PrimaryLight groupgrid justify-center  rounded-3xl">
                <h1 className="text-2xl text-Warning font-black ">
                  {t('profile.oops')}
                </h1>
                <h1 className="text-PrimaryLight">{t('profile.explain')}</h1>

                <img
                  src={logo}
                  alt=""
                  className="justify-self-center min-w-full p-2  mt-3 flex space-x-2  items-center   max-h-40 "
                />
              </div>
            </div>
          </div>
        )
      ) : (
        <div className="-mt-10">
          <LandscapeLoaderCourseLtr />
        </div>
      )}
    </div>
  )
}
