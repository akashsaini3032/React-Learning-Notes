



// ╭════════════════════════════════════════════════════════════╮
// │ 🚀 SECTION : [Redux Toolkit day 1]                       │
// │ 📝 DESCRIPTION : [Day 1 task 1 ]             │
// ╰════════════════════════════════════════════════════════════╯

import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';



import store from './Store.jsx';
import { Provider } from 'react-redux';



createRoot(document.getElementById('root')).render(


    
  <Provider store={store}>
      <App />



  </Provider>
  
    

    
     
   
  
)




// ╭════════════════════════════════════════════════════════════╮
// │ 🚀 SECTION : [Redux Toolkit day 1]                       │
// │ 📝 DESCRIPTION : [Day 1 task 2 Color change]  
// explain:- task 2 me bhi yahi code use hoga           │
// ╰════════════════════════════════════════════════════════════╯


