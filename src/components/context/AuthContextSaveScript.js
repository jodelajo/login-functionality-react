import React, {createContext, useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import axios from 'axios';
export const AuthContext = createContext({})
function AuthContextProvider({children}) {
    const history = useHistory();
    const [authState, setAuthState] = useState({
        user: null,
        status: 'pending',
    })
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token !== undefined)
            setAuthState({
                user: null,
                status: 'done',
            })
    },[])
    async function loginFunction(jwtToken) {
        // console.log(jwtToken)
        const decoded = jwt_decode(jwtToken)
        const userid = decoded.sub;
        // console.log(userid)
        console.log(decoded)
        localStorage.setItem('token', jwtToken)
        try {
            const result = await axios.get(`http://localhost:3000/600/users/${userid}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }
            })
            console.log(result)
            setAuthState({
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                },
                status: 'done',
            });
            history.push("/profile")
        } catch (e) {
            console.error(e)
        }
    }
    function logOutFunction() {
        console.log("Log uit")
    }
    const data = {
        ...authState,
        login: loginFunction,
        logout: logOutFunction,
    }
    return (
        <AuthContext.Provider value={data}>
            {authState.status === 'done'
                ? children
                : <p>Loading...</p>
            }
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;