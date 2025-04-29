

// import { configureStore } from "@reduxjs/toolkit";

// const store=configureStore({

//     reducer:{
//         mycounter:myReducer
//     }

// })


// export default store;


// import App from "./App";
// import store from "./Store";

// import { Provider } from "react-redux";


// <Provider store={store}>

//     <App/>
// </Provider>



// import { createSlice } from "@reduxjs/toolkit";


// const counterSlice= createSlice(
//     {
//         name:"mycounter",
//         initialState:{
//             count:0
//         },

//         reducers:{
//             increment:(state)=>{
//                 state.count++;
//             },

//             increment:(state)=>{
//                 state.count--;
//             }
//         }
//     }
// )


// export const {increment,decrement}=counterSlice.actions;
// export default counterSlice.reducer;




import { useDispatch,useSelector } from "react-redux";

const App=()=>{
    const mycnt=useSelector(state=>state.mycounter.count);
    const dispatch=useDispatch();

    return(
        <>
        <button onClick={()=>{dispatch(increment())}}> increment</button>
        <h1> {mycnt}</h1>
        <button onClick={()=>{dispatch(increment())}}>decrement</button>
        </>
    )
}


export default App;
