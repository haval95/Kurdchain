import React from 'react'
import Title from '../../../Components/Title'
import Paragraph from '../../../Components/Paragraph'
import PricingCard from '../../Cards/PricingCard'

import { useTranslation } from 'react-i18next'
import Form from './Form'

export default function ApiSection() {
  const { t } = useTranslation()

  return (
    <>
      <div className=" px-4 mb-10  text-start grid gap-6 ">
        <Title
          text={t('api')}
          underline="start"
          style="text-start"
          animation="bounceIn"
        />

        <Paragraph
          text={t('apiSlogan')}
          style="text-lg text-center md:text-start"
        />
      </div>

      <div className="grid grid-cols-1 px-4 md:grid-cols-2 mb-10 gap-10">
        <div>
          <Title
            text={t('terms')}
            underline="none"
            style="text-start mb-1"
            type="subTitle"
            color="Secondary"
            animation="fadeIn"
          />
          <Paragraph
            text="Lorem ipsum dolor sit amet,onsectetur adipiscing elit.Lorem adipiscing  onsectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur m ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur "
            style="text-lg  "
            textalign="text-justify"
          />
          <a
            href="#"
            className=" text-xl text-start block text-Secondary underline"
          >
            read more
          </a>
        </div>
        <div className="flex flex-col items-center">
          <Title
            text={t('howItWorks')}
            underline="none"
            style="text-center  "
            type="subTitle"
            color="Secondary"
            animation="fadeIn"
          />
          <iframe
            src="https://player.vimeo.com/video/76979871?embedparameter=value"
            className=" w-auto h-full "
            frameBorder="3"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="     grid justify-content-center grid-cols-1 sm:grid-cols-3 gap-2 md:gap-1 lg:gap-3   justify-items-center ">
        <PricingCard
          price="$5000 - $25,000"
          services={t('silver', { returnObjects: true })}
          title="Silver"
        />
        <PricingCard
          price=" $25,000 - $100,000"
          services={t('gold', { returnObjects: true })}
          dark
          title="Gold"
        />
        <PricingCard
          price={t('over') + '  $100,000'}
          services={t('platinum', { returnObjects: true })}
          title="Platinum"
        />
      </div>
      <div className="grid justify-center  text-center">
        <Form />
      </div>
    </>
  )
}
