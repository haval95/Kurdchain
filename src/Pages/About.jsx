import React from 'react'
import UserCard from '../Containers/Cards/UserCard'

export default function About() {
  return (
    <div>
      <div id="container" className="w-4/5 mx-auto">
        <div className="flex flex-col sm:flex-row">
          <UserCard /> <UserCard /> <UserCard /> <UserCard />
        </div>
      </div>
    </div>
  )
}
