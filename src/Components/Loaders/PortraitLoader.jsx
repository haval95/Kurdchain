import React from 'react'
import ContentLoader from 'react-content-loader'

export default function PortraitLoader() {
  return (
    <ContentLoader
      className=" shadow-xl rounded-2xl"
      speed={2}
      width={300}
      height={384}
      viewBox="0 0 300 384"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" ry="0" width="100%" height="160" />
      <rect x="15" y="180" ry="3" width="40%" height="15" />
      <rect x="15" y="210" ry="3" width="30%" height="12" />
      <rect x="60%" y="210" ry="3" width="30%" height="12" />
      <rect x="15" y="250" ry="3" width="90%" height="6" />
      <rect x="15" y="265" ry="3" width="70%" height="6" />
      <rect x="15" y="280" ry="3" width="90%" height="6" />
      <rect x="15" y="295" ry="3" width="60%" height="6" />
      <rect x="15" y="310" ry="3" width="80%" height="6" />
      <rect x="0" y="92%" ry="3" width="100%" height="8%" />
    </ContentLoader>
  )
}
