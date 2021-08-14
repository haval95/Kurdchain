import React, { useState } from 'react'
import Title from '../Components/Title'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import CourseCard from '../Containers/Cards/CourseCard'
import ImageJumbotron from '../Components/ImageJumbotron'
import img from '../Assets/Images/signal.png'
import FilterSection from '../Containers/Filter/FilterSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import uuid from 'react-uuid'
import PortraitLoader from '../Components/Loaders/PortraitLoader'
export default function Courses() {
  const { t } = useTranslation()
  const [state, setstate] = useState(false)
  const coursesData = useSelector(state => state.courses)

  return (
    <>
      <button
        onClick={() => setstate(!state)}
        className={` fixed bottom-0 py-2  font-semibold bg-Secondary px-3 w-full   z-52 text-Light grid grid-flow-col gap-2 justify-center items-center lg:hidden `}
      >
        <FontAwesomeIcon icon="filter" size="sm" />
        <div> {t('filterBy')}</div>
      </button>

      <ImageJumbotron
        title={t('navbar.courses')}
        detail={t('home.courseSlogan')}
        image={img}
      />
      <div className="grid grid-cols-12">
        <div className="lg:col-span-3 lg:flex lg:flex-col lg:py-16 lg:mx-5">
          <FilterSection state={state} />
        </div>

        <div className="grid  gap-5 lg:gap-10 py-16 col-span-12 lg:col-span-9  ">
          <div className="  justify-self-center text-start ">
            <Title
              text={t('navbar.courses')}
              style="mb-14 "
              animation="bounceIn"
            />
            <div className=" grid gap-8 grid-cols-1 sm:gap-5 md:gap-8 sm:grid-cols-2 xl:grid-cols-3 justify-center  mb-16">
              {coursesData.data.length ? (
                coursesData.data.map(course => {
                  return (
                    <CourseCard
                      key={uuid()}
                      id={course.id}
                      name={
                        t('currentLanguage') == 'kurdish'
                          ? course.name_he
                          : t('currentLanguage') == 'arabic'
                          ? course.name_ar
                          : course.name_en
                      }
                      language={course.language.name}
                      image={course.image}
                      price={course.price}
                      date={course.created_at}
                      description={
                        t('currentLanguage') == 'kurdish'
                          ? course.description_he
                          : t('currentLanguage') == 'arabic'
                          ? course.description_ar
                          : course.description_en
                      }
                      instructor={course.instructor.name}
                      duration={
                        t('currentLanguage') == 'kurdish'
                          ? course.duration.name_he
                          : t('currentLanguage') == 'arabic'
                          ? course.duration.name_ar
                          : course.duration.name_en
                      }
                      time={course.time}
                    />
                  )
                })
              ) : (
                <>
                  <PortraitLoader />
                  <PortraitLoader />
                  <PortraitLoader />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
