import React from 'react'
import ImageJumbotron from '../Components/ImageJumbotron'
import Title from '../Components/Title'
import ImportScript from '../Hooks/ImportScript'
import { useTranslation } from 'react-i18next'
import uuid from 'react-uuid'
import img from '../Assets/Images/currenciesbg.png'
export default function Currencies() {
  const { t } = useTranslation()
  ImportScript('https://files.coinmarketcap.com/static/widget/currency.js')
  const generateCards = () => {
    const cards = [
      <div
        className="relative h-36 overflow-hidden border-b-2 border-CurrencyBorder rounded-lg"
        key={uuid()}
      >
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
      </div>,
      <div
        className="relative h-36 overflow-hidden border-b-2 border-CurrencyBorder rounded-lg"
        key={uuid()}
      >
        <div className="absolute h-5 w-full top-5 bg-transparent "></div>
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
      </div>,
      <div
        className="relative h-36 overflow-hidden border-b-2 border-CurrencyBorder rounded-lg"
        key={uuid()}
      >
        <div className="absolute h-5 w-full top-5 bg-transparent "></div>
        <div
          className="coinmarketcap-currency-widget"
          data-currencyid="512"
          data-base="USD"
          data-secondary=""
          data-ticker="true"
          data-rank="true"
          data-marketcap="true"
          data-volume="true"
          data-statsticker="true"
          data-stats="USD"
        ></div>
      </div>,
      <div
        className="relative h-36 overflow-hidden border-b-2 border-CurrencyBorder rounded-lg"
        key={uuid()}
      >
        <div className="absolute h-5 w-full top-5 bg-transparent "></div>
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
      </div>,
    ]
    for (let i = 1; i < 100; i++) {
      cards.push(
        <div className="relative h-36 overflow-hidden border-b-2 border-CurrencyBorder rounded-lg">
          <div className="absolute h-5 w-full top-5 bg-transparent "></div>
          <div
            className="coinmarketcap-currency-widget"
            data-currencyid={i}
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
      )
    }
    return cards
  }

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

        <div className=" px-7 mb-10 grid grid-cols-1 md:grid-cols-2   justify-center  gap-10 ltr">
          {generateCards()}
        </div>
      </div>
    </>
  )
}
