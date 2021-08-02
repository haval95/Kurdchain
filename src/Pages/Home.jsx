import React from 'react'
import Header from '../Containers/Sections/HomeSections/Header'
import CoinFlow from '../Containers/Sections/HomeSections/CoinWedgie'
import CoursesSection from '../Containers/Sections/HomeSections/CoursesSection'
import NewsSection from '../Containers/Sections/HomeSections/NewsSection'
import PartnersSection from '../Containers/Sections/HomeSections/PartnersSection'
import CoinMarket from '../Containers/Sections/HomeSections/CoinMarket'
import ContactJumbotron from '../Components/ContactJumbotron'
export default function Home() {
  return (
    <div>
      <Header />
      <CoinFlow />
      <div className=" bg-Light grid justify-center md:px-24 py-16 gap-20">
        <CoursesSection />
      </div>
      <div className="bg-LightGray grid justify-center md:px-24 py-16 gap-20">
        <NewsSection />
      </div>
      <div className="bg-Light grid justify-center md:px-24 py-16 gap-20">
        <PartnersSection />
      </div>
      <div className="bg-LightGray grid justify-center md:px-24 py-16 gap-20">
        <CoinMarket />
      </div>
      <ContactJumbotron />
    </div>
  )
}
