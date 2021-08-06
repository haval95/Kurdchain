import React from 'react'
import ContactJumbotron from '../Components/ContactJumbotron'
import ImageJumbotron from '../Components/ImageJumbotron'
import ApiSection from '../Containers/Sections/Investment/ApiSection'
import ContractSection from '../Containers/Sections/Investment/ContractSection'

import img from '../Assets/Images/signal.png'
import { useTranslation } from 'react-i18next'

export default function Investment() {
  const { t } = useTranslation()
  return (
    <div>
      <ImageJumbotron title={t('navbar.investment')} detail="" image={img} />
      <div className=" bg-Light grid  lg:px-24 md:px-16 px-2 sm:px-4 py-16">
        <ApiSection />
      </div>
      <div className=" bg-LightGray grid  lg:px-24 md:px-16 sm:px-4 py-16">
        <ContractSection />
      </div>
      <ContactJumbotron />
    </div>
  )
}
