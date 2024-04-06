import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config"


export const authContext = createContext(null);
// const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true);


    //create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const createLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }


    useEffect(() => {
        // Set an authentication state observer and get user data 
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log('on state change', currentUser);
                setUser(currentUser);
                setLoading(false);
            } 
        });
        return ()=>{
            unSubscribe();
        } 
    }, [])

    //sign out
    const createLogOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        createUser,
        createLogin,
        createLogOut,
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;