import React from 'react'
import Title from '../../../Components/Title'
import NewsCard from '../../Cards/NewsCard'
import { useTranslation } from 'react-i18next'
import Paragraph from '../../../Components/Paragraph'
import ScrollAnimation from 'react-animate-on-scroll'
import NavigationButton from '../../../Components/NavigationButton'
import * as ROUTES from '../../../router'
export default function NewSection() {
  const { t } = useTranslation()

  return (
    <div className="grid ">
      <div className="justify-self-center mb-10 text-center grid gap-4">
        <ScrollAnimation animateIn="bounceIn">
          <Title text={t('news')} type="title" underline="center" />
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomInUp">
          <Paragraph
            text={t('newsSlogan')}
            style="text-lg"
            textalign="text-center"
          />
        </ScrollAnimation>
      </div>

      <div className="grid gap-10 justify-center grid-cols-1 sm:grid-cols-2  px-4  md:grid-cols-1 lg:grid-cols-2">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <div className="grid justify-center mt-16">
        <NavigationButton
          location={ROUTES.COURSES_ROUTE}
          text={t('seemore')}
          style="px-10 capitalize "
          animation="swing"
        />
      </div>
    </div>
  )
}
