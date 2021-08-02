import React from 'react'
import Title from '../../../Components/Title'

import { useTranslation } from 'react-i18next'
import Paragraph from '../../../Components/Paragraph'
import ScrollAnimation from 'react-animate-on-scroll'
import NavigationButton from '../../../Components/NavigationButton'
import * as ROUTES from '../../../router'
export default function CoinMarket() {
  const { t } = useTranslation()

  return (
    <div className="grid ">
      <div className="justify-self-center mb-10 text-center grid gap-4">
        <ScrollAnimation animateIn="bounceIn">
          <Title text={t('coinMarket')} type="title" underline="center" />
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomInUp">
          <Paragraph text={t('coinMarketSlogan')} style="text-lg" />
        </ScrollAnimation>
      </div>
      <div className=" relative ltr w-screen md:w-full  justify-self-center">
        <div className="absolute text-transparent top-10 right-0 bg-transparent w-full  h-14 items-center grid justify-center m-1"></div>
        <div className="absolute bottom-10 right-0 bg-LightGray w-2/4 h-14 items-center grid justify-center m-1"></div>
        <div className="w-full overflow-hidden mb-16">
          <div
            className="text-center"
            id="coinmarketcap-widget-coin-price-block"
            coins="1,1027,825,2010,52"
            currency="USD"
            theme="light"
            transparent="false"
            show-symbol-logo="true"
          ></div>
        </div>
      </div>

      <div className="grid justify-center">
        <NavigationButton
          location={ROUTES.CURRENCIES_ROUTE}
          text={t('seemore')}
          style="px-10 capitalize"
          animation="swing"
        />
      </div>
    </div>
  )
}
