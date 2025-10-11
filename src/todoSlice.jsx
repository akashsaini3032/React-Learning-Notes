




// // ╭════════════════════════════════════════════════════════════╮
// // │ 🚀 SECTION : [Redux Toolkit day 4]                       │
// // │ 📝 DESCRIPTION : [Day 4 task 1 ]   Make ToDo list App         │
// // ╰════════════════════════════════════════════════════════════╯


// import { createSlice } from "@reduxjs/toolkit";

// const todoSlice=createSlice({
//     name:"todo",
//     initialState:{
//         task:[]
//     },

//     reducers:{

//         addTask:(state, actions)=>{
//             state.task.push(actions.payload);
//             console.log(actions);
//         },

//         removeTask:(state, actions)=>{
//             state.task=state.task.filter(item=>item.id!=actions.payload.id)
//         },

//         remByIndex:(state, actions)=>{
//             state.task.splice(actions.payload.id, 1);
//             console.log(actions.payload.id);
//         }
//     }
// })

// export const {addTask, removeTask, remByIndex} = todoSlice.actions;
// export default todoSlice.reducer;






// ╭════════════════════════════════════════════════════════════╮
// │ 🚀 SECTION : [Redux Toolkit day 4]                       │
// │ 📝 DESCRIPTION : [Day 4 task 1 ]   Make ToDo list App         │
// ╰════════════════════════════════════════════════════════════╯


// import { createSlice } from "@reduxjs/toolkit";

// const todoSlice = createSlice({
//     name:"todo",
//     initialState:{
//         task:[]
//     },

//     reducers:{
//         addTask:(state, actions)=>{
//             state.task.push(actions.payload);
//         },
//         removeTask:(state, actions)=>{
//             state.task=state.task.filter(key=>key.id!=actions.payload.id);
//         },
//         completeTask:(state, actions)=>{
//             for (var i=0; i<state.task.length; i++)
//             {
//                 if (state.task[i].id==actions.payload.id)
//                 {
//                     state.task[i].status=true;
//                 }
//             }
//         },
//         IncompleteTask:(state, actions)=>{
//             for (var i=0; i<state.task.length; i++)
//             {
//                 if (state.task[i].id==actions.payload.id)
//                 {
//                     state.task[i].status=false;
//                 }
//             }
//         },
//         editDataSave:(state, actions)=>{
//             for (var i=0; i<state.task.length; i++)
//             {
//                 if (state.task[i].id== actions.payload.id)
//                 {
//                     state.task[i].work= actions.payload.work;
//                 }
//             }
//         }
//     }
// })

// export const {addTask, removeTask, completeTask, IncompleteTask, editDataSave} = todoSlice.actions;
// export default todoSlice.reducer;