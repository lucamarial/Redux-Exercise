import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'
import { forbiddenWordsMiddelware } from '../middelware/index'

const store = createStore(
  rootReducer,
  applyMiddleware(forbiddenWordsMiddelware)
)

export default store