import React from 'react'
import logo from '../../../Assets/Images/logo.svg'
export default function CoinWedgie() {
  return (
    <div className="relative ltr">
      <div className="absolute top-0 bg-Light w-28 h-14 items-center grid justify-center m-1">
        <img src={logo} />
      </div>
      <div
        className="pointer-events-none"
        id="coinmarketcap-widget-marquee"
        coins="1,1027,825,2010,3408,52,1839"
        currency="USD"
        theme="light"
        transparent="false"
        show-symbol-logo="true"
      ></div>
    </div>
  )
}
