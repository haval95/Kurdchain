import React from 'react'
import { PropTypes } from 'prop-types'
import { useTranslation } from 'react-i18next'
import ScrollAnimation from 'react-animate-on-scroll'

export default function Title({
  text,
  color,
  type,
  underline,
  style,
  animation,
}) {
  const { i18n } = useTranslation()
  return (
    <ScrollAnimation animateIn={animation} initiallyVisible>
      <h1
        className={`text-${color} ${type} uppercase underline-${underline}  ${i18n.dir()} py-1  font-semibold ${style}`}
      >
        {text}
      </h1>
    </ScrollAnimation>
  )
}

Title.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  underline: PropTypes.string,
  style: PropTypes.string,
  animation: PropTypes.string,
}

Title.defaultProps = {
  text: '',
  color: 'Primary',
  type: 'title',
  underline: 'center',
  style: 'text-center Capitalize',
  animation: 'none',
}
