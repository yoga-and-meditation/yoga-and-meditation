import {createContext,useState} from 'react'

import Services from '../components/Services.jsx'
 export const UserContext=createContext()
const Parentcontext=() =>{ 

    const [cart,setcart]=useState([])
   /*  */ console.log(cart) 

  return (
    <div>
       
        <UserContext.Provider value={{cart,setcart}}>
      <Services/>
      </UserContext.Provider>
    </div>
  )
}

export default Parentcontext;
