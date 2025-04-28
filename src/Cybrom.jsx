import { useDispatch, useSelector } from "react-redux";

import { changeColor } from "./colorSlice";


const Cybrom=()=>{

    const clr= useSelector(state=>state.mycolor.color);
    const dispatch= useDispatch();

    return(
        <>
        <h1>Redux Toolkit</h1>
        <h2>colour change</h2>


        <button onClick={()=>{dispatch(changeColor())}}>Change</button>

        <div style={{width:"200px",height:"200px",backgroundColor:clr}}></div>
        

        </>
    )
}


export default Cybrom;


