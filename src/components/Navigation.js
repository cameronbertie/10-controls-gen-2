import React, { useState, useEffect } from "react";
import logo from "../svg/logo.svg";
import Menu from "./Menu";
import Hamburger from "hamburger-react";
import { useLocation } from "react-router-dom";
import * as S from "../styles/styles";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/globalStyles";
import { lightTheme, darkTheme } from "../styles/themes";
import { Link } from "react-router-dom";

function Navigation() {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    console.log("Location changed");
    setOpen(false);
  }, [location]);

  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <NavigationTop id="navigation__top">
          <SiteLogoContainer>
            <Link to="/">
              <img src={logo} alt="10 Controls Logo" />
            </Link>
          </SiteLogoContainer>
          <NavigationLinks>
            <NavigationLink>
              <Link to="/rl/tournaments">Rocket League</Link>
            </NavigationLink>
            <NavigationLink>
              <Link to="/f1">F1 22</Link>
            </NavigationLink>
            <NavigationLink>
              <Link to="/acc">Assetto Corsa Competizione</Link>
            </NavigationLink>
            <button onClick={themeToggler}>Switch Theme</button>
          </NavigationLinks>
          <MenuContainer>
            <HamburgerIcon toggled={isOpen} toggle={setOpen} />
            {isOpen && <Menu />}
          </MenuContainer>
        </NavigationTop>
        <NavigationLeft />
        <NavigationRight>
        
          <NavigationIconsContainer>
            

            <NavigationIcon
              href="https://discord.gg/10controls"
              target="_blank"
              rel="noreferrer"
              label="Join our Discord server"
            >
              <svg
                width="32"
                height="auto"
                viewBox="0 0 16 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.77758 0H13.3969C14.3767 0 15.1744 0.8004 15.1744 1.7922V17.4L13.3101 15.747L12.2609 14.7726L11.151 13.7373L11.6106 15.3468H1.77758C0.797741 15.3468 0 14.5464 0 13.5546V1.7922C0 0.8004 0.797741 0 1.77758 0ZM9.47752 10.6575C9.73765 10.9881 10.0498 11.3622 10.0498 11.3622C11.9661 11.3013 12.7032 10.0398 12.7032 10.0398C12.7032 7.2384 11.4545 4.9677 11.4545 4.9677C10.2059 4.0281 9.01795 4.0542 9.01795 4.0542L8.89655 4.1934C10.3706 4.6458 11.0557 5.2983 11.0557 5.2983C10.1539 4.8024 9.26941 4.5588 8.44565 4.4631C7.82133 4.3935 7.22303 4.4109 6.69409 4.4805C6.64867 4.4805 6.60986 4.48713 6.56612 4.49461C6.55976 4.49569 6.55329 4.4968 6.54668 4.4979C6.24319 4.524 5.50615 4.6371 4.57834 5.046C4.25751 5.1939 4.06675 5.2983 4.06675 5.2983C4.06675 5.2983 4.78645 4.611 6.34725 4.1586L6.26054 4.0542C6.26054 4.0542 5.0726 4.0281 3.82396 4.9677C3.82396 4.9677 2.57532 7.2384 2.57532 10.0398C2.57532 10.0398 3.30369 11.3013 5.22 11.3622C5.22 11.3622 5.54084 10.9707 5.80097 10.6401C4.69974 10.3095 4.28352 9.61351 4.28352 9.61351C4.28352 9.61351 4.37024 9.67441 4.52632 9.76141C4.53499 9.77011 4.54366 9.77881 4.561 9.78751C4.57401 9.79621 4.58701 9.80273 4.60002 9.80926C4.61303 9.81578 4.62603 9.82231 4.63904 9.83101C4.85582 9.95281 5.0726 10.0485 5.27203 10.1268C5.62755 10.266 6.05243 10.4052 6.54668 10.5009C7.19702 10.6227 7.96007 10.6662 8.7925 10.5096C9.20004 10.44 9.61625 10.3182 10.0498 10.1355C10.3533 10.0224 10.6915 9.85711 11.047 9.62221C11.047 9.62221 10.6134 10.3356 9.47752 10.6575ZM5.13306 8.2649C5.13306 7.73419 5.52326 7.29919 6.01751 7.29919C6.51176 7.29919 6.91063 7.73419 6.90196 8.2649C6.90196 8.7956 6.51176 9.2306 6.01751 9.2306C5.53193 9.2306 5.13306 8.7956 5.13306 8.2649ZM8.29801 8.2649C8.29801 7.73419 8.68821 7.29919 9.18246 7.29919C9.67671 7.29919 10.0669 7.73419 10.0669 8.2649C10.0669 8.7956 9.67671 9.2306 9.18246 9.2306C8.69688 9.2306 8.29801 8.7956 8.29801 8.2649Z"
                ></path>
              </svg>
            </NavigationIcon>

            <NavigationIcon
              href="https://www.twitch.tv/10controlstv"
              target="_blank"
              rel="noreferrer"
              label="Follow us on Twitch"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="auto"
                viewBox="0 0 24 24"
              >
                <path
                  d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                />
              </svg>
            </NavigationIcon>

            <NavigationIcon
              href="https://www.youtube.com/channel/UCTC5mPAHhoBq6Uv4eNIshMg"
              target="_blank"
              rel="noreferrer"
              label="Subscribe to our YouTube Channel"
            >
              <svg
                width="32"
                height="auto"
                viewBox="0 0 20 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.0901 2.1121C18.8685 1.28468 18.2037 0.631452 17.3616 0.402823C15.8437 0 9.75 0 9.75 0C9.75 0 3.65625 0 2.12727 0.402823C1.28523 0.620565 0.631534 1.27379 0.398864 2.1121C0 3.61452 0 6.75 0 6.75C0 6.75 0 9.88548 0.409943 11.3879C0.631534 12.2153 1.29631 12.8685 2.13835 13.0972C3.65625 13.5 9.75 13.5 9.75 13.5C9.75 13.5 15.8437 13.5 17.3727 13.0972C18.2148 12.8794 18.8685 12.2262 19.1011 11.3879C19.5 9.88548 19.5 6.75 19.5 6.75C19.5 6.75 19.5 3.61452 19.0901 2.1121ZM7.75568 9.60242V3.89758L12.8523 6.75L7.75568 9.60242Z"></path>
              </svg>
            </NavigationIcon>

            <NavigationIcon
              href="/"
              target="_blank"
              rel="noreferrer"
              label="Join our Minecraft server"
            >
             <img src="/minecraft-logo.png" alt="Minecraft Logo" />
            </NavigationIcon>
          </NavigationIconsContainer>
        </NavigationRight>
      </>
    </ThemeProvider>
  );
}

