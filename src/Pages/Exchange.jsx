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
        <div className=" grid  md:grid-cols-2 r gap-16">
          <div className=" bg-LightGray w-96 md:w-72 lg:w-96 justify-self-center">
            <Title
              text={t('buyUSDT')}
              style="sm:capitalize  px-3 bg-Light shadow-md py-1 rounded mb-5 text-center"
              underline="none"
              type="subTitle"
              color="Secondary"
            />
            <p className="px-4 text-center"> {t('todayPrice')}</p>
            <p className="px-4 pt-2 ltr text-center grid grid-flow-col">
              <span> 100 USDT </span>
              <span>=</span>
              {state.data && state.data.buy_dollar ? (
                <span>${state.data.buy_dollar}</span>
              ) : (
                ' '
              )}
              <span>=</span>
              {state.data && state.data.buy_iqd ? (
                <span>{state.data.buy_iqd} IQD</span>
              ) : (
                ' '
              )}
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

          <div className=" bg-LightGray w-96 md:w-72 lg:w-96 justify-self-center">
            <Title
              text={t('sellUSDT')}
              style="sm:capitalize  px-3 bg-Light shadow-md  py-1 rounded mb-5 text-center"
              underline="none"
              type="subTitle"
              color="Secondary"
            />
            <p className="px-4 text-center"> {t('todayPrice')}</p>
            <p className="px-4  pt-2 ltr text-center grid grid-flow-col ">
              <span>100 USDT</span> <span>=</span>
              {state.data && state.data.sell_dollar ? (
                <span> ${state.data.sell_dollar}</span>
              ) : (
                ' '
              )}
              <span>=</span>
              {state.data && state.data.sell_iqd ? (
                <span>{state.data.sell_iqd} IQD</span>
              ) : (
                ' '
              )}
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
