import React from 'react'

import Button from '../../Components/Button'
import { PropTypes } from 'prop-types'
import Paragraph from '../../Components/Paragraph'
import { useTranslation } from 'react-i18next'
import img from '../../Assets/Images/signalService.svg'
import { useDispatch } from 'react-redux'
import { OpenSubscribeModal } from '../../Redux/Modals/ModalActions'
export default function CourseCard({ name, image, color, description }) {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  return (
    <div className="w-80 h-96 bg-white z-0 cursor-pointer border border-GrayBorder rounded-3xl    focus:outline-none relative bg-Light shadow-xl  transform  transition duration-500 ease-in-out">
      <div className={`relative border-b border-GrayBorder mb-3 py-2`}>
        <img
          src={image}
          alt="item card"
          className="rounded-t-3xl border-none  object-contain  h-36 w-full "
        />
      </div>

      <div className="py-1   px-5 overflow-hidden grid ">
        <h1 className="text-start capitalize    text-xl text-Primary ">
          {name}
        </h1>

        <Paragraph
          text={description}
          style="h-32 py-2  overflow-y-hidden turncate text-justify "
          colors="text-Gray"
        />

        <div className="absolute bottom-4 right-5 left-5">
          <Button
            text={t('subscribe')}
            color={color}
            style="font-light"
            clickAction={() => dispatch(OpenSubscribeModal())}
          />
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
