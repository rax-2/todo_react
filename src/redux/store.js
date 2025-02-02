import { configureStore } from '@reduxjs/toolkit'
import DataSlice from './Data/DataSlice'
import  Addctrl  from './AddButtunControll/Addctrl'

export default configureStore({
  reducer: {
    ToDoData: DataSlice,
    AddControl: Addctrl,
  }
})