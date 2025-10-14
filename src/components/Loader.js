import React from 'react';
import styled from 'styled-components';
// import logo from '../assets/mypic.png'; // ✅ make sure the image is inside /src/assets

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="box">
          <div className="logo">
            {/* Option 1: Text */}
            <h2>GH</h2>

            {/* Option 2: Image */}
            {/* <img src={logo} alt="Logo" /> */}
          </div>
        </div>
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;       
  inset: 0;              
  display: flex;         
  justify-content: center;
  align-items: center;
  background: #000;      
  z-index: 9999;         

  .loader {
    --size: 250px;
    --duration: 2s;
    --logo-color: rgb(18, 160, 72);
    --background: linear-gradient(
      0deg,
      rgba(0, 189, 63, 0.2) 0%,
      rgba(255, 0, 0, 0.2) 100%
    );
    height: var(--size);
    aspect-ratio: 1;
    position: relative;
  }

  .loader .box {
    position: absolute;
    background: var(--background);
    border-radius: 50%;
    border-top: 1px solid rgb(167, 154, 36);
    animation: ripple var(--duration) infinite ease-in-out;
  }

  .loader .box:nth-child(1) {
    inset: 40%;
    z-index: 99;
  }
  .loader .box:nth-child(2) {
    inset: 30%;
    animation-delay: 0.2s;
  }
  .loader .box:nth-child(3) {
    inset: 20%;
    animation-delay: 0.4s;
  }
  .loader .box:nth-child(4) {
    inset: 10%;
    animation-delay: 0.6s;
  }
  .loader .box:nth-child(5) {
    inset: 0%;
    animation-delay: 0.8s;
  }

  .loader .logo {
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;
    padding: 30%;
  }

  .loader .logo img {
    width: 80px;   /* adjust image size */
    height: 80px;
    border-radius: 50%; /* optional: make it circular */
  }

  @keyframes ripple {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default Loader;
