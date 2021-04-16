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

    async function fetchUserData(jwtToken) {

        const decoded = jwt_decode(jwtToken)
        const userid = decoded.sub;

        console.log(decoded)
        localStorage.setItem('token', jwtToken)

        try {
            const result = await axios.get(`http://localhost:3000/600/users/${userid}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }
            })

            setAuthState({
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                },
                status: 'done',
            });

        } catch (e) {
            console.error(e)
        }
    }

    useEffect(()=>{
    const token = localStorage.getItem('token')

    if(token !== undefined && authState.user === null){

    fetchUserData(token);

    } else {
        setAuthState({
            user: null,
            status: 'done',
        })
    }

    },[]);

    function loginFunction(jwtToken) {

        localStorage.setItem('token', jwtToken)

        fetchUserData(jwtToken);
        history.push('/profile')
        }



    function logOutFunction() {
        localStorage.clear();
        setAuthState({
            user: null,
            status: 'done',
        })
        history.push('/')
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
