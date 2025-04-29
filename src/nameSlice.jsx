import { createSlice } from "@reduxjs/toolkit";


const nameSlice= createSlice({
    name:"myname",
    initialState:{
        user:"akash"
    },
    reducers:{
       changeName:(state)=>{
        state.user="saini"
       }
    }
})

export const {changeName}= nameSlice.actions;
export default nameSlice.reducer;
