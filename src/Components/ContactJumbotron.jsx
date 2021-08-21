import React from 'react'
import { PropTypes } from 'prop-types'
import * as ROUTES from '../router'
import NavigationButton from './NavigationButton'
import Img from '../Assets/Images/contactbg.png'
import { useTranslation } from 'react-i18next'
export default function ContactJumbotron({ image }) {
  const { t } = useTranslation()

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="  shadow-lg   "
    >
      <div className="bg-SecondaryOpacity py-9  grid justify-center justify-items-center items-center h-full   content-center text-center">
        <p className="text-Light text-lg md:text-2xl capitalize  text-center mt-1 justify-self-center mb-3 px-1 ">
          {t('contactusnow')}
        </p>

        <NavigationButton
          location={ROUTES.CONTACT_ROUTE}
          text={t('footer.getInTouch')}
          colors="bg-SecondaryLight text-Secondary hover:bg-Light hover:shadow-none shadow-lg px-6 "
          style="text-xl uppercase  "
          fontWeight="normal"
          animation="bounceIn"
        />
      </div>
    </div>
  )
}

ContactJumbotron.propTypes = {
  image: PropTypes.string,
}

ContactJumbotron.defaultProps = {
  image: Img,
}
