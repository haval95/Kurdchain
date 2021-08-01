import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

export default function NavigationButton({
  location,
  text,
  style,
  colors,
  fontWeight,
}) {
  return (
    <Link
      to={location}
      className={` py-1 px-3  rounded-xl ${colors} text-center  font-${fontWeight} transition duration-300 ease-in-out ${style}`}
    >
      {text}
    </Link>
  )
}

NavigationButton.propTypes = {
  location: PropTypes.string,
  text: PropTypes.string,
  style: PropTypes.string,
  colors: PropTypes.string,
  fontWeight: PropTypes.string,
}

NavigationButton.defaultProps = {
  location: '/',
  text: 'Button',
  colors:
    'bg-SecondaryLight text-Secondary hover:bg-SecondaryOpacity hover:text-SecondaryLight',
  style: '',
  fontWeight: 'semibold',
}
