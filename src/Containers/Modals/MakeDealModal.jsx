import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import { CloseMakeDealModal } from '../../Redux/Modals/ModalActions'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import NavigationButton from '../../Components/NavigationButton'
import fastpay from '../../Assets/Images/fastpay.png'
import zainCash from '../../Assets/Images/zainCash.jpg'
import asia from '../../Assets/Images/asia.png'
import usdt from '../../Assets/Images/usdt.png'
export default function MakeDealModal() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const state = useSelector(state => state.modals.makeDealModalstate)

  return (
    <SweetAlert
      custom
      showCloseButton
      title={<h1 className="text-Primary">{t('payment')}</h1>}
      show={state}
      showConfirm={false}
      onConfirm={() => dispatch(CloseMakeDealModal())}
      onCancel={() => dispatch(CloseMakeDealModal())}
      closeBtnStyle={{ padding: '10px', color: 'rgb(200,200,200)' }}
    >
      <form className="  px-8 pt-6 mb-4 bg-transparent">
        <h1 className="text-xl text-Dark  mb-2">{t('paymentSlogan')}</h1>

        <div className="grid grid-cols-2 items-center justify-start text-right gap-2 ltr">
          <div className=" p-1 text-center grid justify-start">
            <img src={asia} alt="asia hawala" className="h-10" />
          </div>
          <p>07701659393</p>
          <hr className="text-GrayBorder col-span-full" />
          <div className=" p-1 text-center grid justify-start">
            <img src={usdt} alt="usdt" className="h-10" />
          </div>
          <p>07701659393</p>
          <hr className="text-GrayBorder col-span-full" />
          <div className=" p-1 text-center grid justify-start">
            <img src={fastpay} alt="fastpay" className="h-10" />
          </div>
          <p>07701659393</p>
          <hr className="text-GrayBorder col-span-full" />
          <div className=" p-1 text-center grid justify-start">
            <img src={zainCash} alt="zaincash" className="h-10" />
          </div>
          <p>07701659393</p>
          <hr className="text-GrayBorder col-span-full" />
        </div>
        <p className="my-4 text-Dark font-light">{t('contactusnow')}</p>
        <NavigationButton
          text={t('navbar.contact')}
          location="/contact"
          style="uppecase"
          clickAction={() => {
            dispatch(CloseMakeDealModal())
          }}
        />
      </form>
    </SweetAlert>
  )
}
