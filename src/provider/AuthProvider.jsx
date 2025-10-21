import React, { createContext, useEffect, useState } from 'react';
import { auth } from './../firebase/firebase-init';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile} from 'firebase/auth';

export const AuthContext = createContext(null);

const gitHubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

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
    const gitHubLoginInfo = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider);
    }
    const googleLoginInfo = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);

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
        gitHubLoginInfo,
        googleLoginInfo,
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