import React from 'react'
import { PropTypes } from 'prop-types'
import Title from '../../Components/Title'
import NavigationButton from '../../Components/NavigationButton'
export default function NewsCard({
  id,
  title,
  image,
  description,
  created_at,
  writer,
}) {
  return (
    <div className="max-w-md  bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl mt-8 border border-GrayBorder ">
      <div className="md:flex ">
        <div className="md:flex-shrink-0">
          <img
            className="h-full w-full object-cover md:w-72"
            src={`${image}`}
            alt={`${title}`}
          />
        </div>
        <div className="p-3 px-4 grid grid-rows-4 w-full">
          <div className=" flex flex-row       justify-between  ">
            <Title
              text={title}
              type="subTitle"
              color="Secondary"
              underline="nono"
            />

            <p className="text-Dark font-light">{created_at}</p>
          </div>

          <p className=" text-Dark row-span-2 overflow-y-hidden max-h-24 text-justify">
            {description}
          </p>
          <div className="flex flex-row justify-between flex-wrap content-center">
            <div className="font-light">{writer}</div>
            <div>
              <NavigationButton text="Read" location={`/newsDetail/${id}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

NewsCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  created_at: PropTypes.string,
  writer: PropTypes.string,
}

NewsCard.defaultProps = {
  id: 0,
  title: 'Title',
  description:
    'lorem 1 lorem 1 lorem 1 lorem 1lorem 1lorem 1lorem 1lorem 1lorem 1lorem 2 lorem 1  lorem 2lorem 2lorem 2lorem 2lorem 2lorem 2lorem 2lorem 2lorem 2lorem 2 2lorem 22lorem 22lorem 22lorem 22lorem 22lorem 2lorem 3  lorem 3lorem 3 lorem 3lorem 3lorem 3lorem 3lorem 3lorem 3lorem 3lorem 3lorem 3lorem 3',
  image: `https://via.placeholder.com/200x150`,
  created_at: '12/1/2021',
  writer: 'Firstname Lastname',
}
