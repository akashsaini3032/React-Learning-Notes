// ╭════════════════════════════════════════════════════════════╮
// │ 🚀 SECTION : [Redux Toolkit day1]           │
// │ 📝 DESCRIPTION : [day 1 task 1]             │
// ╰════════════════════════════════════════════════════════════╯

// import { configureStore } from "@reduxjs/toolkit";


// import myReducer from "./counterSlice";


// const store= configureStore({
//     reducer:{
//         mycounter:myReducer
//     }
// })

// export default store;










// ╭════════════════════════════════════════════════════════════╮
// │ 🚀 SECTION : [Redux Toolkit day 1]                       │
// │ 📝 DESCRIPTION : [Day 1 task 2 Color change]             │
// ╰════════════════════════════════════════════════════════════╯


// import { configureStore } from "@reduxjs/toolkit";


// import clrReducer from "./colorSlice";


// const store= configureStore({
//     reducer:{
//         mycolor:clrReducer
//     }
// })


// export default store;











// ╭════════════════════════════════════════════════════════════╮
// │ 🚀 SECTION : [Redux Toolkit day 2]                       │
// │ 📝 DESCRIPTION : [Day 1 task 1 Name change]             │
// ╰════════════════════════════════════════════════════════════╯

import { configureStore } from "@reduxjs/toolkit";


import nameReducer from "./nameSlice";


const store= configureStore({
    reducer:{
        myname:nameReducer
    }
})


export default store;