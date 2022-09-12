import styled from "styled-components";

export const HeaderStyles = styled.header`

  position: fixed;
  top: 0;
  left:0;
  .header {
    position: fixed;
  }
  .navbar,
  .nav-container {
    background-color: ${(props)=>props.Colors.backgroundColor};
  }
  .container {
    width: 100%;
    margin: auto;
  }

  .navbar {
    width: 100%;
    box-shadow: 0 1px 4px rgb(146 161 176 / 15%);
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 55px;
  }

  .navbar .nav-container li {
    list-style: none;
  }

  .navbar .nav-container a {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .container {
      max-width: 1050px;
      width: 90%;
      margin: auto;
    }

    .navbar {
      width: 100%;
      box-shadow: 0 1px 4px rgb(146 161 176 / 15%);
    }

    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 62px;
    }

    .navbar .nav-container li {
      list-style: none;
    }

    .navbar .nav-container a {
      text-decoration: none;
      color: #0e2431;
      font-weight: 500;
      font-size: 1.2rem;
      padding: 0.7rem;
    }

    .navbar .nav-container a:hover {
      font-weight: bolder;
    }

    .nav-container {
      display: block;
      position: relative;
      height: 60px;
    }

    .nav-container .checkbox {
      position: absolute;
      display: block;
      height: 32px;
      width: 32px;
      top: 20px;
      left: 20px;
      z-index: 5;
      opacity: 0;
      cursor: pointer;
    }

    .nav-container .hamburger-lines {
      display: block;
      height: 26px;
      width: 32px;
      position: absolute;
      top: 17px;
      left: 20px;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .nav-container .hamburger-lines .line {
      display: block;
      height: 4px;
      width: 100%;
      border-radius: 10px;
      background: #0e2431;
    }

    .nav-container .hamburger-lines .line1 {
      transform-origin: 0% 0%;
      transition: transform 0.4s ease-in-out;
    }

    .nav-container .hamburger-lines .line2 {
      transition: transform 0.2s ease-in-out;
    }

    .nav-container .hamburger-lines .line3 {
      transform-origin: 0% 100%;
      transition: transform 0.4s ease-in-out;
    }

    .navbar .menu-items li {
      margin-bottom: 1.2rem;
      font-size: 1.5rem;
      font-weight: 500;
    }

    .logo {
      position: absolute;
      top: 5px;
      right: 15px;
      font-size: 1.2rem;
      color: #0e2431;
    }

    text-decoration: none;
    color: #0e2431;
    font-weight: 500;
    font-size: 1.2rem;
    padding: 0.7rem;
  }

  .navbar .nav-container a:hover {
    font-weight: bolder;
  }

  .nav-container {
    display: block;
    position: relative;
    height: 54px;
  }

  .nav-container .checkbox {
    position: absolute;
    display: block;
    height: 45px;
    width: 45px;
    top: 5px;
    left: 10px;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }

  .nav-container .hamburger-lines {
    display: block;
    height: 18px;
    width: 24px;
    position: absolute;
    top: 17px;
    left: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .nav-container .hamburger-lines .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: #0e2431;
  }

  .nav-container .hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
  }

  .nav-container .hamburger-lines .line2 {
    transition: transform 0.2s ease-in-out;
  }

  .nav-container .hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
  }

  .navbar .menu-items {
    padding-top: 100px;
    background-color: ${(props)=>props.Colors.backgroundColor};
    height: 100vh;
    width: 100vw;
    transform: translate(-120%);
    display: flex;
    flex-direction: column;
    transition: transform 0.5s ease-in-out;
    text-align: center;
  }

  .navbar .menu-items li {
    margin-bottom: 1.2rem;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .logo {
    position: absolute;
    top: -3px;
    right: 15px;
    font-size: 1rem;
    #logo {
      font-family: "Rock Salt", cursive;
    }

    color: #0e2431;
  }

  .nav-container input[type="checkbox"]:checked ~ .menu-items {
    transform: translateX(0);
    z-index: 10000;
  }

  .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
    transform: rotate(45deg);
  }

  .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
    transform: scaleY(0);
  }

  .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
    transform: rotate(-45deg);
  }

  @media (min-width: 700px) {
    .menu-items li {
      text-align: right;
      padding-right: 3rem;
    }
    .nav-container input[type="checkbox"]:checked ~ .menu-items {
      transform: translateX(-70vw);
    }
  }

  @media (min-width: 900px) {
    .nav-container input[type="checkbox"]:checked ~ .menu-items {
      transform: translateX(-80vw);
    }
  }
`;
