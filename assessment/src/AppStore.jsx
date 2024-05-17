import { configureStore } from "@reduxjs/toolkit";
import Gender from './GenderSlice'
const AppStore = configureStore({
    reducer:{
        gender : Gender
    }
})

export default AppStore