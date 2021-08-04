import React, { useState } from 'react'
import Title from '../Components/Title'

import { useTranslation } from 'react-i18next'
import CourseCard from '../Containers/Cards/CourseCard'
import ImageJumbotron from '../Components/ImageJumbotron'
import img from '../Assets/Images/signal.png'
import FilterSection from '../Containers/Filter/FilterSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../Components/Button'
export default function Courses() {
  const { t } = useTranslation()
  const [state, setstate] = useState(false)
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

        <div className="grid  gap-5 lg:gap-10 py-16 col-span-9  ">
          <div className="  justify-self-center ">
            <Title text={t('navbar.courses')} style="mb-14" />
            <div className=" grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-center  mb-16">
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </div>
          </div>
          <div className="justify-self-center ">
            <Button
              text={t('seemore')}
              textcolor="Secondary"
              style="px-3"
              color="SecondaryLight"
            />
          </div>
        </div>
      </div>
    </>
  )
}
