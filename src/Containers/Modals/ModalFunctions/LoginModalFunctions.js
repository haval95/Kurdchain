import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../Redux'
import { CloseLoginModal } from '../../../Redux/Modals/ModalActions'

const LoginModalFunction = () => {
  const dispatch = useDispatch()
  const [formState, setFormState] = useState({ phone_number: '', password: '' })
  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  console.log(formState)

  const Login = e => {
    e.preventDefault()
    dispatch(loginUser(formState))
    dispatch(CloseLoginModal())
    setFormState({})
  }

  return { formState, handleChange, Login }
}

export default LoginModalFunction
