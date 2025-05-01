
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

// import { useDispatch, useSelector } from "react-redux";
// import { changeName } from "./nameSlice";
// const App=()=>{

//     const usrname= useSelector(state=>state.myname.user);
//     const dispatch= useDispatch();

//     return(
//         <>
//             <h1>Welcome :{usrname}</h1>
//         <button onClick={()=>{dispatch(changeName())}}>clcik</button>

//         </>
//     )
// }
// export default App;










// ╭════════════════════════════════════════════════════════════╮
// │ 🚀 SECTION : [Redux Toolkit day 3]                       │
// │ 📝 DESCRIPTION : [Day 3 task 1 ]   Colour Change by User           │
// ╰════════════════════════════════════════════════════════════╯
// ╭────────────────────────────────────────────────────────────╮
// │ 🚀 SECTION     : Redux Toolkit — Day 3                   │
// │ 🎯 DESCRIPTION : Task 1 —                         │
// │                                                           │
// │ 🏗️ BLUEPRINT   : Store,main,colorlice,app              │
// │ 📚 DETAILS     : yah upar sequence hai code ka            │
// ╰────────────────────────────────────────────────────────────╯


// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { changeColor } from "./colorSlice";

// const App=()=>{
//     const clr=useSelector(state=>state.mycolor.color);
//     const dispatch=useDispatch();

//     const [txtval, setTxtval]=useState("")
//     return(
//         <>

//         <h1>Welcome</h1>
//         Enter Colour: <input type="text" value={txtval} 
//         onChange={(e)=>{setTxtval(e.target.value)}} />

//         <button onClick={()=>{dispatch(changeColor(txtval))}}>change color</button>
//         <hr />

//         <div style={{width:"200px",height:"200px",backgroundColor:clr}}></div>
//         </>

        
//     )
// }


// export default App;









// // ╭════════════════════════════════════════════════════════════╮
// // │ 🚀 SECTION : [Redux Toolkit day 3]                       │
// // │ 📝 DESCRIPTION : [Day 3 task 2 ]   add list todo           │
// // ╰════════════════════════════════════════════════════════════╯
// // ╭────────────────────────────────────────────────────────────╮
// // │ 🚀 SECTION     : Redux Toolkit — Day 3                    │
// // │ 🎯 DESCRIPTION : Task 2 —   add list todo                       │
// // │                                                           │
// // │ 🏗️ BLUEPRINT   : Store,main,colorslice,app              │
// // │ 📚 DETAILS     : yah upar sequence hai code ka            │
// // ╰────────────────────────────────────────────────────────────╯


// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { changeColor } from "./colorSlice";

// const App=()=>{
//     const data=useSelector(state=>state.mydark.work);
//     const dispatch=useDispatch();

//     const [txtval, setTxtval]=useState("")
//     console.log(data);
//     let sno=0;

//     const ans=data.map((key)=>{
//         sno++;
//         return(
//             <>
//             <tr>
//                 <td>{sno}</td>
//                 <td>{key.task}</td>
//             </tr>
//             </>
//         )
//     })
//     return(
//         <>

//         <h1>Welcome</h1>
//         Enter Colour: <input type="text" value={txtval} 
//         onChange={(e)=>{setTxtval(e.target.value)}} />

//         <button onClick={()=>{dispatch(changeColor({task:txtval}))}}>change color</button>
//         <hr />

//         <table>
//             <tr>
//                 <th>#</th>
//                 <th>Your task list</th>
//             </tr>
//             {ans}
//         </table>

        
//         </>

        
//     )
// }


// export default App;













// ╭════════════════════════════════════════════════════════════╮
// │ 🚀 SECTION : [Redux Toolkit day 4]                       │
// │ 📝 DESCRIPTION : [Day 4 task 1 ]   Todo list App           │
// ╰════════════════════════════════════════════════════════════╯
// ╭────────────────────────────────────────────────────────────╮
// │ 🚀 SECTION     : Redux Toolkit — Day 4                  │
// │ 🎯 DESCRIPTION : Task 1 —                         │
// │                                                           │
// │ 🏗️ BLUEPRINT   : Store,main,colorlice,app              │
// │ 📚 DETAILS     : yah upar sequence hai code ka            │
// ╰────────────────────────────────────────────────────────────╯













