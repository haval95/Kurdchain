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
import SweetAlert from 'react-bootstrap-sweetalert'
import { useTranslation } from 'react-i18next'
import Exchange from './Pages/Exchange'
import Footer from './Containers/Footer/Footer'
import LoginModal from './Containers/Modals/LoginModal'
import RegisterModal from './Containers/Modals/RegisterModal'
import ResetPassword from './Containers/Modals/ResetPassword'
import ChangePassword from './Containers/Modals/ChangePassword'
import PaymentModal from './Containers/Modals/PaymentModal'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FetchLatestNews, FetchNews } from './Redux/News/NewsActions'

import { useDispatch } from 'react-redux'

function App() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const IsLoading = useSelector(state => state.loading)
  const { i18n } = useTranslation()

  useEffect(() => {
    document.dir = i18n.dir()
  }, [i18n, i18n.language])
  const { pathname } = useLocation()

  useEffect(() => {
    dispatch(FetchLatestNews())
    dispatch(FetchNews())
  }, [])
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    return null
  }, [pathname])

  return (
    <div className="">
      <Navbar />

      <ToastContainer />

      <SweetAlert
        title=""
        show={IsLoading.isLoading}
        showConfirm={false}
        closeOnClickOutside
        style={{ backgroundColor: 'transparent', borderRadius: '20px' }}
      >
        <div className=" p-3 grid justify-center justify-items-center gap-2 text-center z-55">
          <FontAwesomeIcon
            icon="spinner"
            className="text-Light mb-5"
            pulse
            size="7x"
          />
          <h1 className=" text-Light m-3 mt-4 text-3xl font-black ">
            {t('loading')}
          </h1>
        </div>
      </SweetAlert>
      <LoginModal />
      <RegisterModal />
      <ResetPassword />
      <ChangePassword />
      <PaymentModal />

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

      <Footer />
    </div>
  )
}

export default App
