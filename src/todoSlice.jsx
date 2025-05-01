




// ╭════════════════════════════════════════════════════════════╮
// │ 🚀 SECTION : [Redux Toolkit day 4]                       │
// │ 📝 DESCRIPTION : [Day 4 task 1 ]   Make ToDo list App         │
// ╰════════════════════════════════════════════════════════════╯


import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState:{
        task:[]
    },

    reducers:{

        addTask:(state, actions)=>{
            state.task.push(actions.payload);
            console.log(actions);
        },

        removeTask:(state, actions)=>{
            state.task=state.task.filter(item=>item.id!=actions.payload.id)
        },

        remByIndex:(state, actions)=>{
            state.task.splice(actions.payload.id, 1);
            console.log(actions.payload.id);
        }
    }
})

export const {addTask, removeTask, remByIndex} = todoSlice.actions;
export default todoSlice.reducer;