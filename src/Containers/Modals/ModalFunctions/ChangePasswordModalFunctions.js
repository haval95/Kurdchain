import { useDispatch, useSelector } from 'react-redux'
import { changePassword } from '../../../Redux'

const ChangePasswordModalFunction = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const sendChangePasswordRequest = data => {
    dispatch(changePassword(data, user.user.config))
  }

  return { sendChangePasswordRequest }
}

export default ChangePasswordModalFunction
