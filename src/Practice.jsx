



import { createSlice } from "@reduxjs/toolkit";



const todoSlice=createslice({
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
            state.task.splice(actions.payload.id,1);
            console.log(actions.payload.id);
        }
    },

    remByIndex:(state, actions)
})

export const {addTask, removeTask, remByIndex}= todoSlice.actions;
export default todoSlice.reducers;
