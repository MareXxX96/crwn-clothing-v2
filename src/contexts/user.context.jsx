import { useEffect } from "react";
import { createContext, useState } from "react";
import {onAuthStateChangeListener, signOutUser} from '../utils/firebase/firebase.utils'

export const UserContext = createContext({
    currentUser : null,
    setCurrentUser : () => null
})

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}

    // signOutUser()

    // useEffect(() => {
    //     const subscribeStatusChanged = onAuthStateChangeListener((user) => {
    //         console.log('fired')
    //     })
    //     return subscribeStatusChanged
    // }
    // )

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}