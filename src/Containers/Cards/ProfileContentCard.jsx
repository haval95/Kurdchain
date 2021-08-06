import React from 'react'

import { useHistory } from 'react-router-dom'
//import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

export default function ProfileContentCard({
  title,
  content,
  date,
  id,
  duration,
}) {
  const history = useHistory()
  //const { t } = useTranslation()

  const handleClick = () => {
    history.push(`/productdetails/${id}`)
  }

  return (
    <div className=" grid  md:px-20 md:mx-20 px-5 ">
      <div className="grid grid-cols-1 md:grid-cols-4   m-3 px-4 py-2 rounded-2xl border border-PrimaryLight  shadow-inner bg-Light">
        <div className="grid gap-2 max-h-40 overflow-auto col-span-2">
          <div className="font-bold text-xl capitalize">{title}</div>
          <p className="">{content}</p>
          <hr className="md:hidden text-PrimaryLight my-2" />
        </div>

        <div className=" gap-2 text-Secondary  self-center grid justify-start   ">
          <div className="inline">
            <FontAwesomeIcon icon="calendar-alt" className="inline" />
            <span> {duration}</span>
          </div>
          <div>
            <FontAwesomeIcon icon="calendar-alt" className="inline" /> {date}
          </div>
        </div>

        <div className="justify-self-end self-center ">
          <button
            type="button"
            className="bg-Warning hover:bg-WarningHover px-4 py-1 rounded-full text-Light hover:shadow-none focus:outline-none shadow-md  transition duration-300 ease-in-out "
            onClick={handleClick}
          >
            <FontAwesomeIcon icon="binoculars" />
          </button>
          <button
            type="button"
            className="bg-Danger mx-2 px-4 py-1 rounded-full hover:bg-DangerHover text-Light hover:shadow-none focus:outline-none shadow-md  transition duration-300 ease-in-out "
            onClick={() => {
              alert('Delete course')
            }}
          >
            <FontAwesomeIcon icon="trash-alt" />
          </button>
        </div>
      </div>
    </div>
  )
}

ProfileContentCard.defaultProps = {
  onClick: null,
  id: null,
  title: 'No Content',
  content: '',
  seen: 0,
  date: '',
  duration: '5',
}

ProfileContentCard.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  seen: PropTypes.number,
  date: PropTypes.string,
  duration: PropTypes.string,
}
