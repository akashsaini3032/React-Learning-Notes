
// ╭════════════════════════════════════════════════════════════╮
// │ 🚀 SECTION : [Redux Toolkit day 1]                       │
// │ 📝 DESCRIPTION : [Day 1 task 1 ]             │
// ╰════════════════════════════════════════════════════════════╯


// import { useDispatch, useSelector } from "react-redux";

// import { increment, decrement } from "./counterSlice";


// const App=()=>{

//     const mycnt= useSelector(state=>state.mycounter.count);
//     const dispatch= useDispatch();

//     return(
//         <>
//         <h1>Redux Toolkit</h1>
//         <h2>My counter App</h2>


//         <button onClick={()=>{dispatch(increment())}}>Increment</button>
//         <h1> {mycnt}</h1>
//         <button onClick={()=>{dispatch(decrement())}}>Decrement</button>

//         </>
//     )
// }


// export default App;




// ╭────────────────────────────────────────────────────────────╮
// │ 🚀 SECTION     : Redux Toolkit — Day 1                      │
// │ 🎯 DESCRIPTION : Task 2 — Implementing Color Change         │
// │                                                            │
// │ 🏗️ BLUEPRINT   : Redux Toolkit Project Architecture         │
// │ 📚 DETAILS     : Folder structure and initial setup         │
// ╰────────────────────────────────────────────────────────────╯


// ╭════════════════════════════════════════════════════════════╮
// │ 🚀 SECTION : [Redux Toolkit day 1]                       │
// │ 📝 DESCRIPTION : [Day 1 task 2 Color change]             │
// ╰════════════════════════════════════════════════════════════╯


import Cybrom from "./Cybrom";



const App=()=>{

    return(
        <>
        <Cybrom />
        </>
    )
}

export default App;


