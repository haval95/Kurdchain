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
export default function Course() {
  const { t } = useTranslation()
  const { id } = useParams()
  const history = useHistory()
  const coursesData = useSelector(state => state.courses)

  const [data, setData] = useState(null)

  useEffect(() => {
    const currentCourse = coursesData.data.find(course => course.id == id)
    if (currentCourse) {
      setData(currentCourse)
    } else if (coursesData.data.length !== 0 && !currentCourse) {
      history.push('/NotFound')
    }
  }, [coursesData.data, id])

  return (
    <div>
      <ImageJumbotron
        title={
          data ? (
            t('currentLanguage') == 'kurdish' ? (
              data.name_he
            ) : t('currentLanguage') == 'arabic' ? (
              data.name_ar
            ) : (
              data.name_en
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
          <div className="col-span-12 md:col-span-8 lg:col-span-9 grid gap-0 sm:gap-3 lg:gap-6 items-center  text-start px-10 md:px-0">
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

            <div className="  ">
              <iframe
                src="https://player.vimeo.com/video/76979871?embedparameter=value"
                className="w-full "
                height="300"
                width="350"
                frameBorder="3"
                allowFullScreen
              ></iframe>
            </div>
            <Title
              text={t('decription')}
              underline="none"
              type="subTitle"
              style="text-start"
              color="Secondary"
              animation="bounceIn"
            />

            <p>
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
              instructor={data.name}
              price={data.price}
              type={
                t('currentLanguage') == 'kurdish'
                  ? data.type.name_he
                  : t('currentLanguage') == 'arabic'
                  ? data.type.name_ar
                  : data.type.name_en
              }
              id={data.id}
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
