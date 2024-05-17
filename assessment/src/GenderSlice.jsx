import { createSlice } from "@reduxjs/toolkit";

const ConfigSlice = createSlice({
    name:"config",
    initialState:{
    gender:"Male",
    },
    reducers:{
        changeGender : (state,action)=>{
            state.lang = action.payload
        }
    }
})
export const {changeGender} = ConfigSlice.actions
export default ConfigSlice.reducer