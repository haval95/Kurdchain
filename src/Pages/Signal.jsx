import React from 'react'
import ContactJumbotron from '../Components/ContactJumbotron'
import ImageJumbotron from '../Components/ImageJumbotron'
import SpotSection from '../Containers/Sections/SignalSections/SpotSection'
import FutureSection from '../Containers/Sections/SignalSections/FutureSection'
import img from '../Assets/Images/signal.png'
import { useTranslation } from 'react-i18next'

export default function Signal() {
  const { t } = useTranslation()
  return (
    <div>
      <ImageJumbotron
        title={t('navbar.signal')}
        detail={t('signalSlogan')}
        image={img}
      />
      <div className=" bg-Light grid  lg:px-24 md:px-16 sm:px-4 py-16 ">
        <SpotSection />
      </div>
      <div className=" bg-LightGray grid  md:px-24 py-16">
        <FutureSection />
      </div>
      <ContactJumbotron />
    </div>
  )
}
