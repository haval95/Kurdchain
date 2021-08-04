import React from 'react'

import ImageJumbotron from '../Components/ImageJumbotron'
import Title from '../Components/Title'
import NewsCard from '../Containers/Cards/NewsCard'
import img from '../Assets/Images/newsbg.png'
import { useTranslation } from 'react-i18next'
import Button from '../Components/Button'

export default function News() {
  const { t } = useTranslation()
  return (
    <>
      <ImageJumbotron
        title={t('navbar.news')}
        detail={t('newsPageSlogan')}
        image={img}
      />
      <div className=" bg-Light grid px-10  md:px-24 py-16">
        <Title
          text={t('navbar.news')}
          style="sm:uppercase mb-10"
          underline="start"
          animation="bounceIn"
        />
        <div className="grid gap-10 justify-center grid-cols-1 sm:grid-cols-2  px-4  md:grid-cols-1 lg:grid-cols-2 mb-16">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
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
    </>
  )
}
