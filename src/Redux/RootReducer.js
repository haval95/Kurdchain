import { combineReducers } from 'redux'
import LoadingReducer from './Loading/LoadingReducer'
import UserReducer from './User/UserReducer'
const RootReducer = combineReducers({
  user: UserReducer,
  loading: LoadingReducer,
})

export default RootReducer
