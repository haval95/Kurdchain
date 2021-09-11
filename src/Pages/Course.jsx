import React from 'react'
import CourseDetailCard from '../Containers/Cards/CourseDetailCard'
import ImageJumbotron from '../Components/ImageJumbotron'
import ContactJumbotron from '../Components/ContactJumbotron'
import { useTranslation } from 'react-i18next'
import LandscapeLoaderLtr from '../Components/Loaders/LandscapeLoaderCourseLtr'
import Loader from 'react-loader-spinner'
import Title from '../Components/Title'
import { useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { courseImage } from '../Helper/Domain'
import ImportScript from '../Hooks/ImportScript'
export default function Course() {
  const { t } = useTranslation()
  const { id } = useParams()
  const history = useHistory()
  const coursesData = useSelector(state => state.courses)

  ImportScript('https://player.vimeo.com/api/player.js')
  const [data, setData] = useState(null)

  useEffect(() => {
    const currentCourse = coursesData.filteredData.find(
      course => course.id == id
    )
    if (currentCourse) {
      setData(currentCourse)
    } else if (coursesData.filteredData.length !== 0 && !currentCourse) {
      history.push('/NotFound')
    }
  }, [coursesData.data, id])

  return (
    <div>
      <ImageJumbotron
        title={
          data ? (
            t('currentLanguage') == 'kurdish' ? (
              String(data.name_he)
            ) : t('currentLanguage') == 'arabic' ? (
              String(data.name_ar)
            ) : (
              String(data.name_en)
            )
          ) : (
            <Loader type="Rings" color="#efefef" height={100} width={100} />
          )
        }
        detail=""
        image={data ? courseImage + data.image : 'loading'}
      />
      {data ? (
        <div className=" bg-Light grid grid-cols-12  lg:px-16 md:px-16 sm:px-4 py-16 gap-5 ">
          <div className="col-span-12 md:col-span-8 lg:col-span-9 grid gap-0 sm:gap-3 lg:gap-6 items-center  text-start sm:px-10 md:px-0">
            <Title
              text={
                t('currentLanguage') == 'kurdish'
                  ? data.name_he
                  : t('currentLanguage') == 'arabic'
                  ? data.name_ar
                  : data.name_en
              }
              underline="start"
              style="text-start"
              animation="bounceIn"
            />
            <p className="text-xl text-Secondary font-bold my-3">
              {t('lesonExample')}
            </p>

            <div className=" w-full px-0 lg:w-10/12 justify-self-center sm:justify-self-start  ">
              <div
                className="bg-GrayBorder  border-GrayBorder border-4 p-2 shadow-md "
                style={{
                  padding: '56.25% 0 0 0',
                  position: 'relative',
                }}
              >
                <iframe
                  src={data.demo_video}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                  }}
                ></iframe>
              </div>
            </div>
            <Title
              text={t('decription')}
              underline="none"
              type="subTitle"
              style="text-start my-3"
              color="Secondary"
              animation="bounceIn"
            />

            <p className="">
              {t('currentLanguage') == 'kurdish'
                ? data.description_he
                : t('currentLanguage') == 'arabic'
                ? data.description_ar
                : data.description_en}
            </p>
          </div>

          <div className="col-span-12 md:col-span-4 lg:col-span-3 justify-self-center w-full  justify-center  ">
            <CourseDetailCard
              duration={
                data.time +
                '   ' +
                (t('currentLanguage') == 'kurdish'
                  ? data.duration.name_he
                  : t('currentLanguage') == 'arabic'
                  ? data.duration.name_ar
                  : data.duration.name_en + '(s)')
              }
              level={
                t('currentLanguage') == 'kurdish'
                  ? data.level.name_he
                  : t('currentLanguage') == 'arabic'
                  ? data.level.name_ar
                  : data.level.name_en
              }
              language={
                t('currentLanguage') == 'kurdish'
                  ? data.language.name_he
                  : t('currentLanguage') == 'arabic'
                  ? data.language.name_ar
                  : data.language.name_en
              }
              instructor={
                t('currentLanguage') == 'kurdish'
                  ? data.instructor.name_he
                  : t('currentLanguage') == 'arabic'
                  ? data.instructor.name_ar
                  : data.instructor.name_en
              }
              price={data.price}
              type={
                t('currentLanguage') == 'kurdish'
                  ? data.type.name_he
                  : t('currentLanguage') == 'arabic'
                  ? data.type.name_ar
                  : data.type.name_en
              }
              id={data.id}
              access={data.day}
            />
          </div>
        </div>
      ) : (
        <LandscapeLoaderLtr />
      )}
      <ContactJumbotron />
    </div>
  )
}
