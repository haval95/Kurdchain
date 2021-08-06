import { combineReducers } from 'redux'
import LoadingReducer from './Loading/LoadingReducer'
import UserReducer from './User/UserReducer'
import ModalReducer from './Modals/ModalsReducer'
const RootReducer = combineReducers({
  user: UserReducer,
  loading: LoadingReducer,
  modals: ModalReducer,
})

export default RootReducer
