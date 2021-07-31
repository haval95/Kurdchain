import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Title from '../../Components/Title'
import { PropTypes } from 'prop-types'

export default function UserCard({ name, position, linkedin, image }) {
  return (
    <div className="sm:w-1/4 p-1">
      <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
        <div className="mb-3">
          <img className="w-auto mx-auto rounded-full" src={image} alt="" />
        </div>
        <Title text={name} underline="none" type="subTitle" />
        <span className="text-blue-500 block mb-5">{position}</span>

        <a
          href={linkedin}
          className="px-4 text-2xl py-2    text-Primary "
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </a>
        <a href={linkedin} className="px-4 text-2xl py-2    text-Primary">
          <FontAwesomeIcon icon={['fab', 'facebook-square']} />
        </a>
        <a href={linkedin} className="px-4 text-2xl py-2    text-Primary">
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </a>
      </div>
    </div>
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
  image: 'https://i.pravatar.cc/150?img=31',
}
