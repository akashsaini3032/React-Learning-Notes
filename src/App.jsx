// const name="Ananya";
// const age=22;
// const lpa=7;
//Inserting a Large Block of HTML code:
const table1=<table border={2} cellPadding={10} cellSpacing={5}>
  <thead>
    <tr>
      <td>Sr. No.</td>
      <td>Author</td>
      <td>Book</td>
    </tr>
    
  </thead>
  <tbody>
    <tr>
      <td>01</td>
      <td>Ruskin Bond</td>
      <td>The Whistling School Boy</td>
    </tr>
    <tr>
      <td>02</td>
      <td>Preety Shenoy</td>
      <td>Life is what you make it</td>
    </tr>
    <tr>
      <td>03</td>
      <td>R.K. Narayan</td>
      <td>Malgudi Days</td>
    </tr>
    <tr>
      <td>04</td>
      <td>Colleen Hoover</td>
      <td>It Ends With Us</td>
    </tr>
    <tr>
      <td>05</td>
      <td>Haruki Murakami</td>
      <td>Men Without Women</td>
    </tr>
  </tbody>
</table>

let App=()=>{
  return(
    // Expression in JSX:
    <h3>{table1}</h3>

    //Wrapping html tags in one element: One Top Level Element!
//     <div>
//  <h1>Hello</h1>
//  <h1>Hello</h1>
//  <h1>Hello</h1>
//  <h1>Hello</h1>
//  </div>

// Fragment tag:
 
//     <>
//  <h1>Hello</h1>
//  <h1>Hello</h1>
//  <h1>Hello</h1>
//  <h1>Hello</h1>
//  </>
  )
}
export default App;
