import React from 'react'
import Title from '../../../Components/Title'
import Paragraph from '../../../Components/Paragraph'
import PricingCard from '../../Cards/PricingCard'
import termsApiEn from '../../../Assets/TermsPdf/TermsApiEnglish.pdf'
import termsApiAr from '../../../Assets/TermsPdf/TermsApiArabic.pdf'
import termsApiKu from '../../../Assets/TermsPdf/TermsApiKurdish.pdf'
import img from './../../../Assets/Images/apiSection.jpeg'
import { useTranslation } from 'react-i18next'
import Form from './Form'

export default function ApiSection() {
  const { t } = useTranslation()

  return (
    <>
      <div className=" px-4 mb-10  text-start grid gap-6 ">
        <Title
          text={t('api')}
          underline="start"
          style="text-start"
          animation="bounceIn"
        />

        <Paragraph
          text={t('apiSlogan')}
          style="text-lg text-center md:text-start"
        />
      </div>

      <div className="grid grid-cols-1 px-4 md:grid-cols-2 mb-10 gap-10">
        <div>
          <Title
            text={t('terms')}
            underline="none"
            style="text-start mb-1"
            type="subTitle"
            color="Secondary"
            animation="fadeIn"
          />
          <div>
            <Paragraph
              text={t('termsDetail')}
              style="text-xl inline "
              textalign="text-justify"
            />

            <a
              href={
                t('currentLanguage') == 'kurdish'
                  ? termsApiKu
                  : t('currentLanguage') == 'arabic'
                  ? termsApiAr
                  : termsApiEn
              }
              target="blank"
              className=" text-xl text-start  text-Secondary underline inline capitalize"
            >
              ...{t('readMore')}
            </a>
          </div>
        </div>
        <div className="flex flex-col ">
          <img src={img} className="border border-Primary" />
          {
            //<Title
            //       text={t('howItWorks')}
            //       underline="none"
            //       style="text-start my-2"
            //       type="subTitle"
            //       color="Secondary"
            //       animation="fadeIn"
            //     />
            //     <div className=" w-full px-0 lg:w-10/12 justify-self-center sm:justify-self-center items-center  bg-Primary">
            //       <div
            //         className="bg-GrayBorder  border-GrayBorder border-4 p-2 shadow-md "
            //         style={{
            //           padding: '56.25% 0 0 0',
            //           position: 'relative',
            //         }}
            //       >
            //         <iframe
            //           src={
            //             'https://player.vimeo.com/video/76979871?embedparameter=value'
            //           }
            //           allow="autoplay; fullscreen; picture-in-picture"
            //           allowFullScreen
            //           style={{
            //             position: 'absolute',
            //             top: '0',
            //             left: '0',
            //             width: '100%',
            //             height: '100%',
            //           }}
            //           title="btcoin1"
            //         ></iframe>
            //       </div>
            //     </div>
          }
        </div>
      </div>

      <div className="     grid justify-content-center grid-cols-1 sm:grid-cols-2 nav_break:grid-cols-3 gap-2 md:gap-1 lg:gap-3   justify-items-center ">
        <PricingCard
          price="$5000 - $25,000"
          services={t('silver', { returnObjects: true })}
          title={t('silverName')}
        />

        <PricingCard
          price=" $25,000 - $100,000"
          services={t('gold', { returnObjects: true })}
          dark
          title={t('goldName')}
        />
        <PricingCard
          price={t('over') + '  $100,000'}
          services={t('platinum', { returnObjects: true })}
          title={t('platinumName')}
        />
      </div>
      <div className=" ">
        <Form />
      </div>
    </>
  )
}
