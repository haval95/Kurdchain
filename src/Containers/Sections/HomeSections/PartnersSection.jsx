import React from 'react'
import Title from '../../../Components/Title'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Paragraph from '../../../Components/Paragraph'
import ScrollAnimation from 'react-animate-on-scroll'

import uuid from 'react-uuid'
import { partnerImage } from '../../../Helper/Domain'
export default function PartnersSection() {
  const { t } = useTranslation()
  const partners = useSelector(state => state.partners)

  return (
    <div className="grid">
      <div className="justify-self-center mb-10 text-center grid gap-4">
        <ScrollAnimation animateIn="bounceIn">
          <Title text={t('partners')} type="title" underline="center" />
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomInUp">
          <Paragraph
            text={t('partnersSlogan')}
            style="text-lg"
            textalign="text-center"
          />
        </ScrollAnimation>
      </div>

      <div className=" inline p-4 text-center mb-16">
        {partners.data.map(partner => {
          return (
            <img
              src={partnerImage + partner.image}
              className="inline px-4 pb-4 filter grayscale hover:grayscale-0  transition-all ease-in-out duration-500 w-60"
              key={uuid()}
            />
          )
        })}
      </div>
    </div>
  )
}
