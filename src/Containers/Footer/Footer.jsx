import React from 'react'
import logo from '../../Assets/Images/logo.svg'
import Title from '../../Components/Title'
import NavigationButton from '../../Components/NavigationButton'
import * as ROUTES from '../../router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="   px-8 pt-12 justify-items-center mt-12 border-t border-GrayBorder ">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div className=" w-full ">
          <img src={logo} className="h-40 min-h text-center mx-auto " />
          <Title
            text="kurd chain"
            type="title"
            underline="none"
            style="uppercase text-center"
          />
        </div>
        <div className="grid">
          <Title
            text={t('footer.company')}
            type="smallSubTitle"
            underline="none"
            style="uppercase text-center"
          />
          <NavigationButton
            fontWeight="normal"
            colors="text-Dark hover:text-PrimaryHover"
            text={t('footer.about')}
            location={ROUTES.ABOUT_ROUTE}
          />

          <NavigationButton
            fontWeight="normal"
            colors="text-Dark hover:text-PrimaryHover"
            text={t('footer.contact')}
            location={ROUTES.CONTACT_ROUTE}
          />
        </div>

        <div className="grid">
          <Title
            text={t('footer.feature')}
            type="smallSubTitle"
            underline="none"
            style="uppercase text-center"
          />
          <NavigationButton
            fontWeight="normal"
            colors="text-Dark hover:text-PrimaryHover"
            text={t('footer.courses')}
            location={ROUTES.COURSES_ROUTE}
          />
          <NavigationButton
            fontWeight="normal"
            colors="text-Dark hover:text-PrimaryHover"
            text={t('footer.news')}
            location={ROUTES.NEWS_ROUTE}
          />
          <NavigationButton
            fontWeight="normal"
            colors="text-Dark hover:text-PrimaryHover"
            text={t('footer.investment')}
            location={ROUTES.INVESTMENT_ROUTE}
          />
          <NavigationButton
            fontWeight="normal"
            colors="text-Dark hover:text-PrimaryHover"
            text={t('footer.signal')}
            location={ROUTES.SIGNAL_ROUTE}
          />
          <NavigationButton
            fontWeight="normal"
            colors="text-Dark hover:text-PrimaryHover"
            text={t('footer.currencies')}
            location={ROUTES.CURRENCIES_ROUTE}
          />
          <NavigationButton
            fontWeight="normal"
            colors="text-Dark hover:text-PrimaryHover"
            text={t('footer.exchange')}
            location={ROUTES.EXCHANGE_ROUTE}
          />
        </div>
        <div className="grid justify-items-center ">
          <Title
            text={t('footer.getInTouch')}
            type="smallSubTitle"
            underline="none"
            style="uppercase text-center md:text-start"
          />
          <FontAwesomeIcon className="text-Secondary" icon="phone-alt" />
          <div className=" text-start font-medium   pb-1  ">
            <a
              href="tel:+9647701234567"
              className="text-start px-2 hover:text-PrimaryHover"
            >
              009647701234567
            </a>
          </div>
          <FontAwesomeIcon className="text-Secondary   " icon="envelope" />
          <div className=" text-start font-medium   pb-1  ">
            <a
              href="mailto:someone@yoursite.com"
              className="text-start px-2 hover:text-PrimaryHover"
            >
              example@example.com
            </a>
          </div>
          <FontAwesomeIcon className="text-Secondary" icon="map-marked-alt" />
          <div className=" text-center font-medium   pb-1  ">
            <span className="text-center px-2 hover:text-PrimaryHover">
              the location will come here
            </span>
          </div>
        </div>
      </div>
      <div className="bg-LightGray">
        <hr className="text-GrayBorder mt-10"></hr>
        <p className="text-center p-3">
          {t('footer.copy')} - {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
