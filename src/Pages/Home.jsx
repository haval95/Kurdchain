import React from 'react'
// import * as ROUTES from '../router'
import Header from '../Containers/Sections/HomeSections/Header'
import CoinFlow from '../Containers/Sections/HomeSections/CoinWedgie'
import CoursesSection from '../Containers/Sections/HomeSections/CoursesSection'
import NewsSection from '../Containers/Sections/HomeSections/NewsSection'
import PartnersSection from '../Containers/Sections/HomeSections/PartnersSection'
import CoinMarket from '../Containers/Sections/HomeSections/CoinMarket'
import ContactJumbotron from '../Components/ContactJumbotron'
import ImportScript from '../Hooks/ImportScript'
// import NavigationButton from '../Components/NavigationButton'
// import Title from '../Components/Title'
// import Paragraph from '../Components/Paragraph'
//import { useTranslation } from 'react-i18next'
export default function Home() {
  // const { t } = useTranslation()
  ImportScript('https://files.coinmarketcap.com/static/widget/currency.js')
  return (
    <>
      <Header />
      <CoinFlow />
      <div className=" bg-Light grid justify-center md:px-24 py-16">
        <CoursesSection />
      </div>
      <div className="bg-LightGray grid justify-center md:px-24 py-16  ">
        <NewsSection />
      </div>
      <div className="bg-Light grid justify-center md:px-24 py-16  ">
        <PartnersSection />
      </div>
      <div className="bg-LightGray grid justify-center md:px-24 py-16  ">
        <CoinMarket />
      </div>

      <ContactJumbotron />
    </>
  )
}
