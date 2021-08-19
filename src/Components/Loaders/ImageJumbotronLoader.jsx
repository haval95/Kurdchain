import React from 'react'
import ContentLoader from 'react-content-loader'

export default function PortraitLoaderLtr() {
  return (
    <ContentLoader
      speed={2}
      width={'100%'}
      height={'25%'}
      viewBox="0 0 100% 50vh"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0%" y="0%" ry="0" width="100%" height="100%" />
    </ContentLoader>
  )
}
