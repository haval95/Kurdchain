import React from 'react'
import UserCard from '../Containers/Cards/UserCard'
import { useTranslation } from 'react-i18next'
import ImageJumbotron from '../Components/ImageJumbotron'
import img from '../Assets/Images/aboutbg.png'
import logo from '../Assets/Images/logo.svg'
import Title from '../Components/Title'
export default function About() {
  const { t } = useTranslation()
  return (
    <>
      <ImageJumbotron title={t('navbar.about')} detail="" image={img} />
      <div className="bg-Light grid  md:px-16 lg:px-24 py-16">
        <div className="  mb-10 px-8 text-start grid gap-6">
          <Title
            text={t('navbar.about')}
            underline="start"
            style="text-start"
            animation="bounceIn"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 text-justify items-center ">
            <p className="text-lg"> {t('aboutSlogan')}</p>
            <img
              src={logo}
              className="w-2/4 justify-center justify-self-center pt-4 shadow-inner mt-5 sm:mt-0  sm p-4"
            />
          </div>
        </div>

        <div className="   mb-10 px-8 text-start grid gap-6">
          <Title
            text={t('team')}
            underline="start"
            style="text-start capitalize"
            animation="bounceIn"
          />
          <div>
            <div className="grid justify-center sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-5">
              <UserCard name={t('ranj')} position={t('ranjPosition')} />
              <UserCard name={t('danial')} position={t('danialPosition')} />
              <UserCard name={t('mustafa')} position={t('mustafaPosition')} />
              <UserCard name={t('aryan')} position={t('aryanPosition')} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
