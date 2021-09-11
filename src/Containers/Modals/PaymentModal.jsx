import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import { ClosePaymentModal } from '../../Redux/Modals/ModalActions'
import { buyCourse } from '../../Redux/UserCourses/UserCoursesActions'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import fastpay from '../../Assets/Images/fastpay.png'
import zainCash from '../../Assets/Images/zainCash.jpg'
import asia from '../../Assets/Images/asia.png'
import usdt from '../../Assets/Images/usdt.png'
export default function PaymentModal() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const state = useSelector(state => state.modals)
  const user = useSelector(state => state.user)

  return (
    <SweetAlert
      custom
      showCloseButton
      title={<h1 className="text-Primary">{t('payment')}</h1>}
      show={state.paymentModalState}
      showConfirm={false}
      onConfirm={() => dispatch(ClosePaymentModal())}
      onCancel={() => dispatch(ClosePaymentModal())}
      closeBtnStyle={{ padding: '10px', color: 'rgb(200,200,200)' }}
    >
      <form className="  px-8 pt-6 mb-4 bg-transparent">
        <h1 className="text-xl text-Dark mb-2 ">{t('paymentSlogan')}</h1>
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

        {state && state.paymentForCourseId && user.isAuthenticated ? (
          <>
            <p className="text-xl mt-6 mb-3  text-Dark">{t('buyCourse')} </p>
            <button
              className="font-bold justify-self-center py-2 bg-Primary px-3 hover:bg-PrimaryHover text-Light  w-full  uppercase shadow-md hover:shadow-none  rounded-md transition duration-500 ease-in-out"
              onClick={() =>
                dispatch(buyCourse(state.paymentForCourseId, user.user.config))
              }
            >
              {t('sendRquestBtn')}
            </button>
          </>
        ) : null}
      </form>
    </SweetAlert>
  )
}
