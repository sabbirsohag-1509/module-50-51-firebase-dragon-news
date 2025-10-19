import React, { createContext, useEffect, useState } from 'react';
import { auth } from './../firebase/firebase-init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const registerInfo = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginInfo = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updatedUserInfo = (info) => {
        setLoading(true);
        return updateProfile(auth.currentUser, info);
    }
    const logOutInfo = () => {
        return auth.signOut();
    }

    useEffect(() => { 
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser);
            setLoading(false);
            
        })
        return () => {
            return unsubscribe();
        }
     }, [])

    const authInfo = {
        loading,
        user,
        registerInfo,
        loginInfo,
        updatedUserInfo,
        logOutInfo,
    }

    return (
        <div>
            <AuthContext value={authInfo}> 
                {children}
            </AuthContext>
        </div>
    );
};


export default AuthProvider;