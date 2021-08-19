import React from 'react'
import { PropTypes } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../Components/Button'
import { OpenSubscribeModal } from '../../Redux/Modals/ModalActions'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

export default function PricingCard({ style, price, services, title, dark }) {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  return (
    <div
      className={`${
        dark ? 'text-Light bg-Secondary' : 'text-Dark bg-Light'
      } ${style}   border-GrayBorder border   px-3  py-8 md:py-10 mb-3 md:my-6 rounded-lg shadow-lg lg:w-9/12 `}
    >
      <div className="w-full flex-grow">
        <h2 className="text-center font-bold capitalize text-2xl mb-4">
          {title}
        </h2>
        <h3
          className={`${
            dark ? 'text-Light ' : 'text-PrimaryLight '
          } text-PrimaryLight text-center font-bold text-2xl mb-5 `}
        >
          {price}
        </h3>
        <ul className=" px-2 lg:px-5 mb-8 ">
          {services.map(service => {
            return (
              <li
                className=" grid grid-flow-col items-center mb-2 gap-3 justify-start "
                key={service}
              >
                <FontAwesomeIcon
                  icon="check-circle"
                  className="text-bold text-lg text-PrimaryLight"
                />
                {service}
              </li>
            )
          })}
        </ul>
      </div>
      <div className="w-full">
        <Button
          clickAction={() => dispatch(OpenSubscribeModal())}
          text={t('subscribe')}
          color={'PrimaryLight'}
          style="font-light"
        />
      </div>
    </div>
  )
}

PricingCard.propTypes = {
  services: PropTypes.array,
  style: PropTypes.string,
  price: PropTypes.string,
  title: PropTypes.string,

  dark: PropTypes.bool,
}

PricingCard.defaultProps = {
  services: '',
  price: '$5,000 - $25,000',
  style: '',

  title: 'Tiltle',
  dark: false,
}
