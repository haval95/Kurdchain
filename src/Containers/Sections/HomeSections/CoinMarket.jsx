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
          <Paragraph
            text={t('coinMarketSlogan')}
            style="text-lg"
            textalign="text-center"
          />
        </ScrollAnimation>
      </div>
      <div className=" relative ltr w-screen md:w-full  justify-self-center px-5">
        <div className="w-full overflow-hidden mb-16 grid grid-cols-1 xl:grid-cols-4  sm:grid-cols-2 gap-5 overflow-x-auto ">
          <div className="relative h-36 overflow-hidden border-b-2 border-CurrencyBorder rounded-lg">
            <div className="absolute h-5 w-full top-5 bg-transparent "></div>
            <div
              className="coinmarketcap-currency-widget"
              data-currencyid="1"
              data-base="USD"
              data-secondary=""
              data-ticker="true"
              data-rank="true"
              data-marketcap="true"
              data-volume="true"
              data-statsticker="true"
              data-stats="USD"
            ></div>
          </div>
          <div className="relative h-36 overflow-hidden border-b-2 border-CurrencyBorder rounded-lg">
            <div className="absolute h-5 w-full top-5 bg-transparent "></div>
            <div
              className="coinmarketcap-currency-widget"
              data-currencyid="1027"
              data-base="USD"
              data-secondary=""
              data-ticker="true"
              data-rank="true"
              data-marketcap="true"
              data-volume="true"
              data-statsticker="true"
              data-stats="USD"
            ></div>
          </div>
          <div className="relative h-36 overflow-hidden border-b-2 border-CurrencyBorder rounded-lg">
            <div className="absolute h-5 w-full top-5 bg-transparent "></div>
            <div
              className="coinmarketcap-currency-widget"
              data-currencyid="825"
              data-base="USD"
              data-secondary=""
              data-ticker="true"
              data-rank="true"
              data-marketcap="true"
              data-volume="true"
              data-statsticker="true"
              data-stats="USD"
            ></div>
          </div>
          <div className="relative h-36 overflow-hidden border-b-2 border-CurrencyBorder rounded-lg">
            <div className="absolute h-5 w-full top-5 bg-transparent "></div>
            <div
              className="coinmarketcap-currency-widget"
              data-currencyid="1839"
              data-base="USD"
              data-secondary=""
              data-ticker="true"
              data-rank="true"
              data-marketcap="true"
              data-volume="true"
              data-statsticker="true"
              data-stats="USD"
            ></div>
          </div>
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
