import React from 'react'
import Title from '../../Components/Title'

import Button from '../../Components/Button'
import { PropTypes } from 'prop-types'
import Paragraph from '../../Components/Paragraph'
import { useTranslation } from 'react-i18next'
import img from '../../Assets/Images/signalService.svg'
export default function CourseCard({ name, image, color, description }) {
  const { t } = useTranslation()

  return (
    <div className="w-72 h-96 bg-white z-0 cursor-pointer border border-GrayBorder rounded-3xl    focus:outline-none relative bg-Light shadow-xl  transform  transition duration-500 ease-in-out">
      <div className="relative">
        <img
          src={image}
          alt="item card"
          className="rounded-t-3xl border-none  object-contain  h-40 w-full"
        />
      </div>

      <div className="py-1   px-4 grid">
        <Title
          text={name}
          underline="none"
          color={color}
          type="subTitle"
          style="text-start uppercase font-light  truncate"
        />

        <Paragraph
          text={description}
          style="h-32 py-2 overflow-y-hidden turncate text-justify"
          colors="text-Gray"
        />

        <div className="text-xs flex justify-between    ">
          <Button text={t('subscribe')} color={color} style="font-light" />
        </div>
      </div>
    </div>
  )
}

CourseCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  color: PropTypes.string,
  description: PropTypes.string,
}

CourseCard.defaultProps = {
  name: 'TITLE',
  image: img,

  description:
    'Enim deserunt ullamco minim cupidatat incididunt occaecat qui excepteur ullamco officia.',
  color: 'Primary',
}
