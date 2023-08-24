import { createContext } from "react";
/* import {createUserWithEmailAndPassword} from 'firebase/auth'
 */
import firebase from 'firebase/app';
import 'firebase/firestore';
const UserContext=createContext()
const auth = firebase.auth(); // accessing the authentication module
const createUserWithEmailAndPassword=firebase.createUserWithEmailAndPassword;
export const AuthContextProvider=({children})=>{
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    return(
        <UserContext.Provider value={createUser}>
            {children}
            </UserContext.Provider>
    )}
    export const UserAuth=()=>{
        return UserContext(UserContext)
    }
