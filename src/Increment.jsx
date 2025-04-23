
import { useReducer } from "react";

const Increment=()=>{

    const reducerMethod=(state, action)=>{

        switch(action)
        {
            case "Increment":
                return state+10;

             case "Decrement"  :
                return state-10;
                
                default :
                return state
        }
    }
     
    const [count, dispatch]= useReducer(reducerMethod,0);

    return(
        <>

        <button onClick={()=>{dispatch("Increment")}}> Increment</button>

        <h1>Count : {count}</h1>
         

        <button onClick={()=>{dispatch("Decrement")}}> Decrement</button>
       

        </>
    )
}

export default Increment;