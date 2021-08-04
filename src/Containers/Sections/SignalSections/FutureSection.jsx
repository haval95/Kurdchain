import React from 'react'
import Title from '../../../Components/Title'
import Paragraph from '../../../Components/Paragraph'
import SiganlCard from '../../Cards/SignalCard'

import { useTranslation } from 'react-i18next'

export default function FutureSection() {
  const { t } = useTranslation()
  return (
    <>
      <div className=" p-inline-start-2 mb-10  text-start grid gap-6 ">
        <Title
          text={t('future')}
          underline="start"
          style="text-start"
          animation="bounceIn"
        />
        <Paragraph text={t('futureSlogan') + '.'} style="text-lg" />
      </div>
      <div className=" items-center mb-10 text-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly justify-items-center gap-10">
        <SiganlCard />
        <SiganlCard />
        <SiganlCard />
      </div>
    </>
  )
}
