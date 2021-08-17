import React from 'react'
import Title from '../../Components/Title'
import NavigationButton from '../../Components/NavigationButton'
import { PropTypes } from 'prop-types'
import Paragraph from '../../Components/Paragraph'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import { courseImage } from '../../Helper/Domain'

export default function CourseCard({
  id,
  name,
  image,
  price,
  date,
  language,
  description,
  instructor,
  duration,
  time,
}) {
  const { t } = useTranslation()

  return (
    <div className="w-72 h-96 border-r border-l border-GrayBorder  cursor-pointer   rounded-3xl hover:-translate-y-2 focus:outline-none relative bg-Light shadow-xl hover:shadow-none hover:bg-light transform  transition duration-500 ease-in-out">
      <div className="relative">
        <div className="bg-PrimaryHover text-Light px-5 py-1 text-right absolute bottom-3 rounded-l-xl  right-0">
          {`IQD ${new Intl.NumberFormat().format(price)}`}
        </div>
        <img
          src={courseImage + image}
          alt="item card"
          className="rounded-t-3xl border-none  object-cover  h-40 w-full"
        />
      </div>

      <div className="py-1  px-4 grid">
        <div className=" w-full overflow-x-hidden">
          <Title
            text={name}
            underline="none"
            type="subTitle"
            color="Secondary"
            style="text-start truncate   "
          />
        </div>
        <div className="grid grid-cols-2 ">
          <Paragraph text={instructor} colors="text-Secondary" />
          <Paragraph text={date.slice(0, 10)} style="font-light mb-1 " />
        </div>
        <Paragraph
          text={description}
          style="h-20 overflow-y-hidden turncate text-justify"
          colors="text-Gray"
        />

        <div className=" text-Secondary grid grid-flow-col  items-center p-1 justify-between gap-3">
          <span className="items-center grid grid-flow-col gap-1">
            <FontAwesomeIcon icon="clock" className="text-sm text-Primary" />

            <Paragraph text={time} style=" inline" />

            <Paragraph text={duration} style=" inline" />
          </span>
          <Paragraph text={language} style=" inline" />
        </div>

        <div className="text-xs    absolute inset-x-0 bottom-0  w-full ">
          <NavigationButton
            location={`/course/${id}`}
            text={t('detail')}
            style="w-full mt-2 rounded-b-xl rounded-t-none py-2 uppercase "
            colors="bg-Primary text-Light hover:bg-PrimaryHover   "
          />
        </div>
      </div>
    </div>
  )
}

CourseCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.Number,
  date: PropTypes.string,
  description: PropTypes.string,
  instructor: PropTypes.string,
  duration: PropTypes.string,
  time: PropTypes.string,
  language: PropTypes.string,
}

CourseCard.defaultProps = {
  id: '0',
  name: 'name is gonna',
  image:
    'https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/01/online-course-main-800x549.png',
  price: 0,
  language: 'language',
  date: '14/1/2021',
  description:
    'Enim voluptate nulla minim id nostrud non mollit incididunt et proident quis. Do consectetur culpa excepteur commodo laboris voluptate laborum fugiat Lorem aliquip veniam consectetur. Aute sunt voluptate ea quis aliquip nisi sint veniam dolore ullamco qui qui eu quis. Lorem sint cupidatat veniam do in. Mollit excepteur ipsum eu minim consectetur officia aliquip do consequat Lorem Lorem ea irure voluptate. Enim deserunt ullamco minim cupidatat incididunt occaecat qui excepteur ullamco officia.',
  instructor: 'Firstname',
  duration: 'h',
  time: 5,
}
