import React from 'react'
//import { useTranslation } from 'react-i18next'
import logo from '../../../Assets/Images/logo.svg'

export default function TopProfile() {
  // const user = useSelector(state => state.authentication)

  // const { t } = useTranslation()
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
          Name
        </div>
        <div className="bg-Light capitalize font-bold text-xl w-full max-w-xs justify-self-center rounded-xl mb-2">
          564564687
        </div>
      </div>
    </div>
  )
}
