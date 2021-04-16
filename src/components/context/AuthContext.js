import React, { createContext, useState}  from 'react';

export const UserContext = createContext({})

function UserContextProvider({ children }) {
    const [userEmail, setUserEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, toggleLoggedIn] = useState(false)

    // function login(jwtto) {
    //     return
    //     toggleLoggedIn()
    // }
    const data = "hoi"

    return (
        <UserContext.Provider value={data}>
            { children }
        </UserContext.Provider>
    )
}
export default UserContextProvider;
