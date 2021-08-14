import React from 'react'
import ContentLoader from 'react-content-loader'

export default function PortraitLoaderLtr() {
  return (
    <ContentLoader
      className=" shadow-xl rounded-2xl"
      speed={2}
      width={'100%'}
      height={'100vh'}
      viewBox="0 0 100% 100vh"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="10%" y="10%" ry="3" width="20%" height="25" />
      <rect x="10%" y="18%" ry="0" width="75%" height="45%" />
      <rect x="10%" y="68%" ry="3" width="15%" height="12" />
      <rect x="10%" y="75%" ry="3" width="45%" height="6" />
      <rect x="10%" y="77%" ry="3" width="42%" height="6" />
      <rect x="10%" y="79%" ry="3" width="43%" height="6" />
      <rect x="10%" y="81%" ry="3" width="44%" height="6" />
    </ContentLoader>
  )
}
