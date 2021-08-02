import './App.css'
import './fontawsome'
import { useEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import * as ROUTES from './router'
import Home from './Pages/Home'
import About from './Pages/About'
import Analysis from './Pages/Analysis'
import Contact from './Pages/Contact'
import Course from './Pages/Course'
import Courses from './Pages/Courses'
import Currencies from './Pages/Currencies'
import Investment from './Pages/Investment'
import News from './Pages/News'
import NewsDetail from './Pages/NewsDetail'
import NotFound from './Pages/NotFound'
import Profile from './Pages/Profile.jsx'
import Signal from './Pages/Signal.jsx'
import PrivateRoute from './PrivateRoute'
import Navbar from './Containers/Navbar/Navbar'

//import { useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import Exchange from './Pages/Exchange'
import Footer from './Containers/Footer/Footer'

//import PricingCard from './Containers/Cards/PricingCard'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    return null
  }, [pathname])

  const { i18n } = useTranslation()

  useEffect(() => {
    document.dir = i18n.dir()
  }, [i18n, i18n.language])
  // const handleLanguageChange = lang => {
  //   i18n.changeLanguage(lang)
  // }
  return (
    <div className="">
      <Navbar />

      <Switch>
        <Route exact path={ROUTES.HOME_ROUTE} component={Home} />
        <PrivateRoute path={ROUTES.PROFILE_ROUTE}>
          <Profile />
        </PrivateRoute>
        <Route path={ROUTES.ABOUT_ROUTE} component={About} />
        <Route path={ROUTES.CONTACT_ROUTE} component={Contact} />
        <Route path={ROUTES.NEWS_ROUTE} component={News} />
        <Route exact path={ROUTES.NEWS_DETAILS_ROUTE} component={NewsDetail} />
        <Route path={ROUTES.COURSES_ROUTE} component={Courses} />
        <Route path={ROUTES.COURSE_DETAILS_ROUTE} component={Course} />
        <Route path={ROUTES.ANALYSIS_ROUTE} component={Analysis} />
        <Route path={ROUTES.SIGNAL_ROUTE} component={Signal} />
        <Route path={ROUTES.CURRENCIES_ROUTE} component={Currencies} />
        <Route path={ROUTES.INVESTMENT_ROUTE} component={Investment} />
        <Route path={ROUTES.EXCHANGE_ROUTE} component={Exchange} />

        <Route component={NotFound} />
      </Switch>

      {
        // <div className="     grid justify-content-center grid-cols-1 sm:grid-cols-3 gap-4   justify-items-center ">
        //   <PricingCard />
        //   <PricingCard />
        //   <PricingCard />
        // </div>
      }
      <Footer />
    </div>
  )
}

export default App
