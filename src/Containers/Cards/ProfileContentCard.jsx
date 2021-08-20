import React from 'react'

import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import moment from 'moment'
export default function ProfileContentCard({
  title,
  content,
  date,
  id,
  duration,
}) {
  const history = useHistory()
  const { t } = useTranslation()

  const handleClick = () => {
    history.push(`/play/${id}`)
  }

  function timing(date) {
    const then = moment()
    const now = moment(date)
    const seconds = now.diff(then, 'seconds')

    const day = parseInt(seconds / 86400, 10)

    return Number(day)
  }
  return (
    <div className=" grid  md:px-20 md:mx-20 px-5 ">
      <div className="grid grid-cols-1 md:grid-cols-4   m-3 px-4 py-2 rounded-2xl border border-PrimaryLight  shadow-inner bg-Light">
        <div className="grid gap-2 max-h-40 overflow-auto col-span-2">
          <div className="font-bold text-xl text-PrimaryLight capitalize">
            {title}
          </div>
          <p className="max-w-xs md:max-w-lg ">{content}</p>
          <hr className="md:hidden text-PrimaryLight my-2" />
        </div>

        <div className=" gap-2  self-center grid justify-start md:px-4   ">
          <div className="inline">
            <FontAwesomeIcon icon="clock" className="inline" />
            <span> {duration} (s)</span>
          </div>
          <div className="text-Danger">
            <FontAwesomeIcon icon="stopwatch" className="text-xl" />
            &nbsp; {t('expires')} &nbsp;
            {timing(Date.parse(date))}
            &nbsp; {t('day')} &nbsp;
          </div>
        </div>

        <div className="justify-self-end self-center ">
          <button
            type="button"
            className="bg-Primary hover:bg-PrimaryHover px-4 py-1 rounded-full text-Light hover:shadow-none focus:outline-none shadow-md  transition duration-300 ease-in-out "
            onClick={handleClick}
          >
            <FontAwesomeIcon icon="binoculars" />
          </button>
        </div>
      </div>
    </div>
  )
}

ProfileContentCard.defaultProps = {
  onClick: null,
  id: null,
  title: 'title',
  content: 'content',

  date: new Date(),
  duration: 'duration',
}

ProfileContentCard.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,

  date: PropTypes.string,
  duration: PropTypes.string,
}
