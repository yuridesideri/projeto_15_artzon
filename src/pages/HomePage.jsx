import styled from "styled-components";
import { useEffect, useState } from "react";
import CircleCoins from "../assets/Coin-Circle.svg";
import Logo from "../assets/Artzon Logo.svg";
import Hamburguer from "../assets/Hamburguer.svg";
import UserCircle from "../assets/User Circle.svg";
import WallpaperCatalog from "../components/WallpaperCatalog.jsx";
import axios from "axios";

export default function HomePage(props) {
    const API_URL = process.env.REACT_APP_API_URL;
    const [wallpapers, setWallpapers] = useState([]);

    useEffect(() => {
        axios
            .get(API_URL + "/getwallpapers")
            .then((res) => setWallpapers(res.data))
            .catch(({ request }) => console.log(request));
    }, []);

    return (
        <StyledHomePage>
            <header className="w-full h-[81px] bg-[#4A4A4A]">
                <img src={Hamburguer} alt="" />
                <img src={CircleCoins} alt="" />
                <img src={Logo} alt="" />
                <p>[username]</p>
                <img src={UserCircle} alt="" />
            </header>
            <section className="flex justify-center h-10 items-center">
                <input className="h-5" type="text" />
            </section>
            <section>
                {wallpapers.map((wallpaper) => (
                    <WallpaperCatalog
                        key={wallpaper._id}
                        price={wallpaper.wallpaperPrice}
                        wallpaperImage={API_URL + `/wallpapers/${wallpaper.wallpaperName}`}
                    />
                ))}
            </section>
        </StyledHomePage>
    );
}

const StyledHomePage = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
    flex-direction: column;
    align-items: center;
    h1 {
        color: black;
    }
`;
