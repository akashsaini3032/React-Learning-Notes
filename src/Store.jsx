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

// import { configureStore } from "@reduxjs/toolkit";


// import nameReducer from "./nameSlice";


// const store= configureStore({
//     reducer:{
//         myname:nameReducer
//     }
// })


// export default store;









// ╭════════════════════════════════════════════════════════════╮
// │ 🚀 SECTION : [Redux Toolkit day 3]                                 │
// │ 📝 DESCRIPTION : [Day 3 task 1 ]   Colorchange  by user(dynamic)   │
// ╰════════════════════════════════════════════════════════════╯
// import { configureStore } from "@reduxjs/toolkit";


// import colorReducer from "./colorSlice";


// const store= configureStore({
//     reducer:{
//         mycolor:colorReducer
//     }
// })


// export default store;










// ╭════════════════════════════════════════════════════════════╮
// │ 🚀 SECTION : [Redux Toolkit day 3]                       │
// │ 📝 DESCRIPTION : [Day 3 task 2 ]   add list todo         │
// ╰════════════════════════════════════════════════════════════╯
// import { configureStore } from "@reduxjs/toolkit";


// import colorReducer from "./colorSlice";


// const store= configureStore({
//     reducer:{
//         mydark:colorReducer
//     }
// })


// export default store;









// ╭════════════════════════════════════════════════════════════╮
// │ 🚀 SECTION : [Redux Toolkit day 4]                       │
// │ 📝 DESCRIPTION : [Day 4 task 1 ]   Make ToDo list App         │
// ╰════════════════════════════════════════════════════════════╯


import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./todoSlice";


const store=configureStore({
    reducer:{
        todo:todoReducer
    }
})

export default store;