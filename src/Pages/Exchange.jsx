import React from 'react'

import ImageJumbotron from '../Components/ImageJumbotron'
import Title from '../Components/Title'
import { OpenMakeDealModal } from '../Redux/Modals/ModalActions'
import img from '../Assets/Images/newsbg.png'
import { useTranslation } from 'react-i18next'
import Button from '../Components/Button'
import { useDispatch, useSelector } from 'react-redux'

export default function Exchange() {
  const { t } = useTranslation()
  const state = useSelector(state => state.exchange)
  const dispatch = useDispatch()

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
            <p className="px-4">
              20 USDT = ${' '}
              {state.data && state.data.buy_dollar
                ? ' ' + state.data.buy_dollar
                : ' '}{' '}
              =
              {state.data && state.data.buy_iqd
                ? ' ' + state.data.buy_iqd
                : ' '}
              IQD
            </p>
            <div className="m-4">
              <Button
                clickAction={() => {
                  dispatch(OpenMakeDealModal())
                }}
                text={t('makeDeal')}
                style="mt-4 px-3"
                color="Secondary"
              />
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
            <p className="px-4 block  ">
              100 USDT = $
              {state.data && state.data.sell_dollar
                ? ' ' + state.data.sell_dollar
                : ' '}
              =
              {state.data && state.data.sell_iqd
                ? ' ' + state.data.sell_iqd
                : ' '}
              IQD
            </p>
            <div className="m-4">
              <Button
                text={t('makeDeal')}
                style="mt-4 px-3"
                color="Secondary"
                clickAction={() => {
                  dispatch(OpenMakeDealModal())
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
