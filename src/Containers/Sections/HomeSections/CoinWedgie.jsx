import React from 'react'

import logo from '../../../Assets/Images/logo.svg'
import Ticker from 'react-ticker'
import ImportScript from '../../../Hooks/ImportScript'

export default function CoinWedgie() {
  ImportScript('https://files.coinmarketcap.com/static/widget/currency.js')
  return (
    <div className="relative ltr">
      <hr className="text-PrimaryLight "></hr>

      <div className="absolute top-0 bg-Light hidden   px-5 h-full py-4 border-PrimaryLight mb-1 border items-center sm:grid justify-center  z-40">
        <img src={logo} />
      </div>
      <div className="absolute top-0 bg-transparent  px-5 h-full w-full border-PrimaryLight mb-1 border items-center grid justify-center  z-40"></div>

      <Ticker direction="toLeft" offset="run-in" speed={4} height={80}>
        {() => (
          <div className=" grid grid-flow-col   ">
            <h1 className="flex mx-5 py-8 text-PrimaryLight">
              www.kurdchain.com
            </h1>
            <div
              style={{
                marginRight: '20px',
                marginLeft: '20px',
                width: '40px',
                height: '40px',
                marginTop: '5px',
              }}
            >
              <img src={logo} style={{ height: '80px' }} alt="" />
            </div>
            <h1
              className="coinmarketcap-currency-widget mx-5"
              data-currencyid="1"
              data-base="USD"
              data-secondary=""
              data-ticker="false"
              data-rank="false"
              data-marketcap="false"
              data-volume="false"
              data-statsticker="false"
              data-stats="USD"
            ></h1>
            <div
              style={{
                marginRight: '20px',
                marginLeft: '20px',
                width: '40px',
                height: '40px',
                marginTop: '5px',
              }}
            >
              <img src={logo} style={{ height: '80px' }} alt="" />
            </div>
            <div
              className="coinmarketcap-currency-widget "
              data-currencyid="825"
              data-base="USD"
              data-secondary=""
              data-ticker="false"
              data-rank="false"
              data-marketcap="false"
              data-volume="false"
              data-statsticker="false"
              data-stats="USD"
            ></div>
            <div
              style={{
                marginRight: '20px',
                marginLeft: '20px',
                width: '40px',
                height: '40px',
                marginTop: '5px',
              }}
            >
              <img src={logo} style={{ height: '80px' }} alt="" />
            </div>
            <div
              className="coinmarketcap-currency-widget "
              data-currencyid="2010"
              data-base="USD"
              data-secondary=""
              data-ticker="false"
              data-rank="false"
              data-marketcap="false"
              data-volume="false"
              data-statsticker="false"
              data-stats="USD"
            ></div>
            <div
              style={{
                marginRight: '20px',
                marginLeft: '20px',
                width: '40px',
                height: '40px',
                marginTop: '5px',
              }}
            >
              <img src={logo} style={{ height: '80px' }} alt="" />
            </div>
            <div
              className="coinmarketcap-currency-widget "
              data-currencyid="512"
              data-base="USD"
              data-secondary=""
              data-ticker="false"
              data-rank="false"
              data-marketcap="false"
              data-volume="false"
              data-statsticker="false"
              data-stats="USD"
            ></div>
            <div
              style={{
                marginRight: '20px',
                marginLeft: '20px',
                width: '40px',
                height: '40px',
                marginTop: '5px',
              }}
            >
              <img src={logo} style={{ height: '80px' }} alt="" />
            </div>
            <div
              className="coinmarketcap-currency-widget "
              data-currencyid="52"
              data-base="USD"
              data-secondary=""
              data-ticker="false"
              data-rank="false"
              data-marketcap="false"
              data-volume="false"
              data-statsticker="false"
              data-stats="USD"
            ></div>
            <div
              style={{
                marginRight: '20px',
                marginLeft: '20px',
                width: '40px',
                height: '40px',
                marginTop: '5px',
              }}
            >
              <img src={logo} style={{ height: '80px' }} alt="" />
            </div>
            <div
              className="coinmarketcap-currency-widget mx-5 "
              data-currencyid="3"
              data-base="USD"
              data-secondary=""
              data-ticker="false"
              data-rank="false"
              data-marketcap="false"
              data-volume="false"
              data-statsticker="false"
              data-stats="USD"
            ></div>
            <div
              style={{
                marginRight: '20px',
                marginLeft: '20px',
                width: '40px',
                height: '40px',
                marginTop: '5px',
              }}
            >
              <img src={logo} style={{ height: '80px' }} alt="" />
            </div>
            <div
              className="coinmarketcap-currency-widget mx-5 "
              data-currencyid="4"
              data-base="USD"
              data-secondary=""
              data-ticker="false"
              data-rank="false"
              data-marketcap="false"
              data-volume="false"
              data-statsticker="false"
              data-stats="USD"
            ></div>
            <div
              style={{
                marginRight: '20px',
                marginLeft: '20px',
                width: '40px',
                height: '40px',
                marginTop: '5px',
              }}
            >
              <img src={logo} style={{ height: '80px' }} alt="" />
            </div>
            <div
              className="coinmarketcap-currency-widget mx-5 "
              data-currencyid="6"
              data-base="USD"
              data-secondary=""
              data-ticker="false"
              data-rank="false"
              data-marketcap="false"
              data-volume="false"
              data-statsticker="false"
              data-stats="USD"
            ></div>
            <div
              style={{
                marginRight: '20px',
                marginLeft: '20px',
                width: '40px',
                height: '40px',
                marginTop: '5px',
              }}
            >
              <img src={logo} style={{ height: '80px' }} alt="" />
            </div>
            <div
              className="coinmarketcap-currency-widget mx-5 "
              data-currencyid="7"
              data-base="USD"
              data-secondary=""
              data-ticker="false"
              data-rank="false"
              data-marketcap="false"
              data-volume="false"
              data-statsticker="false"
              data-stats="USD"
            ></div>
            <div
              style={{
                marginRight: '20px',
                marginLeft: '20px',
                width: '40px',
                height: '40px',
                marginTop: '5px',
              }}
            >
              <img src={logo} style={{ height: '80px' }} alt="" />
            </div>
            <div
              className="coinmarketcap-currency-widget mx-5 "
              data-currencyid="8"
              data-base="USD"
              data-secondary=""
              data-ticker="false"
              data-rank="false"
              data-marketcap="false"
              data-volume="false"
              data-statsticker="false"
              data-stats="USD"
            ></div>
            <div
              style={{
                marginRight: '20px',
                marginLeft: '20px',
                width: '40px',
                height: '40px',
                marginTop: '5px',
              }}
            >
              <img src={logo} style={{ height: '80px' }} alt="" />
            </div>
            <div
              className="coinmarketcap-currency-widget mx-5 "
              data-currencyid="9"
              data-base="USD"
              data-secondary=""
              data-ticker="false"
              data-rank="false"
              data-marketcap="false"
              data-volume="false"
              data-statsticker="false"
              data-stats="USD"
            ></div>
            <div
              style={{
                marginRight: '20px',
                marginLeft: '20px',
                width: '40px',
                height: '40px',
                marginTop: '5px',
              }}
            >
              <img src={logo} style={{ height: '80px' }} alt="" />
            </div>
            <div
              className="coinmarketcap-currency-widget mx-5 "
              data-currencyid="10"
              data-base="USD"
              data-secondary=""
              data-ticker="false"
              data-rank="false"
              data-marketcap="false"
              data-volume="false"
              data-statsticker="false"
              data-stats="USD"
            ></div>
            <div
              style={{
                marginRight: '20px',
                marginLeft: '20px',
                width: '40px',
                height: '40px',
                marginTop: '5px',
              }}
            >
              <img src={logo} style={{ height: '80px' }} alt="" />
            </div>
            <div
              className="coinmarketcap-currency-widget mx-5 "
              data-currencyid="5"
              data-base="USD"
              data-secondary=""
              data-ticker="false"
              data-rank="false"
              data-marketcap="false"
              data-volume="false"
              data-statsticker="false"
              data-stats="USD"
            ></div>
            <div
              style={{
                marginRight: '20px',
                marginLeft: '20px',
                width: '40px',
                height: '40px',
                marginTop: '5px',
              }}
            >
              <img src={logo} style={{ height: '80px' }} alt="" />
            </div>
            <div
              className="coinmarketcap-currency-widget "
              data-currencyid="2"
              data-base="USD"
              data-secondary=""
              data-ticker="false"
              data-rank="false"
              data-marketcap="false"
              data-volume="false"
              data-statsticker="false"
              data-stats="USD"
            ></div>
            <div
              style={{
                marginRight: '20px',
                marginLeft: '20px',
                width: '40px',
                height: '40px',
                marginTop: '5px',
              }}
            >
              <img src={logo} style={{ height: '80px' }} alt="" />
            </div>
            <div
              className="coinmarketcap-currency-widget "
              data-currencyid="825"
              data-base="USD"
              data-secondary=""
              data-ticker="false"
              data-rank="false"
              data-marketcap="false"
              data-volume="false"
              data-statsticker="false"
              data-stats="USD"
            ></div>
            <div
              style={{
                marginRight: '20px',
                marginLeft: '20px',
                width: '40px',
                height: '40px',
                marginTop: '5px',
              }}
            >
              <img src={logo} style={{ height: '80px' }} alt="" />
            </div>
            <div
              className="coinmarketcap-currency-widget "
              data-currencyid="2010"
              data-base="USD"
              data-secondary=""
              data-ticker="false"
              data-rank="false"
              data-marketcap="false"
              data-volume="false"
              data-statsticker="false"
              data-stats="USD"
            ></div>
            <div
              style={{
                marginRight: '20px',
                marginLeft: '20px',
                width: '40px',
                height: '40px',
                marginTop: '5px',
              }}
            >
              <img src={logo} style={{ height: '80px' }} alt="" />
            </div>
            <div
              className="coinmarketcap-currency-widget "
              data-currencyid="512"
              data-base="USD"
              data-secondary=""
              data-ticker="false"
              data-rank="false"
              data-marketcap="false"
              data-volume="false"
              data-statsticker="false"
              data-stats="USD"
            ></div>
            <div
              style={{
                marginRight: '20px',
                marginLeft: '20px',
                width: '40px',
                height: '40px',
                marginTop: '5px',
              }}
            >
              <img src={logo} style={{ height: '80px' }} alt="" />
            </div>
            <div
              className="coinmarketcap-currency-widget "
              data-currencyid="52"
              data-base="USD"
              data-secondary=""
              data-ticker="false"
              data-rank="false"
              data-marketcap="false"
              data-volume="false"
              data-statsticker="false"
              data-stats="USD"
            ></div>
            <div
              style={{
                marginRight: '20px',
                marginLeft: '20px',
                width: '40px',
                height: '40px',
                marginTop: '5px',
              }}
            >
              <img src={logo} style={{ height: '80px' }} alt="" />
            </div>
            <div
              className="coinmarketcap-currency-widget "
              data-currencyid="100"
              data-base="USD"
              data-secondary=""
              data-ticker="false"
              data-rank="false"
              data-marketcap="false"
              data-volume="false"
              data-statsticker="false"
              data-stats="USD"
            ></div>
            <div
              style={{
                marginRight: '20px',
                marginLeft: '20px',
                width: '40px',
                height: '40px',
                marginTop: '5px',
              }}
            >
              <img src={logo} style={{ height: '80px' }} alt="" />
            </div>
            <div
              className="coinmarketcap-currency-widget "
              data-currencyid="1100"
              data-base="USD"
              data-secondary=""
              data-ticker="false"
              data-rank="false"
              data-marketcap="false"
              data-volume="false"
              data-statsticker="false"
              data-stats="USD"
            ></div>
            <div
              style={{
                marginRight: '20px',
                marginLeft: '20px',
                width: '40px',
                height: '40px',
                marginTop: '5px',
              }}
            >
              <img src={logo} style={{ height: '80px' }} alt="" />
            </div>{' '}
            <div
              className="coinmarketcap-currency-widget "
              data-currencyid="2000"
              data-base="USD"
              data-secondary=""
              data-ticker="false"
              data-rank="false"
              data-marketcap="false"
              data-volume="false"
              data-statsticker="false"
              data-stats="USD"
            ></div>
            <div
              style={{
                marginRight: '20px',
                marginLeft: '20px',
                width: '40px',
                height: '40px',
                marginTop: '5px',
              }}
            >
              <img src={logo} style={{ height: '80px' }} alt="" />
            </div>
            <div
              className="coinmarketcap-currency-widget "
              data-currencyid="600"
              data-base="USD"
              data-secondary=""
              data-ticker="false"
              data-rank="false"
              data-marketcap="false"
              data-volume="false"
              data-statsticker="false"
              data-stats="USD"
            ></div>
            <div
              style={{
                marginRight: '20px',
                marginLeft: '20px',
                width: '40px',
                height: '40px',
                marginTop: '5px',
              }}
            >
              <img src={logo} style={{ height: '80px' }} alt="" />
            </div>
            <div
              className="coinmarketcap-currency-widget "
              data-currencyid="601"
              data-base="USD"
              data-secondary=""
              data-ticker="false"
              data-rank="false"
              data-marketcap="false"
              data-volume="false"
              data-statsticker="false"
              data-stats="USD"
            ></div>
            <div
              style={{
                marginRight: '20px',
                marginLeft: '20px',
                width: '40px',
                height: '40px',
                marginTop: '5px',
              }}
            >
              <img src={logo} style={{ height: '80px' }} alt="" />
            </div>
            <div
              className="coinmarketcap-currency-widget "
              data-currencyid="602"
              data-base="USD"
              data-secondary=""
              data-ticker="false"
              data-rank="false"
              data-marketcap="false"
              data-volume="false"
              data-statsticker="false"
              data-stats="USD"
            ></div>
            <div
              style={{
                marginRight: '20px',
                marginLeft: '20px',
                width: '40px',
                height: '40px',
                marginTop: '5px',
              }}
            >
              <img src={logo} style={{ height: '80px' }} alt="" />
            </div>
          </div>
        )}
      </Ticker>
      <hr className="text-PrimaryLight"></hr>
    </div>
  )
}
