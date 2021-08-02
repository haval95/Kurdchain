import React from 'react'
import Title from '../../Components/Title'

import Button from '../../Components/Button'
import { PropTypes } from 'prop-types'
import Paragraph from '../../Components/Paragraph'

export default function CourseCard({ name, image, color, description }) {
  return (
    <div className="w-72 h-96 bg-white z-0 cursor-pointer border border-GrayBorder rounded-3xl  focus:outline-none relative bg-Light shadow-lg  transform  transition duration-500 ease-in-out">
      <div className="relative">
        <img
          src={image}
          alt="item card"
          className="rounded-t-3xl border-none  object-cover  h-40 w-full"
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

        <div className="text-xs flex justify-between  mt-3  ">
          <Button text="SUBSCRIBE" color={color} style="font-light" />
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
  image: 'https://i.pravatar.cc/150?img=31',

  description:
    'Enim voluptate nulla minim id nostrud non mollit incididunt et proident quis. Do consectetur culpa excepteur commodo laboris voluptate laborum fugiat Lorem aliquip veniam consectetur. Aute sunt voluptate ea quis aliquip nisi sint veniam dolore ullamco qui qui eu quis. Lorem sint cupidatat veniam do in. Mollit excepteur ipsum eu minim consectetur officia aliquip do consequat Lorem Lorem ea irure voluptate. Enim deserunt ullamco minim cupidatat incididunt occaecat qui excepteur ullamco officia.',
  color: 'Primary',
}
