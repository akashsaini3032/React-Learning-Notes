import { useDispatch, useSelector } from "react-redux";

import { increment, decrement } from "./counterSlice";


const App=()=>{

    const mycnt= useSelector(state=>state.mycounter.count);
    const dispatch= useDispatch();

    return(
        <>
        <h1>Redux Toolkit</h1>
        <h2>My counter App</h2>


        <button onClick={()=>{dispatch(increment())}}>Increment</button>
        <h1> {mycnt}</h1>
        <button onClick={()=>{dispatch(decrement())}}>Decrement</button>

        </>
    )
}


export default App;


