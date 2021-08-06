import React from 'react'
import Title from '../Components/Title'
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

import { useTranslation } from 'react-i18next'

export default function NewsDetail() {
  const { t } = useTranslation()
  const news = {
    writer: 'writer',
    date: 'date',
    title: 'news',
    image:
      'https://www.navigatebycaim.com/wp-content/uploads/2017/04/cover-news-1024x768.jpg',
    shareUrl: 'http://github.com',
    body: 'Eu Eu occaecat ullamco magna non et ut  Velit in do voluptate officia exercitation velit cupidatat do laboris voluptate aliquip. Ea minim commodo est sint tempor tempor enim. Minim laboris nostrud nulla incididunt aliqua cillum fugiat commodo excepteur aute voluptate consectetur voluptate duis. Ad pariatur tempor est et elit. Dolor ea officia id elit culpa magna dolor dolore proident ex. Magna dolore excepteur qui eu ipsum proident ut. Deserunt officia minim cillum cupidatat sint consequat eiusmod. Enim occaecat laborum sint veniam occaecat est et excepteur. Ex id enim irure ullamco culpa eu eu aliqua reprehenderit do. Enim nulla laboris esse aute. Dolor exercitation dolor culpa aliquip laboris sit in mollit ea excepteur officia Lorem Lorem dolor.Minim cillum enim nisi nulla ad commodo enim Lorem. Nisi laboris ut ullamco exercitation aute cillum. Mollit Lorem duis sit ad minim duis voluptate occaecat pariatur ullamco.Non mollit non nisi eiusmod. Exercitation officia commodo nisi eiusmod labore. Exercitation pariatur culpa minim officia laborum ipsum eu ullamco eu nostrud labore et dolor. Occaecat deserunt adipisicing adipisicing qui duis voluptate aliquip qui. Mollit proident cupidatat sunt tempor Lorem id adipisicing nisi excepteur. Ex sit consectetur amet dolor Lorem aliqua eiusmod aute. Labore ipsum ullamco amet irure deserunt.',
  }
  return (
    <div className="grid">
      <img src={news.image} className="w-full object-cover h-80" />
      <div className=" bg-Light grid  lg:px-24  sm:px-4 py-16 max-w-screen-lg justify-self-center ">
        <Title
          text={news.title}
          underline="none"
          style="text-start-important px-3 "
        />
        <div className="px-3">
          <div className="grid grid-flow-col gap-20 justify-start my-6 px-2 ">
            <p>{news.writer}</p>
            <p>{news.date}</p>
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
            <p className="col-span-10 text-Secondary text-lg leading-relaxed px-4 order-first sm:order-last">
              {news.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
