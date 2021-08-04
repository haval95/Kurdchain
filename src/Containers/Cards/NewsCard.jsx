import React from 'react'
import { PropTypes } from 'prop-types'
import Title from '../../Components/Title'
import NavigationButton from '../../Components/NavigationButton'
import { useTranslation } from 'react-i18next'
import ScrollAnimation from 'react-animate-on-scroll'

export default function NewsCard({
  id,
  title,
  image,
  description,
  created_at,
  writer,
}) {
  const { t } = useTranslation()

  return (
    <ScrollAnimation animateIn={'fadeIn'}>
      <div className="max-w-xs hover:shadow-none transition-all ease-in-out duration-300 bg-Light rounded-xl shadow-md overflow-hidden md:max-w-2xl  border border-GrayBorder ">
        <div className="md:flex ">
          <div className="md:flex-shrink-0">
            <img
              className="h-full w-full  object-cover  md:w-60 lg:w-40 xl:w-60 "
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
                <NavigationButton
                  text={t('read')}
                  location={`/newsDetail/${id}`}
                  style="px-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
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
  image: `https://ichef.bbci.co.uk/news/976/cpsprodpb/6127/production/_117317842_065760657.jpg`,
  created_at: '12/1/2021',
  writer: 'Firstname Lastname',
}
