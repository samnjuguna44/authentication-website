import {createContext, useContext, useEffect, useState} from 'react';

//firebase function to create new user / logout function
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged
} from 'firebase/auth';
import {auth} from '../components/firebase'

const UserContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})

    //function to create user with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    //function to show user signs in with email and password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth,email, password)
    }

    //logout function
    const logout = () => {
        return signOut(auth)
    }

    //useEffect to show what happens after clicking the logout button
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, [])


    return (
        //values entailed in AuthContext
        <UserContext.Provider value={{createUser, user, logout, signIn}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}