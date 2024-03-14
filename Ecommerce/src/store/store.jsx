import {configureStore} from '@reduxjs/toolkit'
import userReducers from './reducer'
export const store = configureStore({
    reducer :{
        userReducers : userReducers
    }, 

}) 
   
