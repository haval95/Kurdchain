import React from 'react'
import { PropTypes } from 'prop-types'
import Title from '../../Components/Title'
import NavigationButton from '../../Components/NavigationButton'
import { useTranslation } from 'react-i18next'
import ScrollAnimation from 'react-animate-on-scroll'
import { NewsImage } from '../../Helper/Domain'
import CreateMarkup from '../../Helper/CreateMarkup'
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
    <ScrollAnimation animateIn={'pulse'} initiallyVisible>
      <div className="md:h-60 max-w-xs w-72 sm:w-auto  hover:shadow-none transition-all ease-in-out duration-300 bg-Light rounded-xl shadow-md overflow-hidden md:max-w-2xl  border border-GrayBorder ">
        <div className="md:flex ">
          <div className="md:flex-shrink-0">
            <img
              className="md:h-60 w-full  object-cover  md:w-60 lg:w-40 xl:w-60 h-48  border border-GrayBorder"
              src={NewsImage + image}
              alt={`${title}`}
            />
          </div>
          <div className=" px-4 grid grid-rows-3 w-full ">
            <div className="grid    grid-cols-3    turncate overflow-x-hidden items-center ">
              <span className="col-span-2">
                <Title
                  text={title}
                  style="turncate"
                  type="subTitle"
                  color="Secondary"
                  underline="none"
                />
              </span>
              <p className="text-Dark font-light justify-self-center">
                {created_at}
              </p>
            </div>

            <p className=" text-Dark  overflow-y-hidden overflow-x-hidden max-h-20 text-justify py-1 ">
              <span dangerouslySetInnerHTML={CreateMarkup(description)} />
            </p>
            <div className="flex flex-row justify-between flex-wrap content-center mb-4 ">
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
