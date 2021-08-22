import React from 'react'
import Title from '../../../Components/Title'
import Paragraph from '../../../Components/Paragraph'
import SiganlCard from '../../../Containers/Cards/SignalCard'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import uuid from 'react-uuid'
import { signalImage } from './../../../Helper/Domain'
import ContentLoader from 'react-content-loader'
import comingSoon from '../../../Assets/Images/coming-soon.png'
export default function SpotSection() {
  const { t } = useTranslation()
  const state = useSelector(state => state.signals)

  return (
    <>
      <div className="  mb-10 p-inline-start-2 text-start grid gap-6">
        <Title
          text={t('spot')}
          underline="start"
          style="text-start"
          animation="bounceIn"
        />
        <Paragraph text={t('spotSlogan') + '.'} style="text-lg" />
      </div>
      <div className=" items-center mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-start  justify-evenly justify-items-center gap-10">
        {state.data.spot && state.loading == false ? (
          state.data.spot[0].signals.length ? (
            state.data.spot[0].signals.map(eachSignal => {
              return (
                <SiganlCard
                  key={uuid()}
                  name={
                    t('currentLanguage') == 'kurdish'
                      ? eachSignal.title_he
                      : t('currentLanguage') == 'arabic'
                      ? eachSignal.title_ar
                      : eachSignal.title_en
                  }
                  image={signalImage + eachSignal.image}
                  description={
                    t('currentLanguage') == 'kurdish'
                      ? eachSignal.description_he
                      : t('currentLanguage') == 'arabic'
                      ? eachSignal.description_ar
                      : eachSignal.description_en
                  }
                />
              )
            })
          ) : (
            <img
              src={comingSoon}
              className="justify-self-center text-center w-52  col-span-full grayscale hover:grayscale-0 filter  transition-all ease-in-out duration-500 "
            />
          )
        ) : (
          <>
            <ContentLoader
              className="border border-CurrencyBorder max-w-xs rounded-2xl shadow-xl"
              speed={3}
              width={'100%'}
              height={350}
              viewBox="0 0 800 100%"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="0%" y="0" ry="3" width="100%" height="100" />
              <rect x="5%" y="120" ry="3" width="30%" height="15" />

              <rect x="5%" y="165" ry="3" width="86%" height="10" />
              <rect x="5%" y="185" ry="3" width="80%" height="10" />
              <rect x="5%" y="205" ry="3" width="90%" height="10" />
              <rect x="5%" y="225" ry="3" width="70%" height="10" />
              <rect x="8%" y="280" ry="3" width="84%" height="40" />
            </ContentLoader>
            <ContentLoader
              className="border border-CurrencyBorder max-w-xs rounded-2xl shadow-xl hidden lg:inline"
              speed={3}
              width={'100%'}
              height={350}
              viewBox="0 0 800 100%"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="0%" y="0" ry="3" width="100%" height="100" />
              <rect x="5%" y="120" ry="3" width="30%" height="15" />

              <rect x="5%" y="165" ry="3" width="86%" height="10" />
              <rect x="5%" y="185" ry="3" width="80%" height="10" />
              <rect x="5%" y="205" ry="3" width="90%" height="10" />
              <rect x="5%" y="225" ry="3" width="70%" height="10" />
              <rect x="8%" y="280" ry="3" width="84%" height="40" />
            </ContentLoader>
            <ContentLoader
              className="border border-CurrencyBorder max-w-xs rounded-2xl shadow-xl  hidden lg:inline"
              speed={3}
              width={'100%'}
              height={350}
              viewBox="0 0 800 100%"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="0%" y="0" ry="3" width="100%" height="100" />
              <rect x="5%" y="120" ry="3" width="30%" height="15" />

              <rect x="5%" y="165" ry="3" width="86%" height="10" />
              <rect x="5%" y="185" ry="3" width="80%" height="10" />
              <rect x="5%" y="205" ry="3" width="90%" height="10" />
              <rect x="5%" y="225" ry="3" width="70%" height="10" />
              <rect x="8%" y="280" ry="3" width="84%" height="40" />
            </ContentLoader>
          </>
        )}
      </div>
    </>
  )
}
