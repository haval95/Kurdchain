import React from 'react'
//import { useSelector } from 'react-redux'
import uuid from 'react-uuid'
import { useTranslation } from 'react-i18next'

import TopProfile from '../Containers/Sections/Profile/TopProfile'
import Header from '../Containers/Cards/ProfileCardsHeader'
import Card from '../Containers/Cards/ProfileContentCard'
import logo from '../Assets/Images/logo.svg'
//import { FetchProducts } from '../../redux'
export default function Profile() {
  const { t } = useTranslation()
  //const user = useSelector(state => state.user)
  // const products = useSelector(state => state.products)
  // const dispatch = useDispatch()

  // const [userProduct, setUserProduct] = useState(false)
  // setUserProduct(false)

  // useEffect(() => {
  //   setUserProduct(
  //     products.data.filter(product => product.uui === user.user.uui)
  //   )
  // }, [products])
  // const reFetch = () => {
  //   dispatch(FetchProducts())
  // }
  return (
    <div className="mb-8">
      <TopProfile />

      <Header />

      <div key={uuid()}>
        <Card
          onClick={() => alert('refetch')}
          title="course name"
          content="content+"
          date="date"
          id="id"
        />
      </div>

      <div className="text-blue text-xl font-bold text-center   grid  md:px-20 md:mx-20 p-5 ">
        <div className=" grid  font-bold    ">
          <div className="bg-white text-center gap-2 p-10 bg-opacity-90 shadow-inner border border-PrimaryLight groupgrid justify-center  rounded-3xl">
            <h1 className="text-2xl text-Warning font-black ">
              {t('profile.oops')}
            </h1>
            <h1 className="text-PrimaryLight">{t('profile.explain')}</h1>

            <img
              src={logo}
              alt=""
              className="justify-self-center min-w-full p-2  mt-3 flex space-x-2  items-center   max-h-40 "
            />
          </div>
        </div>
      </div>
    </div>
  )
}
