import { React, useState } from 'react'
import styled from 'styled-components'
import { ConnectKitButton } from "connectkit";
import { useAccount } from 'wagmi';

function Header() {

  const [isConnected, setConnected] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { address } = useAccount();
  console.log(address);


  window.onscroll = function (e) {
    if(window.scrollY>=910){
      setIsScrolled(true);
    }else{
      setIsScrolled(false);
    }
  }

  const planHandler = () => {
    window.scroll({
      top: 926,
      behavior: 'smooth'
    });
  }

  const takeInsuranceHandler = () => {
    window.scroll({
      top: 1846,
      behavior: 'smooth'
    });
  }

  return (
    <Container style={{
      borderBottom: isScrolled ? '1px solid #6aa5ec3d' : ''
    }}>
      <InsideContainer>
        <Left>
          <div className='logo'>
            <img src='/images/logo.png' />
          </div>
          <div className='name'>Pinsurance</div>
        </Left>
        <Middle>
          <div className='plan' onClick={planHandler}>
            <p>Plan</p>
          </div>
          <div className='insruance' onClick={takeInsuranceHandler}>
            <p>Take Insurance</p>
          </div>
        </Middle>
        <Right>
          <div className='address-div'>
            {isConnected &&
              <div className='address'>
                <p>{address}</p>
              </div>
            }
          </div>
          <div className='button'>
            <ConnectKitButton.Custom>
              {
                ({ isConnected, show, ensName }) => {
                  console.log("Wallet Connected : ", isConnected);
                  if (isConnected) {
                    setConnected(true);
                  } else {
                    setConnected(false);
                  }

                  return (
                    <div className="login" onClick={show}>
                      {isConnected ? ensName ?? "SignOut" : "SignIn"}
                    </div>
                  );
                }
              }
            </ConnectKitButton.Custom>
          </div>
        </Right>
      </InsideContainer>
    </Container>
  )
}

export default Header

const Container = styled.div`
    position: fixed;
    width: 100%;
    z-index: 10;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center; 
    background-color: white;
`

const InsideContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;

`
const Left = styled.div`
  height: 100%;
  width: 15rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  .logo {
    width: 5rem;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
      width: 46%;
    }
  }

  .name {
    flex: 1;
    margin-left: -6px;
    display: flex;
    height: 100%;
    align-items: center;
    font-size: 25px;
    font-weight: 600;
  }
`

const Middle = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  .plan {
    width: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.1rem;
    margin-right: 2rem;
    cursor: pointer;
    transition: opacity 0.15s;

    p {
      margin: 0;
    }

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.7;
    }
  }

  .insruance {
    width: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.1rem;
    cursor: pointer;
    transition: opacity 0.15s;

    p {
      margin: 0;
    }

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.7;
    }
  }

`

const Right = styled.div`
  height: 100%;
  width: 19rem;
  display: flex;
  align-items: center;

  .address-div {
    height: 100%;
    flex: 1.3;
    display: flex;
    align-items: center;

    .address {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #0152b534;
      border-radius: 20px;
      height: 1.9rem;
      cursor: pointer;
      transition: opacity 0.25s;

      p {
        font-size: 14px;
        width: 145px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      &:hover {
        opacity: 0.9;
      }
    }
   
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: end;
    flex: 1;

    .login {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #0152b5da;
    width: 100px;
    height: 2.4rem;
    cursor: pointer;
    position: relative;
    font-size: 17px;
    font-weight: 500;
    color: #0152b5e5;
    border-radius: 20px;
    transition: background-color 0.25s , color 0.25s;

    &:hover {
      background-color: #0152b5da;
      color: white;
    }

    &:active {
      opacity: 0.9;
    }
  }
  }

  
`