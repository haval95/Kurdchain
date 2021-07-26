import './App.css'

import { useEffect } from 'react'

import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation()
  document.body.dir = i18n.dir()
  i18n.changeLanguage('en')
  useEffect(() => {
    document.dir = i18n.dir()
  }, [i18n, i18n.language])
  // const handleLanguageChange = lang => {
  //   i18n.changeLanguage(lang)
  // }
  return <div>hello {t('navbar.home')} aa</div>
}

export default App
