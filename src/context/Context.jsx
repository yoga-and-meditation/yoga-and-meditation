import {createContext,useState,useContext} from 'react'

const myContext = createContext()
export const useMyContext=()=>{
    return useContext(myContext)
}
 export const MyContextProvider=({children})=>{
    const[cart,setcart]=useState([])
const allObj={
    cart,
    setcart,
};
console.log(cart)
return (<myContext.Provider value={allObj}>{children}</myContext.Provider>)}