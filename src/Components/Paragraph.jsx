import React from 'react'
import { PropTypes } from 'prop-types'
export default function Paragraph({ text, style, colors }) {
  return <p className={`text-sm ${style}  ${colors}  `}>{text}</p>
}

Paragraph.propTypes = {
  text: PropTypes.string,
  style: PropTypes.string,
  colors: PropTypes.string,
}

Paragraph.defaultProps = {
  text: 'paragraph ',
  colors: 'text-Dark',
  style: '',
}
