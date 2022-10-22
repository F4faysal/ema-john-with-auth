
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import app from '../../fierbase/fierbase.conifg';

const auth = getAuth(app)

export const AuthContext = createContext()

const UseContaxe = ({children}) => {
const [user , setUser] = useState(null)

const creatUser = (email , password) => {
    return createUserWithEmailAndPassword (auth , email , password);
}

const signIn = (email , password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

const logOut = () => {
    return signOut(auth);
}

useEffect(()=>{
    const unsucbier =  onAuthStateChanged(auth, (crruntUser) => {

        console.log('crrunt User ',crruntUser)

        setUser(crruntUser)

        // if (crruntUser) {
        //   // User is signed in, see docs for a list of available properties
        //   // https://firebase.google.com/docs/reference/js/firebase.User
        //   const uid = user.uid;
        //   // ...
        // } else {
        //   // User is signed out
        //   // ...
        // }
      });

      return ()=> unsucbier();
},[])

const authInfo ={ user , creatUser , signIn , logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UseContaxe;