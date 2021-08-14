import React from 'react'
import { PropTypes } from 'prop-types'
export default function Button({
  font,
  text,
  color,
  clickAction,
  style,
  textcolor,
}) {
  return (
    <button
      className={`bg-${color} ${font} hover:bg-${color}Hover text-${textcolor} ${style} w-full py-1 uppercase shadow-md hover:shadow-none  rounded-md transition duration-500 ease-in-out`}
      onClick={clickAction}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  clickAction: PropTypes.func,
  text: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.string,
  font: PropTypes.string,
  textcolor: PropTypes.string,
}

Button.defaultProps = {
  text: '',
  font: 'text-xl',
  style: 'Primary',
  color: 'Primary',
  textcolor: 'Light',
  clickAction: () => alert('no actions provied'),
}
