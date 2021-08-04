import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'
export default function NavigationButton({
  location,
  text,
  style,
  colors,
  fontWeight,
  animation,
}) {
  return (
    <ScrollAnimation animateIn={animation} initiallyVisible>
      <Link to={location}>
        <button
          className={` py-1   rounded-xl w-full ${colors} text-center shadow hover:shadow-none font-${fontWeight} transition duration-500 ease-in-out ${style}`}
        >
          {text}
        </button>
      </Link>
    </ScrollAnimation>
  )
}

NavigationButton.propTypes = {
  location: PropTypes.string,
  text: PropTypes.string,
  style: PropTypes.string,
  colors: PropTypes.string,
  fontWeight: PropTypes.string,
  animation: PropTypes.string,
}

NavigationButton.defaultProps = {
  location: '/',
  text: 'Button',
  colors:
    'bg-SecondaryLight text-Secondary hover:bg-SecondaryOpacity hover:text-SecondaryLight  shadow-md',
  style: '',
  fontWeight: 'semibold ',
  animation: 'null',
}
