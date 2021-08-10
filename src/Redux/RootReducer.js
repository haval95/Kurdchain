import { combineReducers } from 'redux'
import LoadingReducer from './Loading/LoadingReducer'
import UserReducer from './User/UserReducer'
import ModalReducer from './Modals/ModalsReducer'
import NewsReducer from './News/NewsReducer'
import PartnersReducer from './Partners/PartnersReducer'
const RootReducer = combineReducers({
  user: UserReducer,
  loading: LoadingReducer,
  modals: ModalReducer,
  news: NewsReducer,
  partners: PartnersReducer,
})

export default RootReducer
