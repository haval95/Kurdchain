import React, { useEffect } from 'react'

import {
  EmailShareButton,
  FacebookShareButton,
  FacebookMessengerShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from 'react-share'
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  ViberIcon,
  WhatsappIcon,
} from 'react-share'

import { useParams } from 'react-router-dom'
import { FetchCurrentNews } from '../Redux/News/NewsActions'
import { useDispatch, useSelector } from 'react-redux'
import ContentLoader from 'react-content-loader'
import { useTranslation } from 'react-i18next'
import { NewsImage } from '../Helper/Domain'
import CreateMarkup from '../Helper/CreateMarkup'

export default function NewsDetail() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const currentNews = useSelector(state => state.currentNews)
  const { id } = useParams()
  const news = {
    shareUrl: window.location.href,
  }
  console.log(news.shareUrl)
  useEffect(() => {
    dispatch(FetchCurrentNews(id))
  }, [])

  return (
    <div className="grid">
      {currentNews.currentNews.news && currentNews.loading == false ? (
        <img
          src={NewsImage + currentNews.currentNews.news.image}
          className="h-96 w-full justify-self-center object-cover  border-b border-PrimaryLight"
          alt={currentNews.currentNews.news.title}
        />
      ) : (
        <div>
          <ContentLoader
            className="hidden"
            speed={3}
            width={'100%'}
            height={400}
            viewBox="0 0 800 200"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" ry="3" width="100%" height="100" />
            <rect x="20%" y="150" ry="3" width="20%" height="15" />
            <rect x="20%" y="180" ry="3" width="5%" height="6" />
            <rect x="30%" y="180" ry="3" width="5%" height="6" />
            <rect x="20%" y="190" ry="3" width="5%" height="6" />
          </ContentLoader>
          <ContentLoader
            className="block"
            speed={3}
            width={'100%'}
            height={'100%'}
            viewBox="0 0 600 350"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" ry="3" width="100%" height="50" />
            <rect x="5%" y="80" ry="3" width="50%" height="15" />
            <rect x="5%" y="110" ry="3" width="20%" height="6" />
            <rect x="27%" y="110" ry="3" width="20%" height="6" />
            <rect x="5%" y="135" ry="3" width="20%" height="6" />
            <rect x="5%" y="190" ry="3" width="90%" height="6" />
            <rect x="5%" y="205" ry="3" width="90%" height="6" />
            <rect x="5%" y="220" ry="3" width="90%" height="6" />
            <rect x="5%" y="235" ry="3" width="55%" height="6" />
            <rect x="5%" y="250" ry="3" width="55%" height="6" />
            <rect x="5%" y="263" ry="3" width="55%" height="6" />
            <rect x="5%" y="275" ry="3" width="55%" height="6" />
            <rect x="5%" y="290" ry="3" width="90%" height="6" />
            <rect x="5%" y="305" ry="3" width="80%" height="6" />
            <rect x="65%" y="235" ry="3" width="25%" height="50" />
          </ContentLoader>
        </div>
      )}
      {currentNews.currentNews.news && currentNews.loading == false ? (
        <div className=" bg-Light grid  lg:px-24  sm:px-4 py-16 max-w-screen-lg justify-self-center ">
          <h1 className="text-Primary  font-bold title px-5 text-start-important">
            {currentNews.currentNews.news.title}
          </h1>

          <div className="px-3">
            <div className="grid grid-flow-col gap-20 justify-start my-6 px-2 ">
              <p>{currentNews.currentNews.news.writer}</p>
              <p>{currentNews.currentNews.news.date_of_the_news}</p>
            </div>

            <div className="flex flex-col justify-center text-start-important ">
              <div className=" gap-5   md:col-span-2 col-span-full justify-self-start  ">
                <p className="  text-PrimaryLight  p-2">{t('shareOn')}</p>
                <div className="m-1 order-2">
                  <FacebookShareButton
                    url={news.shareUrl}
                    quote={news.title}
                    className="m-1"
                  >
                    <FacebookIcon size={50} round />
                  </FacebookShareButton>
                  <FacebookMessengerShareButton
                    url={news.shareUrl}
                    quote={news.title}
                    className="m-1"
                  >
                    <FacebookMessengerIcon size={50} round />
                  </FacebookMessengerShareButton>
                  <EmailShareButton
                    url={news.shareUrl}
                    quote={news.title}
                    className="m-1"
                  >
                    <EmailIcon size={50} round />
                  </EmailShareButton>
                  <LinkedinShareButton
                    url={news.shareUrl}
                    quote={news.title}
                    className="m-1"
                  >
                    <LinkedinIcon size={50} round />
                  </LinkedinShareButton>
                  <TelegramShareButton
                    url={news.shareUrl}
                    quote={news.title}
                    className="m-1"
                  >
                    <TelegramIcon size={50} round />
                  </TelegramShareButton>
                  <TwitterShareButton
                    url={news.shareUrl}
                    quote={news.title}
                    className="m-1"
                  >
                    <TwitterIcon size={50} round />
                  </TwitterShareButton>
                  <ViberShareButton
                    url={news.shareUrl}
                    quote={news.title}
                    className="m-1"
                  >
                    <ViberIcon size={50} round />
                  </ViberShareButton>
                  <WhatsappShareButton
                    url={news.shareUrl}
                    quote={news.title}
                    className="m-1"
                  >
                    <WhatsappIcon size={50} round />
                  </WhatsappShareButton>
                </div>
              </div>
              <p className="col-span-10  text-lg leading-relaxed px-4 order-first sm:order-last">
                <div
                  dangerouslySetInnerHTML={CreateMarkup(
                    currentNews.currentNews.news.description
                  )}
                />
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