export default Navigation;

const NavigationTop = styled.nav`
  height: 83px;
  border-bottom: 1px solid #492833;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 14px;
  background-color: none;

  @media (max-width: 799px) {
    height: 66px;
  }
`;

const SiteLogoContainer = styled.div`
  width: 83px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #492833;

  img {
    width: 46px;
    height: auto;
    cursor: pointer;
  }
`;

const NavigationLinks = styled.div`
  display: flex;
  column-gap: 60px;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 799px) {
    display: none;
  }
`;

const NavigationLink = styled.div`
  padding: 8px 0;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  overflow: hidden;
  width: auto;
`;

const MenuContainer = styled.div`
  width: 83px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #492833;
`;

const HamburgerIcon = styled(Hamburger)`
  color: white;
`;

const NavigationLeft = styled.nav`
  width: 83px;
  z-index: -1;
  height: 100vh;
  border-right: 1px solid #492833;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  left: 0;
  top: 84px;
  flex-direction: row;

  @media (max-width: 1023px) {
    display: none;
  }
`;

const NavigationRight = styled.nav`
  width: 83px;
  z-index: -1;
  height: 100vh;
  border-left: 1px solid #492833;
  position: absolute;
  right: 0;
  top: 84px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 1023px) {
    display: none;
  }
`;

const NavigationIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin-bottom: 114px;
`;

const NavigationIcon = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: auto;
  width: 100%;

  > img {
    height: auto;
    width: 32px;
  }
`;
