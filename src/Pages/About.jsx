import React from 'react'
import UserCard from '../Containers/Cards/UserCard'

export default function About() {
  return (
    <div>
      <div id="container" className="w-4/5 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <UserCard /> <UserCard /> <UserCard /> <UserCard />
        </div>
      </div>
    </div>
  )
}
