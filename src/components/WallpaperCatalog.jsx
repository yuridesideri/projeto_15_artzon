import CoinB from "../assets/Coin-B.svg"
import DownloadIcon from "../assets/Download.svg";
import CartIcon from "../assets/Shopping Cart.svg"



export default function WallpaperCatalog(props){

    const {price, downloadable, wallpaperImage, wallpaperTitle} = props;

    return (
        <div className="bg-[#4A4A4A] w-[168px] h-[190px] items-center justify-center rounded-2xl flex-col p-5">
            <div className=" flex flex-col w-fit">
                <img className="rounded-xl m-auto" src={wallpaperImage} alt="" />
                <p className="min-h-[20px]  "> {wallpaperTitle}</p>
            </div>
            <div className="flex justify-between">
                <div className="bg-[#D9D9D9] w-[59px] h-[33px] flex justify-center items-center">
                    <p className="text-black">{price}</p>
                    <img src={CoinB} alt="" />
                </div>
                <div className="bg-[#D9D9D9] w-[59px] h-[33px] flex justify-center items-center">
                    <img src={downloadable ? DownloadIcon : CartIcon} alt="" />
                </div>
            </div>            
        </div>
    );
}