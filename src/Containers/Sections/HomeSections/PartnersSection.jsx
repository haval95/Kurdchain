import React from 'react'
import Title from '../../../Components/Title'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Paragraph from '../../../Components/Paragraph'
import ScrollAnimation from 'react-animate-on-scroll'
import Ticker from 'react-ticker'
import uuid from 'react-uuid'
import { partnerImage } from '../../../Helper/Domain'
export default function PartnersSection() {
  const { t } = useTranslation()
  const partners = useSelector(state => state.partners)

  return (
    <div className="grid grid-flow-row">
      <div className="justify-self-center mb-10 text-center grid gap-4">
        <ScrollAnimation animateIn="bounceIn">
          <Title text={t('partners')} type="title" underline="center" />
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomInUp">
          <Paragraph
            text={t('partnersSlogan')}
            style="text-lg capitalize"
            textalign="text-center"
          />
        </ScrollAnimation>
      </div>
      <div className=" relative w-full">
        {partners && partners.data.length ? (
          <Ticker direction="toLeft" offset="20" speed={7}>
            {() => (
              <div className="grid grid-flow-col ">
                {partners.data.map(partner => {
                  return (
                    <img
                      src={partnerImage + partner.image}
                      className="inline mx-10 px-10 object-contain h-32  "
                      key={uuid()}
                    />
                  )
                })}
              </div>
            )}
          </Ticker>
        ) : null}
      </div>
    </div>
  )
}
