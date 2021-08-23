import {configureStore} from '@reduxjs/toolkit'
import todoSlice from './Slices/TodoSlice'

export  const store = configureStore({
  reducer:{
    todo:todoSlice
  }
})