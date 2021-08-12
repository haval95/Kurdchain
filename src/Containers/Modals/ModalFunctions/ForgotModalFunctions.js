import { useDispatch } from 'react-redux'
import { ForgotPassword } from '../../../Redux'

const ForgotModalFunctions = () => {
  const dispatch = useDispatch()

  const forgotPwd = data => {
    console.log(data)
    dispatch(ForgotPassword(data))
  }

  return { forgotPwd }
}

export default ForgotModalFunctions
