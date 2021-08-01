import React from 'react'
import { PropTypes } from 'prop-types'
import { useTranslation } from 'react-i18next'
export default function Title({ text, color, type, underline, style }) {
  const { i18n } = useTranslation()
  return (
    <h1
      className={`text-${color} ${type} underline-${underline}  ${i18n.dir()}   font-semibold ${style}`}
    >
      {text}
    </h1>
  )
}

Title.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  underline: PropTypes.string,
  style: PropTypes.string,
}

Title.defaultProps = {
  text: '',
  color: 'Primary',
  type: 'title',
  underline: 'center',
  style: 'text-center Capitalize',
}
