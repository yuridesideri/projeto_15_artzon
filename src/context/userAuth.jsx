import { useEffect, useState, useContext, createContext } from "react";
import axios from "axios"

const userDataContext = createContext({});


export default function UserAuth({children}){
    const [userData, setUserData] = useState({});


    console.log(userData);

    return (
        <userDataContext.Provider value={[userData, setUserData]}>
            {children}
        </userDataContext.Provider>
    )
}

export const useUserData = () => useContext(userDataContext);