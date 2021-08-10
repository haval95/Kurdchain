import { useDispatch } from 'react-redux'
import { loginUser } from '../../../Redux'

const LoginModalFunction = () => {
  const dispatch = useDispatch()

  const Login = data => {
    dispatch(loginUser(data))
  }

  return { Login }
}

export default LoginModalFunction
