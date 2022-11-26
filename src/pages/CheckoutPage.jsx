import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import rtn from "../assets/return.png";
import coin from "../assets/Coin-W.svg";
import safe from "../assets/Safe Icon.svg";
import axios from "axios";
export default function CheckoutPage() {
  const [counter, setCounter] = useState(0);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [card, setCard] = useState("");
  const [valueArt, setValueArt] = useState(0);
  const [userCoin, setUserCoin] = useState(0);

  const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  function returnPage() {
    navigate("/Home");
  }

  function addCounter() {
    setCounter(counter + 1);
    setValueArt(valueArt + 5);
  }
  if (counter === -1) {
    setValueArt(0);
    setCounter(0);
  }
  function subtractCounter() {
    setCounter(counter - 1);
    setValueArt(valueArt - 5);
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(REACT_APP_API_URL + "/checkout", { email, card, address, counter })
      .then((res) => setUserCoin(userCoin+res) )
      .catch(({ request }) => {
        console.log(request);
      });
  }

  return (
    <StyledCheckout>
      <Main>
        <Return src={rtn} onClick={returnPage} />
        <UserInfos>
          <h1>
            You own {userCoin} <img src={coin} alt="Coin" />
          </h1>

          <input
            type="email"
            placeholder="Type in your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <ArtCoins>
            <h1> ArteCoins</h1>
            <img src={coin} alt="Coin" />
            <Counter>
              <button onClick={addCounter}>+</button> <h3>{counter}</h3>{" "}
              <button onClick={subtractCounter}>-</button>
            </Counter>
          </ArtCoins>

          <input
            type="text"
            placeholder="Type in your address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="number"
            placeholder="Type in your credit card"
            onChange={(e) => setCard(e.target.value)}
          />
        </UserInfos>
        <Checkout>
          <div style={{ marginTop: "30px", marginBottom: "70px" }}>
            <h1> Checkout</h1>
          </div>
          <div>
            <h3> {counter} </h3> <img src={coin} alt="Coin" />{" "}
            <h3> {valueArt} R$ </h3>
          </div>
          <button
            onClick={handleSubmit}
            style={{ backgroundColor: " #5B834D", cursor: "pointer" }}
          >
            <h2> Buy</h2>
            <img
              style={{ width: "25px", left: "185px" }}
              src={safe}
              alt="SafeIcon"
            />
          </button>
        </Checkout>
      </Main>
    </StyledCheckout>
  );
}

const StyledCheckout = styled.div`
  background-color: black;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-family: "Capriola";
  font-style: normal;
  font-weight: 400;
`;
const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  font-family: "Capriola";
  font-style: normal;
  font-weight: 400;
`;

const UserInfos = styled.div`
  margin-right: 15px;
  width: 557px;
  height: 439px;
  background: #2d2d2d;
  border-radius: 54px;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: auto;
    height: 10px;
    color: white;
    font-family: "Capriola";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 40px;
  }
  h1 {
    color: white;
    font-size: 58px;
    margin-top: 10px;
    margin-bottom: 40px;
    img {
      width: 50px;
    }
  }
  input {
    font-family: "Capriola";
    font-style: normal;
    font-weight: 400;
    width: 236px;
    height: 36px;
    background: #4a4a4a;
    border-radius: 7px;
    margin-bottom: 10px;
  }
`;
const ArtCoins = styled.div`
  min-width: 236px;
  min-height: 36px;
  background-color: #4a4a4a;
  border-radius: 7px;
  margin-bottom: 10px;
  position: relative;
  h1 {
    font-size: 14px;
  }
  img {
    width: 15px;
    position: absolute;
    top: 7px;
    left: 118px;
  }
`;

const Counter = styled.div`
  margin-top: 12px;
  margin-right: 20px;
  border-radius: 5px;
  width: 60px;
  height: 35px;
  align-items: center;
  display: flex;
  button {
    font-size: 13px;
    color: black;
    border-radius: 5px;
    width: 20px;
    height: 20px;
    border: 2px;
    border-color: black;
    cursor: pointer;
  }
  h3 {
    font-size: 13px;
    margin-left: 5px;
    margin-right: 5px;
  }
`;
const Checkout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 325px;
  height: 439px;
  background: #2d2d2d;
  border-radius: 54px;
  position: relative;
  div {
    width: 236px;
    height: 36px;
    background: #4a4a4a;
    border-radius: 7px;
    margin-top: 10px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    img {
      position: absolute;
      width: 15px;
      left: 118px;
    }
  }
  button {
    width: 236px;
    height: 36px;
    border-radius: 7px;
    margin-top: 10px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
  }
`;

const Return = styled.img`
  width: 45px;
  height: 45px;
  position: relative;
  bottom: 290px;
  cursor: pointer;
`;
