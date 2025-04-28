

// ╭════════════════════════════════════════════════════════════╮
// │ 🚀 SECTION : [Redux Toolkit day 1]                           │
// │ 📝 DESCRIPTION : [Day 1 task 2 Color change] 
// 
//     Explain :- yah task 2 ka hai task 1 counterslice.jsx me hai │
// ╰════════════════════════════════════════════════════════════╯


import { createSlice } from "@reduxjs/toolkit";


const colorSlice= createSlice({
    name:"mycolor",
    initialState:{
        color:"yellow"
    },
    reducers:{
       changeColor:(state)=>{
        state.color="red";
       }
    }
})

export const {changeColor}= colorSlice.actions;
export default colorSlice.reducer;
