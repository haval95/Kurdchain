import React from 'react'
import CourseDetailCard from '../Containers/Cards/CourseDetailCard'
import ImageJumbotron from '../Components/ImageJumbotron'
import ContactJumbotron from '../Components/ContactJumbotron'
import { useTranslation } from 'react-i18next'
import img from '../Assets/Images/signal.png'
import Title from '../Components/Title'
export default function Course() {
  const { t } = useTranslation()
  return (
    <div>
      <ImageJumbotron title="course name" detail="" image={img} />
      <div className=" bg-Light grid grid-cols-12  lg:px-16 md:px-16 sm:px-4 py-16 gap-5 ">
        <div className="col-span-12 md:col-span-8 lg:col-span-9 grid gap-0 sm:gap-3 lg:gap-6 items-center  text-start px-10 md:px-0">
          <Title
            text="course name"
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

          <p>Course description </p>
        </div>

        <div className="col-span-12 md:col-span-4 lg:col-span-3 justify-self-center w-full  justify-center  ">
          <CourseDetailCard />
        </div>
      </div>

      <ContactJumbotron />
    </div>
  )
}
