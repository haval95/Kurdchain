import React from 'react'
import Title from '../../../Components/Title'
import CourseCard from '../../Cards/CourseCard'
import { useTranslation } from 'react-i18next'
import Paragraph from '../../../Components/Paragraph'
import ScrollAnimation from 'react-animate-on-scroll'
import NavigationButton from '../../../Components/NavigationButton'
import { useSelector } from 'react-redux'
import * as ROUTES from '../../../router'
import uuid from 'react-uuid'
import PortraitLoader from '../../../Components/Loaders/PortraitLoader'

export default function CoursesSection() {
  const { t } = useTranslation()
  const coursesData = useSelector(state => state.courses)

  return (
    <div className="grid ">
      <div className="justify-self-center mb-10 text-center grid gap-4">
        <ScrollAnimation animateIn="bounceIn">
          <Title text={t('navbar.courses')} type="title" underline="center" />
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomInUp">
          <Paragraph
            text={t('home.courseSlogan')}
            style="text-lg"
            textalign="text-center"
          />
        </ScrollAnimation>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-center mb-16">
        {coursesData.data.length ? (
          coursesData.data.slice(0, 4).map(course => {
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
                language={
                  t('currentLanguage') == 'kurdish'
                    ? course.language.name_he
                    : t('currentLanguage') == 'arabic'
                    ? course.language.name_ar
                    : course.language.name_en
                }
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
                instructor={
                  t('currentLanguage') == 'kurdish'
                    ? course.instructor.name_he
                    : t('currentLanguage') == 'arabic'
                    ? course.instructor.name_ar
                    : course.instructor.name_en
                }
                duration={
                  t('currentLanguage') == 'kurdish'
                    ? course.duration.name_he
                    : t('currentLanguage') == 'arabic'
                    ? course.duration.name_ar
                    : course.duration.name_en + '(s)'
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
            <PortraitLoader />
          </>
        )}
      </div>
      <div className="grid justify-center">
        <NavigationButton
          location={ROUTES.COURSES_ROUTE}
          text={t('seemore')}
          style="px-10 capitalize"
          animation="swing"
        />
      </div>
    </div>
  )
}
