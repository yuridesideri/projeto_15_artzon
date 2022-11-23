import { useEffect, useState, useContext, createContext } from "react";
import axios from "axios"

const userDataContext = createContext({});


export default function userAuth({children}){
    const API_URL = process.env.API_URL;
    const token = sessionStorage.getItem('token');
    const [userData, setUserData] = useState({})

    useEffect(() => {
        if (token){
            axios.get(API_URL + 'userdata', {headers: {authentication: `Bearer ${token}`}})
            .then(({data: userData}) => setUserData(userData))
            .catch(({request}) => {
                console.log(request);
            })
        }

    }, [token])

    return (
        <userDataContext.Provider value={userData}>
            {children}
        </userDataContext.Provider>
    )
}

export const useUserData = () => useContext(userDataContext);