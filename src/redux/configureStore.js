import { combineReducers, configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import mealReducer from './dataReduser'
import typeReducer from './typesReducer'
import tabsReducer from './tabsReducer'
import ProductService from 'API/ProductService'

const rootReducer = combineReducers({
  meals: mealReducer,
  types: typeReducer,
  tabs: tabsReducer,
  product: ProductService,
})
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['getCountries//fulfilled', 'getDetials//fulfilled'],
      },
    }).concat(logger),
})

export default store
