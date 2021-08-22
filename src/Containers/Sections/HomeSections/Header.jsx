import React from 'react'
import { useTranslation } from 'react-i18next'
import HeaderV from '../../../Assets/Images/headerVector.svg'
import NavigationButton from '../../../Components/NavigationButton'
import Button from '../../../Components/Button'
import Title from '../../../Components/Title'
import * as ROUTES from '../../../router'
import { useDispatch, useSelector } from 'react-redux'
import ScrollAnimation from 'react-animate-on-scroll'
import { OpenLoginModal } from '../../../Redux/Modals/ModalActions'

export default function Header() {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const user = useSelector(state => state.user)

  return (
    <>
      <div className=" bg-Light  bg-header h-96 sm:h-full items-center justify-center  grid  grid-cols-1 sm:grid-cols-11 ">
        <div className="bg-Light rounded-md  bg-opacity-70 text-start w-full px-10  sm:w-3/4 my-10 sm:my-0 mb-1 sm:py-8   pb-3  sm:bg-none justify-self-center content-center self-center sm:self-center sm:col-span-6    ">
          <ScrollAnimation animateIn="bounceIn">
            <Title
              text={t('website')}
              type="subTitle"
              underline="none"
              style="uppercase my-1  hidden sm:block font-black text-center  text-center  sm:text-4xl "
            />
          </ScrollAnimation>
          <div className="sm:hidden mb-2  rounded-md px-5 bg-opacity-70 grid justify-center justify-self-center">
            <ScrollAnimation animateIn="bounceIn">
              <Title
                text={t('welcome')}
                type="subTitle"
                underline="none"
                animation="none"
                style="uppercase my-1   font-black text-center  text-center  sm:text-4xl sm:hidden"
              />
            </ScrollAnimation>
          </div>

          <h1 className="text-md md:text-xl text-center  mb-2 text-black hidden sm:block capitalize">
            {t('home.slogan')}
          </h1>

          <div className="grid grid-cols-2 items-center   gap-2">
            <div className="col-span-2 justify-self-center sm:justify-self-stretch sm:col-span-1 md:col-span-2 lg:col-span-1 ">
              {user.isAuthenticated ? (
                <ScrollAnimation animateIn="fadeIn">
                  <NavigationButton
                    location={ROUTES.INVESTMENT_ROUTE}
                    text={t('navbar.investment')}
                    style="uppercase  md:px-6 md:text-xl text-xs hidden sm:block"
                    colors="bg-Primary border border-Primary text-Light hover:bg-PrimaryHover  hover:border-none  px-3"
                    animation="fadeIn"
                  />
                  <div className="col-span-2 grid grid-cols-2 gap-4 sm:col-span-1 md:col-span-2 lg:col-span-1  sm:hidden">
                    <NavigationButton
                      location={ROUTES.COURSES_ROUTE}
                      text={t('navbar.courses')}
                      style="uppercase  md:px-6 md:text-xl text-xs"
                      colors="bg-Primary border border-Primary text-Light hover:bg-PrimaryHover  hover:border-none  px-3"
                      animation="fadeIn"
                    />
                    <NavigationButton
                      location={ROUTES.INVESTMENT_ROUTE}
                      text={t('navbar.investment')}
                      style="uppercase  md:px-6 md:text-xl text-xs block sm:hidden"
                      colors="bg-Light border border-Primary text-Primary hover:bg-LightGray  hover:border-none  px-3"
                      animation="fadeIn"
                    />
                  </div>
                </ScrollAnimation>
              ) : (
                <div className="col-span-2 grid grid-cols-2 gap-4 sm:gap-0 sm:col-span-1 md:col-span-2 lg:col-span-1  ">
                  <div className="sm:col-span-full">
                    <ScrollAnimation animateIn="fadeIn">
                      <Button
                        clickAction={() => dispatch(OpenLoginModal())}
                        style="rounded-xl md:px-6   px-3 sm:px-0   "
                        text={t('getStarted')}
                        font="text-md sm:text-sm md:text-xl"
                      />
                    </ScrollAnimation>
                  </div>
                  <ScrollAnimation animateIn="fadeIn">
                    <NavigationButton
                      location={ROUTES.COURSES_ROUTE}
                      text={t('navbar.courses')}
                      style="uppercase  md:px-6  text-md sm:text-sm md:text-xl"
                      colors="bg-Light border border-Primary text-Primary hover:bg-LightGray  hover:border-none  px-3 sm:hidden"
                      animation="fadeIn"
                    />
                  </ScrollAnimation>
                </div>
              )}
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-1 hidden sm:block   ">
              <NavigationButton
                location={ROUTES.COURSES_ROUTE}
                text={t('navbar.courses')}
                style="uppercase  md:px-6 md:text-xl sm:text-xs"
                colors="bg-Light border border-Primary text-Primary hover:LightGray  hover:border-none shadow-md"
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
