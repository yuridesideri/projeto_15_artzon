import ForwardArrow from "../assets/Forward Arrow.svg";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Logo from "../assets/Artzon Logo.svg"

export default function SignUp(props){
    const API_URL = process.env.API_URL;
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const [
            {value : email},
            {value : username},
            {value: password},
        ] = e.target;
        axios.post(API_URL + '/sign-up', {email, username, password})
        .then(() => navigate('/signin'))
        .catch(({request}) => {
            console.log(request);
        })

    }

    return (
        <StyledSignUp>
            <div className="middle-container">
                <img className="title" src={Logo}></img>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Type in your email" type="email" />
                    <input placeholder="Type in your username" type="text" />
                    <input placeholder="Type in your password" type="password" />
                    <input placeholder="Confirm your password" type="password" />
                    <button type="Submit">
                        <img src={ForwardArrow} alt="" />
                    </button>
                </form>
                <div className="sign-up-call">
                    <p onClick={() => navigate('/signin')} >Or, you can Sign In</p>
                </div>
            </div>
        </StyledSignUp>
    );
}


const StyledSignUp = styled.div`
    background-color: black;
    height: 100vh;
    justify-content: center;
    align-items: center;
    .middle-container {
        background-color: #4A4A4A;
        border-radius: 37px;
        width: 355px;
        height: 523px;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        .title{
            margin-top: 30px;
            width: 65%;
            flex-grow: 2;
        }
        form{
            margin-top: 20px;
            flex-grow: 3;
            display: flex;
            flex-direction: column;
            align-items: center;
            input {
                margin-top: 15px;
                width: 80%;
                width: 230px;
                height: 32px;
                background-color: #2D2D2D;
                border-radius: 10px;
                border: none;
                color: white;
                text-indent: 12px;
                ::placeholder{
                    font-family: "Capriola";
                    font-size: 11px;    
                    color: rgba(255, 255, 255, 0.63);
                }
            }
            img{
                width: 10%;
            }
            button{
                margin-top: 10%;
                width: 93px;
                height: 32px;
                background-color: black;
                border-radius: 10px;
                border: none;
                align-items: center;
                justify-content: center;
                img{
                    width: 22px;
                }
            }
        }
        .sign-up-call{
            flex-grow: 1;
            font-family: 'Capriola';
            align-items: center;
            font-size: 11px;
            margin-bottom: 30px;
            p{
                cursor: default;
            }
            p:hover{
                cursor: pointer;
                text-decoration: underline;
            }
        }

    }
`