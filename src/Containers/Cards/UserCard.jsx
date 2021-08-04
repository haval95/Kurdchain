import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Title from '../../Components/Title'
import { PropTypes } from 'prop-types'
import ScrollAnimation from 'react-animate-on-scroll'

export default function UserCard({ name, position, linkedin, image }) {
  return (
    <ScrollAnimation animateIn={'fadeInLeft'}>
      <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
        <div className="mb-3">
          <img
            className=" mx-auto rounded-full border border-Primary w-52 h-52 object-cover"
            src={image}
            alt=""
          />
        </div>
        <Title text={name} underline="none" type="subTitle" />
        <span className="text-blue-500 block mb-5">{position}</span>

        <a
          href={linkedin}
          className="px-2 text-2xl py-2    text-Primary "
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </a>
      </div>
    </ScrollAnimation>
  )
}
UserCard.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  linkedin: PropTypes.string,
  image: PropTypes.string,
}

UserCard.defaultProps = {
  name: 'name',
  position: 'position',
  linkedin: 'https://github.com/haval95',
  image:
    'https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg',
}
