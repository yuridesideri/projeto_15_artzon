import ForwardArrow from "../assets/Forward Arrow.svg";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function SignIn(props){
    const API_URL = process.env.API_URL;
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const [
            {value : email},
            {value : password}
        ] = e.target;
        axios.post(API_URL + '/', {email, password})
        .then(({data: token}) => {
            sessionStorage.setItem('token', token);
            navigate('/');
        })
        .catch(({request}) => {
            console.log(request);
        })

    }

    return (
        <StyledLogIn>
            <div className="middle-container">
                <img className="title"></img>
                <form onSubmit={handleSubmit}>
                    <input type="email" />
                    <input type="password" />
                    <button type="Submit">
                        <img src={ForwardArrow} alt="" />
                    </button>
                </form>
                <p className="sing-up-call">Or, you can Sign Up</p>
            </div>
        </StyledLogIn>
    );
}

const StyledLogIn = styled.div`
    
`