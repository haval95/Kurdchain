import React from 'react'
import Title from '../../../Components/Title'
import CourseCard from '../../Cards/CourseCard'
import { useTranslation } from 'react-i18next'
import Paragraph from '../../../Components/Paragraph'
import ScrollAnimation from 'react-animate-on-scroll'
import NavigationButton from '../../../Components/NavigationButton'
import * as ROUTES from '../../../router'
export default function CoursesSection() {
  const { t } = useTranslation()

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
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
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
