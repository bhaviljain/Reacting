import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './reducers/counterSlice'

export const store = configureStore({
  reducer: {

    counter: CounterReducer,
  },
})