import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux'
import Logo from '../../Assets/Images/logo.svg'
import * as ROUTES from '../../router'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { Link, NavLink, Redirect, useLocation } from 'react-router-dom'
import {
  OpenLoginModal,
  OpenRegisterModal,
  OpenChangePasswordModal,
} from '../../Redux/Modals/ModalActions'

export default function Navbar() {
  const location = useLocation()
  const dispatch = useDispatch()
  const [profileDropDown, setprofileDropDown] = useState(false)
  const [langDropDown, setLangDropDown] = useState(false)
  const [navCollapse, setnavCollapse] = useState(false)
  const { t } = useTranslation()
  const user = { isLoggedIn: true, user: { photo: null } }
  const handleLanguageChange = lang => {
    setLangDropDown(false)
    i18n.changeLanguage(lang)
  }
  useEffect(() => {
    setnavCollapse(false)
  }, [location])

  const signOut = () => {
    //     dispatch(LogOut())
    //     firebase.auth().signOut()
    setprofileDropDown(false)
    //     dispatch(CloseModal())
    //     dispatch(CloseSettingModal())
    //localStorage.removeItem('loggedInUser')
    return <Redirect to="/" />
  }

  document.addEventListener('mousedown', event => {
    const concernedElement = document.querySelector('.click-text')

    if (!concernedElement.contains(event.target)) {
      setprofileDropDown(false)
    }
  })
  document.addEventListener('mousedown', event => {
    const concernedElement = document.querySelector('.click-text1')

    if (!concernedElement.contains(event.target)) {
      setLangDropDown(false)
    }
  })

  return (
    <>
      <nav className="bg-Light   shadow-md  w-full z-50">
        <div className="bg-LightGray flex flex-row justify-between ltr  items-center px-5 ">
          <div className=" text-Secondary  flex space-x-2 items-center">
            <FontAwesomeIcon icon="phone-alt" />
            <a href="tel:+9647701234567" className="text-start">
              +9647701234567
            </a>
          </div>
          <div className="flex  space-x-4">
            <a
              href="#"
              className=" text-2xl py-2    text-Secondary "
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </a>
            <a href="#" className=" text-2xl py-2    text-Secondary">
              <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            </a>
            <a href="#" className=" text-2xl py-2    text-Secondary">
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
            <a href="#" className=" text-2xl py-2    text-Secondary">
              <FontAwesomeIcon icon={['fab', 'telegram-plane']} />
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-Light   shadow-md  w-full z-50 sticky top-0">
        <div className=" px-2 ">
          <div className="relative flex items-center justify-around md:justify-between h-16 w-full">
            <div className=" flex items-center mx-8  md:justify-start   ">
              <NavLink className="  grid items-center md:mx-0  " to="/">
                <img
                  className="hidden md:block h-8 w-auto"
                  src={Logo}
                  alt="logo"
                />
                <img
                  className="block md:hidden  h-8 w-auto "
                  src={Logo}
                  alt="logo"
                />
              </NavLink>
              <div className="absolute inset-y-0   left-0 flex items-center md:hidden   ">
                <button
                  type="button"
                  className="  text-Secondary  items-center justify-center      "
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  onClick={() => setnavCollapse(!navCollapse)}
                >
                  <span className="sr-only">Open main menu</span>

                  <svg
                    className=" h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>

                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="hidden md:block w-full md:mx-2 lg:mx-6   ">
                <div className="flex   ">
                  <NavLink
                    className="m-inline-end-5percent capitalize  hover:text-PrimaryHover    py-2   text-sm font-medium"
                    exact
                    to={ROUTES.HOME_ROUTE}
                    activeClassName=" font-semibold text-Primary border-b border-Primary"
                  >
                    {t('navbar.home')}
                  </NavLink>
                  <NavLink
                    className="m-inline-end-5percent capitalize  hover:text-PrimaryHover    py-2   text-sm font-medium"
                    to={ROUTES.COURSES_ROUTE}
                    activeClassName=" font-semibold text-Primary border-b border-Primary"
                  >
                    {t('navbar.courses')}
                  </NavLink>
                  <NavLink
                    className="m-inline-end-5percent capitalize  hover:text-PrimaryHover transition ease-in-out duration-300   py-2   text-sm font-medium"
                    to={ROUTES.NEWS_ROUTE}
                    activeClassName=" font-semibold text-Primary border-b border-Primary"
                  >
                    {t('navbar.news')}
                  </NavLink>
                  <NavLink
                    className="m-inline-end-5percent capitalize  hover:text-PrimaryHover transition ease-in-out duration-300   py-2   text-sm font-medium"
                    to={ROUTES.INVESTMENT_ROUTE}
                    activeClassName=" font-semibold text-Primary border-b border-Primary"
                  >
                    {t('navbar.investment')}
                  </NavLink>
                  <NavLink
                    className="m-inline-end-5percent capitalize  hover:text-PrimaryHover transition ease-in-out duration-300   py-2   text-sm font-medium"
                    to={ROUTES.SIGNAL_ROUTE}
                    activeClassName=" font-semibold text-Primary border-b border-Primary"
                  >
                    {t('navbar.signal')}
                  </NavLink>
                  <NavLink
                    className="m-inline-end-5percent capitalize  hover:text-PrimaryHover transition ease-in-out duration-300   py-2   text-sm font-medium"
                    to={ROUTES.EXCHANGE_ROUTE}
                    activeClassName=" font-semibold text-Primary border-b border-Primary"
                  >
                    {t('navbar.exchange')}
                  </NavLink>
                  <NavLink
                    className="m-inline-end-5percent capitalize  hover:text-PrimaryHover transition ease-in-out duration-300   py-2   text-sm font-medium"
                    to={ROUTES.ABOUT_ROUTE}
                    activeClassName=" font-semibold text-Primary border-b border-Primary"
                  >
                    {t('navbar.about')}
                  </NavLink>
                  <NavLink
                    className="m-inline-end-5percent capitalize  hover:text-PrimaryHover transition ease-in-out duration-300   py-2   text-sm font-medium"
                    to={ROUTES.CONTACT_ROUTE}
                    activeClassName=" font-semibold text-Primary border-b border-Primary"
                  >
                    {t('navbar.contact')}
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center  md:static md:inset-auto md:ml-6 md:pr-0">
              <div className=" relative">
                <div>
                  {user.isLoggedIn ? (
                    <button
                      onClick={() => setprofileDropDown(!profileDropDown)}
                      type="button"
                      className=" flex text-sm rounded-full mx-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-Primary"
                      id="user-menu"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>

                      <div
                        className="h-8 w-8 rounded-full grid justify-center items-center   "
                        alt=""
                      >
                        {user.isLoggedIn ? (
                          <FontAwesomeIcon
                            icon="user"
                            size="lg"
                            className="text-Primary "
                          />
                        ) : (
                          ''
                        )}
                      </div>
                    </button>
                  ) : (
                    <div className="rounded-xl border border-Primary mx-3">
                      <button
                        type="button"
                        className="py-1  px-2 rounded-xl capitalize  items-center transition duration-500 ease-in-out  hover:bg-PrimaryHover transform hover:-translate-y-1 hover:scale-105  text-Light bg-Primary     focus:outline-none"
                        onClick={() => dispatch(OpenLoginModal())}
                      >
                        {t('navbar.login')}
                      </button>
                      <button
                        type="button"
                        className="capitalize py-1 px-2  transition duration-500 ease-in-out   items-center  transform hover:-translate-y-1 hover:scale-105 rounded-xl text-Primary      focus:outline-none"
                        onClick={() => dispatch(OpenRegisterModal())}
                      >
                        {t('navbar.signup')}
                      </button>
                    </div>
                  )}
                </div>

                <div
                  className={`${
                    profileDropDown ? ' show' : ' hidden'
                  } origin-center right-0 transform md:translate-x-1/4   bg-Light absolute rounded-lg py-2 click-text  mt-2 w-32  border border-GrayBorder items-center   shadow-lg focus:outline-none`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <Link
                    to={ROUTES.PROFILE_ROUTE}
                    className="m-auto text-center block focus:outline-none px-4 py-2 text-sm text-gray-700 hover:bg-Primary hover:text-Light w-full "
                  >
                    Profle
                  </Link>
                  <button
                    type="button"
                    className="m-auto text-center block focus:outline-none px-4 py-2 text-sm text-gray-700 hover:bg-Primary hover:text-Light w-full"
                    onClick={() => dispatch(OpenChangePasswordModal())}
                  >
                    {t('changePwd')}
                  </button>

                  <button
                    type="button"
                    onClick={signOut}
                    className="m-auto  my-0 text-center block focus:outline-none px-4 py-2 text-sm  hover:bg-Primary hover:text-Light w-full"
                    role="menuitem"
                  >
                    {t('navbar.logout')}
                  </button>
                </div>
              </div>
              <div className="relative inline-block ">
                <div className="">
                  <button
                    type="button"
                    className="md:inline-flex  border-0 justify-center w-full hidden     py-2  text-xl font-medium focus:outline-none  text-Primary"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => setLangDropDown(!langDropDown)}
                  >
                    <FontAwesomeIcon icon="globe" className="" />
                  </button>
                </div>
                <div
                  className={`${
                    langDropDown ? ' show' : ' hidden'
                  }  origin-center  transform  click-text1 absolute right-0 mt-0 w-10 rounded-md shadow-lg bg-Light border border-GrayBorder focus:outline-none`}
                  role="lang"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1 text-center " role="none">
                    <button
                      type="button"
                      onClick={() => handleLanguageChange(`${t('ku')}`)}
                      className="m-auto capitalize  my-0  block focus:outline-none  py-2 text-sm  hover:bg-Primary hover:text-Light w-full"
                      role="menuitem"
                    >
                      {t('ku-text')}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleLanguageChange(`${t('ar')}`)}
                      className="m-auto capitalize my-0  block focus:outline-none py-2 text-sm  hover:bg-Primary hover:text-Light w-full"
                      role="menuitem"
                    >
                      {t('ar')}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleLanguageChange(`${t('en')}`)}
                      className="m-auto capitalize my-0 block focus:outline-none  py-2 text-sm  hover:bg-Primary hover:text-Light w-full"
                      role="menuitem"
                    >
                      {t('en')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${navCollapse ? 'show' : 'hidden'} md:hidden ltr`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3  text-center bg-Light border-GrayBorder">
            <NavLink
              to={ROUTES.HOME_ROUTE}
              className="text-darkBlue block  hover:text-PrimaryHover py-2 capitalize border-t border-b border-GrayBorder font-medium"
              exact
              activeClassName=" font-semibold text-Primary  border-Primary"
            >
              {t('navbar.home')}
            </NavLink>
            <NavLink
              to={ROUTES.COURSES_ROUTE}
              className="capitalize text-darkBlue block hover:text-PrimaryHover  py-2   border-b border-GrayBorder font-medium"
              activeClassName=" font-semibold text-Primary  border-Primary"
            >
              {t('navbar.courses')}
            </NavLink>
            <NavLink
              to={ROUTES.NEWS_ROUTE}
              className="capitalize text-darkBlue block hover:text-PrimaryHover  py-2   border-b border-GrayBorder font-medium"
              activeClassName=" font-semibold text-Primary  border-Primary"
            >
              {t('navbar.news')}
            </NavLink>
            <NavLink
              to={ROUTES.INVESTMENT_ROUTE}
              className="capitalize text-darkBlue block hover:text-PrimaryHover  py-2  border-b border-GrayBorder font-medium"
              activeClassName=" font-semibold text-Primary  border-Primary"
            >
              {t('navbar.investment')}
            </NavLink>
            <NavLink
              to={ROUTES.SIGNAL_ROUTE}
              className="capitalize text-darkBlue block hover:text-PrimaryHover  py-2   border-b border-GrayBorder font-medium"
              activeClassName=" font-semibold text-Primary  border-Primary"
            >
              {t('navbar.signal')}
            </NavLink>
            <NavLink
              to={ROUTES.EXCHANGE_ROUTE}
              className="capitalize text-darkBlue block hover:text-PrimaryHover  py-2   border-b border-GrayBorder font-medium"
              activeClassName=" font-semibold text-Primary  border-Primary"
            >
              {t('navbar.exchange')}
            </NavLink>
            <NavLink
              to={ROUTES.ABOUT_ROUTE}
              className="capitalize text-blue    hover:text-PrimaryHover transition ease-in-out duration-300 block   py-2   border-b border-GrayBorder font-medium"
              activeClassName=" font-semibold text-Primary  border-Primary"
            >
              {t('navbar.about')}
            </NavLink>
            <NavLink
              to={ROUTES.CONTACT_ROUTE}
              className="capitalize text-blue  hover:text-PrimaryHover transition block   py-2   border-b border-GrayBorder font-medium"
              activeClassName=" font-semibold text-Primary  border-Primary"
            >
              {t('navbar.contact')}
            </NavLink>
            <div className="block py-2  ">{t('language')}</div>
            <div className="capitalize text-blue        justify-center border-GrayBorder font-medium grid grid-flow-col  gap-3">
              <button
                onClick={() => handleLanguageChange(`${t('en')}`)}
                className="capitalize "
              >
                {t('en')}
              </button>
              <button
                onClick={() => handleLanguageChange(`${t('ar')}`)}
                className="capitalize "
              >
                {t('ar')}
              </button>
              <button
                onClick={() => handleLanguageChange(`${t('ku')}`)}
                className="capitalize "
              >
                {t('ku-text')}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
