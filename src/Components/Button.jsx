import React from 'react'
import { PropTypes } from 'prop-types'
export default function Button({ text, color, clickAction }) {
  return (
    <button
      className={`bg-${color} text-xl hover:bg-${color}Hover w-full py-2 uppercase text-Light rounded-2xl transition duration-500 ease-in-out`}
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
}

Button.defaultProps = {
  text: '',
  style: 'Primary',
  clickAction: () => [],
}
