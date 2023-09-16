import {createContext,useState} from 'react'

 /* import Services from '../components/Services' 
  import Cart from '../components/Cart */
import App from '../App'  
/* import Cart from '../components/Cart' */
 export const UserContext=createContext()
const Parentcontext=() =>{ 

    const [cart,setcart]=useState([])
   /*  */ console.log(cart) 

  return (
    <div>
       
        <UserContext.Provider value={{cart,setcart}}>
         <App/>
      </UserContext.Provider>
    </div>
  )
}

export default Parentcontext;
