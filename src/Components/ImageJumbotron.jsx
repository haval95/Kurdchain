import React from 'react'
import { PropTypes } from 'prop-types'
import Title from './Title'
export default function ImageJumbotron({ image, title, detail }) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="  w-screen   max-h-full    bg "
    >
      <div className="bg-SecondaryOpacity py-9 w-screen grid justify-center items-center h-full   content-center text-center">
        <div className="mb-1">
          <Title text={title} color="Light" />
        </div>
        <p className="text-Light text-xl w-8/12 text-center mt-1 justify-self-center ">
          {detail}
        </p>
      </div>
    </div>
  )
}

ImageJumbotron.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  detail: PropTypes.string,
  underline: PropTypes.string,
}

ImageJumbotron.defaultProps = {
  image: `https://via.placeholder.com/${window.innerWidth}x150`,
  detail:
    'decription will be set here and lets see how does it show on the screen',
  title: 'title',
}
