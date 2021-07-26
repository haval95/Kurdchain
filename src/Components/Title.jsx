import React from 'react'
import { PropTypes } from 'prop-types'
import { useTranslation } from 'react-i18next'
export default function Title({ text, color, type, underline }) {
  const { i18n } = useTranslation()
  return (
    <h1
      className={`text-${color} ${type} underline-${underline}  ${i18n.dir()} m-1 capitalize font-semibold `}
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
}

Title.defaultProps = {
  text: '',
  color: 'Primary',
  type: 'title',
  underline: 'center',
}
