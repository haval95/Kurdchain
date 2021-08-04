import React from 'react'
import Title from '../../../Components/Title'
import Paragraph from '../../../Components/Paragraph'
import SiganlCard from '../../../Containers/Cards/SignalCard'

import { useTranslation } from 'react-i18next'

export default function SpotSection() {
  const { t } = useTranslation()
  return (
    <>
      <div className="  mb-10 p-inline-start-2 text-start grid gap-6">
        <Title
          text={t('spot')}
          underline="start"
          style="text-start"
          animation="bounceIn"
        />
        <Paragraph text={t('spotSlogan') + '.'} style="text-lg" />
      </div>
      <div className=" items-center mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-start  justify-evenly justify-items-center gap-10">
        <SiganlCard />
        <SiganlCard />
        <SiganlCard />
      </div>
    </>
  )
}
