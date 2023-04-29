import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';



export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)


    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        return signOut(auth)
  
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,logUser=>{
            console.log('have a observe ',logUser)
            setUser(logUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const userInfo={
        user,
        createUser,
        signIn,
        logOut
    }
    return(
        <AuthContext.Provider value={userInfo}>
                {children}
        </AuthContext.Provider >    
    );
};

export default AuthProvider;