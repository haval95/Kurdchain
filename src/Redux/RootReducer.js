import { combineReducers } from 'redux'
import LoadingReducer from './Loading/LoadingReducer'
import UserReducer from './User/UserReducer'
import ModalReducer from './Modals/ModalsReducer'
import NewsReducer from './News/NewsReducer'
import PartnersReducer from './Partners/PartnersReducer'
import CurrentNewsReducer from './News/CurrentNewsReducer'
import SignalsReducer from './Signals/SignalsReducer'
import ExchangeReducer from './Exchange/ExchangeReducer'
import CoursesReducer from './Courses/CoursesReducer'
import FiltersReducer from './Filters/FiltersReducer'
const RootReducer = combineReducers({
  user: UserReducer,
  loading: LoadingReducer,
  modals: ModalReducer,
  news: NewsReducer,
  partners: PartnersReducer,
  currentNews: CurrentNewsReducer,
  signals: SignalsReducer,
  exchange: ExchangeReducer,
  courses: CoursesReducer,
  Filters: FiltersReducer,
})

export default RootReducer
