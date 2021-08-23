import React from 'react'
import Title from '../../../Components/Title'
import Paragraph from '../../../Components/Paragraph'
import PricingCard from '../../Cards/PricingCard'
import termsContractEn from '../../../Assets/TermsPdf/TermsContractEnglish.pdf'
import termsContractAr from '../../../Assets/TermsPdf/TermsContractArabic.pdf'
import termsContractKu from '../../../Assets/TermsPdf/TermsContractKurdish.pdf'
import { useTranslation } from 'react-i18next'

export default function ApiSection() {
  const { t } = useTranslation()

  return (
    <>
      <div className=" px-4 mb-10  text-start grid gap-6 ">
        <Title
          text={t('contract')}
          underline="start"
          style="text-start"
          animation="bounceIn"
        />

        <Paragraph
          text={t('contractSlogan')}
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
          <Paragraph
            text="Lorem ipsum dolor sit amet,onsectetur adipiscing elit.Lorem adipiscing  onsectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur m ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur "
            style="text-lg  "
            textalign="text-justify"
          />
          <a
            href={
              t('currentLanguage') == 'kurdish'
                ? termsContractKu
                : t('currentLanguage') == 'arabic'
                ? termsContractAr
                : termsContractEn
            }
            target="_blank"
            className=" text-xl text-start block text-Secondary underline"
            rel="noreferrer"
          >
            read more
          </a>
        </div>
        <div className="flex flex-col ">
          <Title
            text={t('howItWorks')}
            underline="none"
            style="text-start my-2"
            type="subTitle"
            color="Secondary"
            animation="fadeIn"
          />
          <div className=" w-full px-0 lg:w-10/12 justify-self-center sm:justify-self-center items-center  bg-Primary">
            <div
              className="bg-GrayBorder  border-GrayBorder border-4 p-2 shadow-md "
              style={{
                padding: '56.25% 0 0 0',
                position: 'relative',
              }}
            >
              <iframe
                src={
                  'https://player.vimeo.com/video/76979871?embedparameter=value'
                }
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                }}
                title="btcoin1"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="     grid justify-content-center grid-cols-1 sm:grid-cols-3 md:gap-1 lg:gap-3   justify-items-center ">
        <PricingCard
          price="$5000 - $25,000"
          services={t('contractSilver', { returnObjects: true })}
          title="Silver"
        />
        <PricingCard
          price=" $25,000 - $100,000"
          services={t('contractGold', { returnObjects: true })}
          dark
          title="Gold"
        />
        <PricingCard
          price={t('over') + '  $100,000'}
          services={t('contractPlatinum', { returnObjects: true })}
          title="Platinum"
        />
      </div>
    </>
  )
}
