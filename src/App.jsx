
// ╭════════════════════════════════════════════════════════════╮
// │ 🚀 SECTION : [Redux Toolkit day 1]                       │
// │ 📝 DESCRIPTION : [Day 1 task 1 ]             │
// ╰════════════════════════════════════════════════════════════╯
// ╭────────────────────────────────────────────────────────────╮
// │ 🚀 SECTION     : Redux Toolkit — Day 1                    │
// │ 🎯 DESCRIPTION : Task 2 — Counter                         │
// │                                                           │
// │ 🏗️ BLUEPRINT   : Store,main,counterslice,app              │
// │ 📚 DETAILS     : yah upar sequence hai code ka            │
// ╰────────────────────────────────────────────────────────────╯


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





// ╭════════════════════════════════════════════════════════════╮
// │ 🚀 SECTION : [Redux Toolkit day 1]                       │
// │ 📝 DESCRIPTION : [Day 1 task 2 Color change]             │
// ╰════════════════════════════════════════════════════════════╯
// ╭────────────────────────────────────────────────────────────╮
// │ 🚀 SECTION     : Redux Toolkit — Day 1                      │
// │ 🎯 DESCRIPTION : Task 2 — Counter          │
// │                                                            │
// │ 🏗️ BLUEPRINT   : Store,main,colorslice,cybrom,app         │
// │ 📚 DETAILS     : yah upar sequence hai code ka          │
// ╰────────────────────────────────────────────────────────────╯


// import Cybrom from "./Cybrom";



// const App=()=>{

//     return(
//         <>
//         <Cybrom />
//         </>
//     )
// }

// export default App;







// ╭════════════════════════════════════════════════════════════╮
// │ 🚀 SECTION : [Redux Toolkit day 2]                       │
// │ 📝 DESCRIPTION : [Day 2 task 1 ]   Namechange           │
// ╰════════════════════════════════════════════════════════════╯
// ╭────────────────────────────────────────────────────────────╮
// │ 🚀 SECTION     : Redux Toolkit — Day 2                    │
// │ 🎯 DESCRIPTION : Task 1 —                         │
// │                                                           │
// │ 🏗️ BLUEPRINT   : Store,main,nameslice,app              │
// │ 📚 DETAILS     : yah upar sequence hai code ka            │
// ╰────────────────────────────────────────────────────────────╯

import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./nameSlice";
const App=()=>{

    const usrname= useSelector(state=>state.myname.user);
    const dispatch= useDispatch();

    return(
        <>
            <h1>Welcome :{usrname}</h1>
        <button onClick={()=>{dispatch(changeName())}}>clcik</button>

        </>
    )
}
export default App;

