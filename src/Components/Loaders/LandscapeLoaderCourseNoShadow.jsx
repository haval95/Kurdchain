import React from 'react'
import ContentLoader from 'react-content-loader'

export default function LandscapeLoaderCourseNoShadow() {
  return (
    <ContentLoader
      className=" "
      speed={2}
      width={'100%'}
      height={'75vh'}
      viewBox="0 0 100% 100vh"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="5%" y="5%" ry="0" width="90%" height="45%" />
      <rect x="43%" y="60%" ry="3" width="15%" height="12" />
      <rect x="20%" y="68%" ry="3" width="15%" height="8" />
      <rect x="60%" y="68%" ry="3" width="15%" height="8" />
      <rect x="20%" y="73%" ry="3" width="15%" height="8" />
      <rect x="60%" y="73%" ry="3" width="15%" height="8" />
      <rect x="20%" y="78%" ry="3" width="15%" height="8" />
      <rect x="60%" y="78%" ry="3" width="15%" height="8" />
      <rect x="20%" y="83%" ry="3" width="15%" height="8" />
      <rect x="60%" y="83%" ry="3" width="15%" height="8" />
    </ContentLoader>
  )
}
