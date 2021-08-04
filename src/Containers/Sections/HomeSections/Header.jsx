import React from 'react'
import { useTranslation } from 'react-i18next'
import HeaderV from '../../../Assets/Images/headerVector.svg'
import NavigationButton from '../../../Components/NavigationButton'
import Button from '../../../Components/Button'
import Title from '../../../Components/Title'
import * as ROUTES from '../../../router'
import ScrollAnimation from 'react-animate-on-scroll'

export default function Header() {
  const { t } = useTranslation()

  return (
    <>
      <div className=" bg-Light  bg-header h-96 sm:h-full items-center justify-center  grid  grid-cols-1 sm:grid-cols-11 ">
        <div className=" text-start w-full px-10  sm:w-3/4 my-10 sm:my-0 mb-1 sm:py-8  bg-opacity-90  sm:bg-none justify-self-center self-start sm:self-center sm:col-span-6    ">
          <ScrollAnimation animateIn="bounceIn">
            <Title
              text={t('website')}
              type="subTitle"
              underline="none"
              style="uppercase my-1   font-black text-center  text-center  sm:text-4xl hidden sm:block"
            />
          </ScrollAnimation>

          <h1 className="text-md md:text-xl text-center  mb-2 text-black hidden sm:block capitalize">
            {t('home.slogan')}
          </h1>

          <div className="grid grid-cols-2 items-center   gap-2">
            <div className="col-span-2 justify-self-center sm:justify-self-stretch sm:col-span-1 md:col-span-2 lg:col-span-1 ">
              <ScrollAnimation animateIn="fadeIn">
                <Button
                  clickAction
                  style="rounded-xl md:px-6   px-3 sm:px-0  "
                  text={t('getStarted')}
                  font="text-md sm:text-sm md:text-xl"
                />
              </ScrollAnimation>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-1 hidden sm:block   ">
              <NavigationButton
                location={ROUTES.COURSES_ROUTE}
                text={t('navbar.courses')}
                style="uppercase  md:px-6 md:text-xl sm:text-xs"
                colors="bg-Light border border-Primary text-Primary hover:LightGray  hover:border-none shadow-lg"
                animation="fadeIn"
              />
            </div>
          </div>
        </div>
        <div className="justify-self-center sm:block hidden   sm:col-span-5  ">
          <img
            src={HeaderV}
            alt="background"
            className="object-cover h-full right-0 "
          />
        </div>
      </div>
    </>
  )
}
