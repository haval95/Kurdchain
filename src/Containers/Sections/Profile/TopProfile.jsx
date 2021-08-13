import React from 'react'

import logo from '../../../Assets/Images/logo.svg'
import { useSelector } from 'react-redux'
export default function TopProfile() {
  const user = useSelector(state => state.user)

  return (
    <div className="  bg-profile  justify-items-stretch  h-72   grid  ">
      <div className="bg-SecondaryOpacity pt-10 h-72 grid  text-center items-center">
        <div className="flex justify-center h-32  mt-2 ">
          <img
            src={logo}
            alt=""
            className="font-bold text-xl w-28 h-28 bg-Light text-center block px-5 mt-2 py-1 rounded-full shadow-lg   max-w-md justify-self-center"
          />
        </div>

        <div className="bg-Light capitalize font-bold text-xl w-full max-w-xs justify-self-center rounded-xl my-1">
          {user.user.data.username ? user.user.data.username : null}
        </div>
        <div className="bg-Light capitalize font-bold text-xl w-full max-w-xs justify-self-center rounded-xl mb-2">
          {user.user.data.phone_number ? user.user.data.phone_number : null}
        </div>
      </div>
    </div>
  )
}
