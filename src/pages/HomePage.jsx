import styled from "styled-components";
import { useEffect, useState } from "react";
import CircleCoins from "../assets/Coin-Circle.svg";
import Logo from "../assets/Artzon Logo.svg";
import Hamburguer from "../assets/Hamburguer.svg";
import UserCircle from "../assets/User Circle.svg";
import WallpaperCatalog from "../components/WallpaperCatalog.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../context/userAuth";

export default function HomePage(props) {
    const API_URL = process.env.REACT_APP_API_URL;
    const [wallpapers, setWallpapers] = useState([]);
    const navigate = useNavigate();
    const [userData, setUserData] = useUserData();

    useEffect(() => {
        axios
            .get(API_URL + "/getwallpapers")
            .then((res) => setWallpapers(res.data))
            .catch(({ request }) => console.log(request));
    }, []);

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token){
            axios.get(API_URL + '/userdata', {headers: {authentication: `Bearer ${token}`}})
            .then(({data: userData}) => setUserData({...userData, token}))
            .catch(({request}) => {
                console.log(request);
            })
        }
    // eslint-disable-next-line
    }, [])


    return (
        <StyledHomePage>
            <header className="w-full h-[81px] bg-[#4A4A4A]">
                <img src={Hamburguer} alt="" />
                <img onClick={() => navigate('/checkout')} src={CircleCoins} alt="" />
                <img src={Logo} alt="" />
                <p>{userData.username || "LogIn =>"}</p>
                <img onClick={() => navigate("/signin")} src={UserCircle} alt="" />
            </header>
            <section className="flex justify-center h-10 items-center">
                <input className="h-5" type="text" />
            </section>
            <section className="flex flex-wrap my-10 px-40">
                {wallpapers.map(({_id, wallpaperPrice, wallpaperName}) => (
                    <WallpaperCatalog
                        key={_id}
                        price={wallpaperPrice}
                        wallpaperTitle={wallpaperName}
                        downloadable={userData.wallpapers?.find(userWallpaper => userWallpaper === wallpaperName)}
                        wallpaperImage={API_URL + `/wallpapers/${wallpaperName}`}
                    />
                ))}
            </section>
        </StyledHomePage>
    );
}

const StyledHomePage = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: black;
    flex-direction: column;
    align-items: center;
    h1 {
        color: black;
    }
`;
