import axios from "axios";
import CoinB from "../assets/Coin-B.svg"
import DownloadIcon from "../assets/Download.svg";
import CartIcon from "../assets/Shopping Cart.svg"
import { useUserData } from "../context/userAuth";



export default function WallpaperCatalog(props){

    const {price, downloadable, wallpaperImage, wallpaperTitle} = props;


    const [{token}] = useUserData();
    const API_URL = process.env.REACT_APP_API_URL;

    function handleBuy(e) {
        e.preventDefault();
        axios.post(API_URL +'/buy', {wallpaperName : wallpaperTitle}, {headers:{authentication: `Bearer ${token}`}})
        .then(res => {window.location.reload(); console.log('ok')})
        .catch(({request})=> {
            if (request.response === 'No credit') alert('You need to buy artcoins, click on the big coin icons');
            else console.log(request);
        });
    }


    function handleDownload(e){
        axios.post(API_URL + "/download", {wallpaperName :wallpaperTitle}, {headers:{authentication: `Bearer ${token}`}})
        .then(res => alert("Downloading..."))
        .catch(({request}) => console.log(request));
    }

    return (
        <div className="bg-[#4A4A4A] w-[168px] h-[190px] items-center justify-center rounded-2xl flex-col p-5 mx-10 my-10">
            <div className=" flex flex-col w-fit">
                <img className="rounded-xl m-auto" src={wallpaperImage} alt="" />
                <p className="min-h-[20px]  "> {/*wallpaperTitle*/}</p>
            </div>
            <div className="flex justify-between">
                <div className="bg-[#D9D9D9] w-[59px] h-[33px] flex justify-center items-center">
                    <p className="text-black">{price}</p>
                    <img src={CoinB} alt="" />
                </div>
                <div className={`w-[59px] h-[33px] flex justify-center items-center " +  ${downloadable ? "bg-[#8BE28A]" : "bg-[#D9D9D9]"}`}>
                    { downloadable? <img onClick={handleDownload} src={DownloadIcon} alt="" /> : <img onClick={handleBuy} src={CartIcon} alt="" /> }
                </div>
            </div>            
        </div>
    );
}