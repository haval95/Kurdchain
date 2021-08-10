import { useDispatch } from 'react-redux'
import { registerUser } from '../../../Redux'

const RegisterModalFunctions = () => {
  const dispatch = useDispatch()

  const SubmitRegisteration = data => {
    dispatch(registerUser(data))
  }

  return { SubmitRegisteration }
}

export default RegisterModalFunctions
