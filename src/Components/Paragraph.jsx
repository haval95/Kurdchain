import React from 'react'
import { PropTypes } from 'prop-types'
// eslint-disable-next-line react/prop-types
export default function Paragraph({ text, style, colors, textalign }) {
  return <p className={`text-sm ${style}  ${colors} ${textalign}  `}>{text}</p>
}

Paragraph.propTypes = {
  style: PropTypes.string,
  colors: PropTypes.string,
  textalign: PropTypes.string,
}

Paragraph.defaultProps = {
  colors: 'text-Dark',
  style: '',
  textalign: 'text-start',
}
