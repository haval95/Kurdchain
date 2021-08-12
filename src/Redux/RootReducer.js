import { combineReducers } from 'redux'
import LoadingReducer from './Loading/LoadingReducer'
import UserReducer from './User/UserReducer'
import ModalReducer from './Modals/ModalsReducer'
import NewsReducer from './News/NewsReducer'
import PartnersReducer from './Partners/PartnersReducer'
import CurrentNewsReducer from './News/CurrentNewsReducer'
import SignalsReducer from './Signals/SignalsReducer'
import ExchangeReducer from './Exchange/ExchangeReducer'
const RootReducer = combineReducers({
  user: UserReducer,
  loading: LoadingReducer,
  modals: ModalReducer,
  news: NewsReducer,
  partners: PartnersReducer,
  currentNews: CurrentNewsReducer,
  signals: SignalsReducer,
  exchange: ExchangeReducer,
})

export default RootReducer
