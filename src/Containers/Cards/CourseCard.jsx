import React from 'react'
import Title from '../../Components/Title'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavigationButton from '../../Components/NavigationButton'
import { PropTypes } from 'prop-types'
import Paragraph from '../../Components/Paragraph'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CourseCard({
  id,
  name,
  image,
  price,
  date,
  description,
  instructor,
  duration,
  time,
}) {
  return (
    <div className="w-72 h-96 bg-white  cursor-pointer border border-GrayBorder rounded-3xl hover:-translate-y-2 focus:outline-none relative bg-LightGray shadow-lg hover:shadow-sm transform  transition duration-500 ease-in-out">
      <div className="relative">
        <div className="bg-Warning text-Light px-5 py-1 text-right absolute bottom-3 rounded-l-xl  right-0">
          {`$${new Intl.NumberFormat().format(price)}`}
        </div>
        <img
          src={image}
          alt="item card"
          className="rounded-t-3xl border-none  object-cover  h-44 w-full"
        />
      </div>

      <div className="py-1  px-4 grid">
        <Title
          text={name}
          underline="none"
          type="subTitle"
          color="Secondary"
          style="text-start  truncate"
        />
        <div className="grid grid-cols-2 ">
          <Paragraph text={instructor} colors="text-Secondary" />
          <Paragraph text={date.slice(0, 10)} style="font-light mb-1 " />
        </div>
        <Paragraph
          text={description}
          style="h-20 overflow-y-hidden turncate text-justify"
          colors="text-Gray"
        />

        <div className=" text-Secondary flex space-x-2 items-center p-1">
          <FontAwesomeIcon icon="clock" className="text-sm" />
          <Paragraph text={time + duration} style="mt-1 inline self-center" />
        </div>

        <div className="text-xs flex justify-between  absolute inset-x-0 bottom-0  ">
          <NavigationButton
            location={`/course/${id}`}
            text="DETAIL"
            style="w-full mt-2 rounded-b-xl rounded-t-none py-2  "
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
}

CourseCard.defaultProps = {
  id: '0',
  name: 'name is gonna',
  image: 'https://i.pravatar.cc/150?img=31',
  price: 0,
  date: '14/1/2021',
  description:
    'Enim voluptate nulla minim id nostrud non mollit incididunt et proident quis. Do consectetur culpa excepteur commodo laboris voluptate laborum fugiat Lorem aliquip veniam consectetur. Aute sunt voluptate ea quis aliquip nisi sint veniam dolore ullamco qui qui eu quis. Lorem sint cupidatat veniam do in. Mollit excepteur ipsum eu minim consectetur officia aliquip do consequat Lorem Lorem ea irure voluptate. Enim deserunt ullamco minim cupidatat incididunt occaecat qui excepteur ullamco officia.',
  instructor: 'Firstname',
  duration: 'h',
  time: 5,
}
