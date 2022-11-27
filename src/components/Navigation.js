import React, { useState, useEffect } from "react";
import logo from "../svg/logo.svg";
import youtubeLogo from "../svg/youtube-logo.svg";
import twitchLogo from "../svg/twitch-logo.svg";
import discordLogo from "../svg/discord-logo.svg";
import twitterLogo from "../svg/twitter-logo.svg";
import Menu from "./Menu";
import Hamburger from "hamburger-react";
import { useLocation } from "react-router-dom";
import * as S from "../styles/styles";
import styled, {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../styles/globalStyles";
import { lightTheme, darkTheme } from "../styles/themes";

function Navigation() {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    console.log("Location changed");
    setOpen(false);
  }, [location]);

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
    <GlobalStyles/>
      <NavigationTop>
        <SiteLogoContainer>
          <S.RouterLink to="/">
            <img src={logo} alt="10 Controls Logo" />
          </S.RouterLink>
        </SiteLogoContainer>
        <NavigationLinks>
          <NavigationLink>
            <S.RouterLink to="/rl/tournaments">Rocket League</S.RouterLink>
          </NavigationLink>
          <NavigationLink>
            <S.RouterLink to="/f1">F1 22</S.RouterLink>
          </NavigationLink>
          <NavigationLink>
            <S.RouterLink to="/acc">Assetto Corsa Competizione</S.RouterLink>
          </NavigationLink>
        </NavigationLinks>
        <MenuContainer>
          <HamburgerIcon toggled={isOpen} toggle={setOpen} />
          {isOpen && <Menu />}
        </MenuContainer>
      </NavigationTop>
      <NavigationLeft />
      <NavigationRight>
        <SocialIconsContainer>
        <button onClick={themeToggler}>Switch Theme</button>
          <S.Anchor
            href="https://discord.gg/10controls"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon>
              <img src={discordLogo} alt="Discord Logo" />
            </SocialIcon>
          </S.Anchor>

          <S.Anchor
            href="https://www.twitch.tv/10controlstv"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon>
              <img src={twitchLogo} alt="Twitch Logo" />
            </SocialIcon>
          </S.Anchor>

          <S.Anchor
            href="https://www.youtube.com/channel/UCTC5mPAHhoBq6Uv4eNIshMg"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon>
              <img src={youtubeLogo} alt="YouTube Logo" />
            </SocialIcon>
          </S.Anchor>

          <S.Anchor
            href="https://twitter.com/10Controls"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon>
              <img src={twitterLogo} alt="Twitter Logo" />
            </SocialIcon>
          </S.Anchor>
        </SocialIconsContainer>
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
  color: #c18794;
  background-color: none;
  margin-top: 84px;

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

const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  padding-bottom: 30px;
`;

const SocialIcon = styled.div`
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
