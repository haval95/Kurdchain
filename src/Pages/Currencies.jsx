import React from 'react'
import ImageJumbotron from '../Components/ImageJumbotron'
import Title from '../Components/Title'

import { useTranslation } from 'react-i18next'
import img from '../Assets/Images/currenciesbg.png'
export default function Currencies() {
  const { t } = useTranslation()
  return (
    <>
      <ImageJumbotron title={t('footer.currencies')} detail="" image={img} />
      <div className="bg-Light grid  md:px-16 lg:px-24 py-16">
        <div className="  mb-10 p-inline-start-2 text-start grid gap-6">
          <Title
            text={t('footer.currencies')}
            underline="start"
            style="text-start"
            animation="bounceIn"
          />
        </div>
        <div className=" px-7 mb-10 grid grid-cols-1 md:grid-cols-2   justify-center  gap-10">
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
          <div
            className="coinmarketcap-currency-widget"
            data-currencyid="2010"
            data-base="USD"
            data-secondary=""
            data-ticker="true"
            data-rank="true"
            data-marketcap="true"
            data-volume="true"
            data-statsticker="true"
            data-stats="USD"
          ></div>
          <div
            className="coinmarketcap-currency-widget"
            data-currencyid="52"
            data-base="USD"
            data-secondary=""
            data-ticker="true"
            data-rank="true"
            data-marketcap="true"
            data-volume="true"
            data-statsticker="true"
            data-stats="USD"
          ></div>
          <div
            className="coinmarketcap-currency-widget"
            data-currencyid="3408"
            data-base="USD"
            data-secondary=""
            data-ticker="true"
            data-rank="true"
            data-marketcap="true"
            data-volume="true"
            data-statsticker="true"
            data-stats="USD"
          ></div>
          <div
            className="coinmarketcap-currency-widget"
            data-currencyid="4943"
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
    </>
  )
}
