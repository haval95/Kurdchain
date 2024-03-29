import React from 'react'

import Title from '../../Components/Title'
import { PropTypes } from 'prop-types'
import ScrollAnimation from 'react-animate-on-scroll'

export default function UserCard({ name, position, image }) {
  return (
    <ScrollAnimation animateIn={'fadeIn'}>
      <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center border border-GrayBorder">
        <div className="mb-3">
          <img
            className=" mx-auto rounded-full border border-Primary w-52 h-52 object-cover"
            src={image}
            alt=""
          />
        </div>
        <Title
          text={name}
          underline="none"
          type="subTitle"
          style="capitalize"
        />
        <span className="text-blue-500 block mb-5">{position}</span>
      </div>
    </ScrollAnimation>
  )
}
UserCard.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,

  image: PropTypes.string,
}

UserCard.defaultProps = {
  name: 'name',
  position: 'position',

  image:
    'https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg',
}
