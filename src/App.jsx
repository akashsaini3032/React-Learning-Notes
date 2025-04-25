


// import { useState } from "react";
// const App=()=>{
//   const [add, setAdd]= useState(0);
//   const [sub, setSub]= useState(100);

//   function myMulti()
//   {
//     console.log("*******");
//     return add*2;
//   }
//   return(
//     <> 

//     <h1>Welcome!!!</h1>
//     <h1>Addition: {add}</h1>
//     <button onClick={()=>{setAdd(add+1)}}>Add</button>
//     <h1>Substraction: {sub}</h1>
//     <button onClick={()=>{setSub(sub-1)}}>Minus</button>
//     <hr />
//     <h1> Multiplication: {myMulti()}</h1>
      
//     </>
//   )
// }
// export default App;



import { useState, useMemo } from "react";

const App=()=>{
  const [add, setAdd]= useState(0);
  const [sub, setSub]= useState(100);

  const myMulti= useMemo(()=>{
    console.log("*****");
    return add*2;

  }, [add])

  
  return(
    <> 

    <h1>Welcome!!!</h1>
    <h1>Addition: {add}</h1>
    <button onClick={()=>{setAdd(add+1)}}>Add</button>
    <h1>Substraction: {sub}</h1>
    <button onClick={()=>{setSub(sub-1)}}>Minus</button>

    <hr />
   
    <h1> Multiplication: {myMulti}</h1>

   
      
    </>
  )
}
export default App;



// import { useState, useMemo } from "react";

// const App=()=>{

//   const [mynum, setMynum] = useState(0);

//   const [name, setName]= useState("");

//   function myMulti(){

//     for(var i=0; i<100000000; i++) {}
//     return mynum*2;
//   }

//   return(
//     <>
    
//     <h1>UseMemo task 2</h1>

//     Select Number : <input type="number" value={mynum}
//     onChange={(e)=>{setMynum(e.target.value)}} />

//     Enter Name: <input type="text" value={name}
//      onChange={(e)=>{setName(e.target.value)}} />

//      <hr />
//      <h1>Multiplication : {myMulti()}</h1>
//     </>
//   )
// }

// export default App;



// import { useState, useMemo } from "react";

// const App=()=>{

//   const [mynum, setMynum] = useState(0);

//   const [name, setName]= useState("");

//   const myMulti= useMemo(()=>{
//     for(var i=0; i<100000000; i++) {}
//     return mynum*2;

//   }, [mynum])

  
//   return(
//     <>
    
//     <h1>UseMemo task 2</h1>

//     Select Number : <input type="number" value={mynum}
//     onChange={(e)=>{setMynum(e.target.value)}} />

//     Enter Name: <input type="text" value={name}
//      onChange={(e)=>{setName(e.target.value)}} />

//      <hr />
//      <h1>Multiplication : {myMulti}</h1>
//     </>
//   )
// }

// export default App;

