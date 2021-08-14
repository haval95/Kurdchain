import React from 'react'
import { PropTypes } from 'prop-types'
import Title from './Title'

export default function ImageJumbotron({ image, title, detail }) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: ' cover',
      }}
    >
      <div className="bg-SecondaryOpacity py-9  grid justify-center items-center h-full   content-center text-center">
        <div className="mb-1">
          <Title text={title} color="Light" style="sm:uppercase" />
        </div>
        <p className="text-Light font-medium  text-xl  px-3 lg:max-w-screen-lg   mt-1 justify-self-center text-center  ">
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
  detail: 'decription will be set here ',
  title: 'title',
}
