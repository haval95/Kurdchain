// import * as ROUTES from '../router'
import Header from '../Containers/Sections/HomeSections/Header'
import CoinFlow from '../Containers/Sections/HomeSections/CoinWedgie'
import CoursesSection from '../Containers/Sections/HomeSections/CoursesSection'
import NewsSection from '../Containers/Sections/HomeSections/NewsSection'
import PartnersSection from '../Containers/Sections/HomeSections/PartnersSection'
import CoinMarket from '../Containers/Sections/HomeSections/CoinMarket'
import ContactJumbotron from '../Components/ContactJumbotron'

export default function Home() {
  return (
    <>
      <Header />
      <CoinFlow />
      <div className=" bg-Light grid justify-center nav_break:px-24 py-16">
        <CoursesSection />
      </div>
      <div className="bg-LightGray grid justify-center md:px-24 py-16  ">
        <NewsSection />
      </div>
      <div className="bg-Light grid   py-16   ">
        <PartnersSection />
      </div>
      <div className="bg-LightGray grid justify-center md:px-24 py-16  ">
        <CoinMarket />
      </div>

      <ContactJumbotron />
    </>
  )
}
