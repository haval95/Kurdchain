import React from 'react'

import ImageJumbotron from '../Components/ImageJumbotron'
import Title from '../Components/Title'
import NewsCard from '../Containers/Cards/NewsCard'
import img from '../Assets/Images/newsbg.png'
import { useTranslation } from 'react-i18next'
import Loader from 'react-loader-spinner'
import { useSelector } from 'react-redux'
import uuid from 'react-uuid'
import { useDispatch } from 'react-redux'
import { FetchNews } from '../Redux/News/NewsActions'
import InfiniteScroll from 'react-infinite-scroll-component'
import ContentLoader from 'react-content-loader'

export default function News() {
  const { t } = useTranslation()

  const data = useSelector(state => state.news)
  const dispatch = useDispatch()

  return (
    <>
      <ImageJumbotron
        title={t('navbar.news')}
        detail={t('newsPageSlogan')}
        image={img}
      />
      <div className=" bg-Light grid px-10  md:px-24 py-16 text-start">
        <Title
          text={t('navbar.news')}
          style=" mb-14 text-center"
          underline="start"
          animation="bounceIn"
        />
        {data.news.length ? null : (
          <div className="grid -mt-20 gap-10 items-end grid-cols-1 sm:grid-cols-2  px-4  md:grid-cols-1 lg:grid-cols-2  ">
            <ContentLoader
              speed={2}
              width={600}
              height={400}
              viewBox="0 0 400 160"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="75" y="8" rx="3" ry="3" width="88" height="6" />
              <rect x="75" y="26" rx="3" ry="3" width="52" height="6" />
              <rect x="75" y="56" rx="3" ry="3" width="410" height="6" />
              <rect x="75" y="72" rx="3" ry="3" width="380" height="6" />
              <rect x="75" y="88" rx="3" ry="3" width="178" height="6" />
              <rect x="0" y="0" ry="3" width="70" height="100" />
            </ContentLoader>
            <span className="hidden lg:inline">
              <ContentLoader
                speed={2}
                width={600}
                height={400}
                viewBox="0 0 400 160"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="75" y="8" rx="3" ry="3" width="88" height="6" />
                <rect x="75" y="26" rx="3" ry="3" width="52" height="6" />
                <rect x="75" y="56" rx="3" ry="3" width="410" height="6" />
                <rect x="75" y="72" rx="3" ry="3" width="380" height="6" />
                <rect x="75" y="88" rx="3" ry="3" width="178" height="6" />
                <rect x="0" y="0" ry="3" width="70" height="100" />
              </ContentLoader>
            </span>
          </div>
        )}
        <InfiniteScroll
          dataLength={data.news.length}
          next={() =>
            dispatch(FetchNews(Number(data.current) + 1, t('currentLanguage')))
          }
          hasMore={data.current ? data.current != data.last : true}
          loader={
            data.news.length ? (
              <div className="grid justify-center">
                <Loader
                  type="ThreeDots"
                  color="#efefef"
                  height={100}
                  width={100}
                  timeout={3000} //3 secs
                />
              </div>
            ) : null
          }
          endMessage={
            <p className="w-full text-center ">
              <b className="text-Gray line ">{t('end')}</b>
            </p>
          }
        >
          <div className="grid gap-10 justify-items-center  sm:justify-items-stretch  grid-cols-1 sm:grid-cols-2  px-4  md:grid-cols-1 lg:grid-cols-2 mb-16">
            {data.news &&
              data.news.map(EachNews => {
                return (
                  <NewsCard
                    id={EachNews.id}
                    title={EachNews.title}
                    image={EachNews.image}
                    description={EachNews.description}
                    writer={EachNews.writer}
                    key={uuid()}
                  />
                )
              })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  )
}
