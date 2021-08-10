import React from 'react'
import Title from '../../../Components/Title'
import NewsCard from '../../Cards/NewsCard'
import { useTranslation } from 'react-i18next'
import Paragraph from '../../../Components/Paragraph'
import ScrollAnimation from 'react-animate-on-scroll'
import NavigationButton from '../../../Components/NavigationButton'
import * as ROUTES from '../../../router'
import { useSelector } from 'react-redux'
import uuid from 'react-uuid'

export default function NewSection() {
  const { t } = useTranslation()
  const news = useSelector(state => state.news)

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
        {news.latestNews &&
          news.latestNews.map(EachNews => {
            return (
              <NewsCard
                id={EachNews.id}
                title={EachNews.title}
                image={EachNews.image}
                description={EachNews.description}
                writer={EachNews.writer}
                key={uuid()}
              />
            )
          })}
      </div>
      <div className="grid justify-center mt-16">
        <NavigationButton
          location={ROUTES.NEWS_ROUTE}
          text={t('seemore')}
          style="px-10 capitalize "
          animation="swing"
        />
      </div>
    </div>
  )
}
