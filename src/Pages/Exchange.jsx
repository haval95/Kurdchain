import React from 'react'

import ImageJumbotron from '../Components/ImageJumbotron'
import Title from '../Components/Title'

import img from '../Assets/Images/newsbg.png'
import { useTranslation } from 'react-i18next'
import Button from '../Components/Button'

export default function Exchange() {
  const { t } = useTranslation()
  return (
    <>
      <ImageJumbotron title={t('navbar.exchange')} detail={''} image={img} />
      <div className=" bg-Light  px-6  md:px-24 py-16 text-start ">
        <Title
          text={t('exchangeMoney')}
          style="sm:uppercase mb-10 "
          underline="start"
          animation="bounceIn"
        />
        <div className=" grid justify-center md:grid-cols-2 r gap-16">
          <div className="max-w-xs bg-LightGray">
            <Title
              text={t('buyUSDT')}
              style="sm:capitalize  px-3 bg-Light shadow-md py-1 rounded mb-5"
              underline="none"
              type="subTitle"
              color="Secondary"
            />
            <p className="px-4"> {t('todayPrice')}</p>
            <p className="px-4"> 100 USDT = $ 98 = 144,000 IQD</p>
            <div className="m-4">
              <Button text={t('makeDeal')} style="mt-4 " color="Secondary" />
            </div>
          </div>

          <div className="max-w-xs bg-LightGray">
            <Title
              text={t('sellUSDT')}
              style="sm:capitalize  px-3 bg-Light shadow-md  py-1 rounded mb-5"
              underline="none"
              type="subTitle"
              color="Secondary"
            />
            <p className="px-4"> {t('todayPrice')}</p>
            <p className="px-4"> 100 USDT = $ 98 = 144,000 IQD</p>
            <div className="m-4">
              <Button text={t('makeDeal')} style="mt-4 " color="Secondary" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}