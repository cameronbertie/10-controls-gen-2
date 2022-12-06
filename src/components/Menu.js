import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <MenuContainer>
      <MenuOuterContainer id="menu__OuterContainer">
        <MenuInnerContainer>
          
          <CategoryContent>
            <h2>
              <Link to="/f1">
                f1 22
              </Link>
            </h2>
            <hr id="menu__hr" />
            <CategoryList>
              <h3>
                <Link to="/f1/schedule">
                  Schedule
                </Link>
              </h3>
            </CategoryList>
            <CategoryList>
              <h3>
                <Link to="/f1/standings">
                  Standings
                </Link>
              </h3>
            </CategoryList>
            <CategoryList>
              <h3>
                <Link to="/f1/teams">
                  Teams
                </Link>
              </h3>
            </CategoryList>
            <CategoryList>
              <h3>
                <Link to="/f1/register">
                  Register
                </Link>
              </h3>
            </CategoryList>
          </CategoryContent>
          <CategoryContent>
            <h2>
              <Link to="/acc" >
                Assetto Corsa Competizione
              </Link>
            </h2>
            <hr id="menu__hr" />
            {/* <CategoryList>
              <h3>
                <Link to="/acc/drivers" >
                  Drivers
                </Link>
              </h3>
            </CategoryList>
            <CategoryList>
              <h3>
                <Link to="acc/register">
                  Register
                </Link>
              </h3>
            </CategoryList> */}
          </CategoryContent>
          <CategoryContent>
            <h2>
              <Link to="/rl">Rocket League</Link>
            </h2>
            <hr id="menu__hr" />
            <CategoryList>
                <h3>
                <a
                  href="https://rlcsle.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="category-item"
                >
                  Wordle For Rocket League
                </a>
                </h3>
            </CategoryList>
          </CategoryContent>
        </MenuInnerContainer>
      </MenuOuterContainer>
    </MenuContainer>
  );
}

export default Menu;

const MenuContainer = styled.div`
  z-index: -9;
  position: absolute;
  top: 84px;
  left: 0px;
  width: 100%;

  @media (max-width: 799px) {
    top: 67px;
    }
`;
const MenuOuterContainer = styled.div`
  height: 100vh;
  backdrop-filter: blur(30px);
  overflow-y: auto;
`;

const MenuInnerContainer = styled.div`
  margin: 0 84px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 60px 8%;
  grid-row-gap: 48px;

  @media (max-width: 1023px) {
    margin: 0;
    }
`;

const CategoryContent = styled.nav`
  width: 50%;
  padding: 0 16px;
  box-sizing: border-box;

  @media (max-width: 799px) {
    width: 100%;
        padding: 0;
    }

  > h2 {
    margin-bottom: 16px;

    @media (max-width: 1023px) {
      font-size: 32px !important;
    }

    @media (max-width: 799px) {
      font-size: 24px !important;
    }
  }

  > hr {
    width: 32px;
    border-color: #c18794;
    background-color: #c18794;
    margin: 0;
  }
`;

const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 16px 0;

  > h3 {

    @media (max-width: 1023px) {
      font-size: 24px !important;
    }

    @media (max-width: 799px) {
      font-size: 18.72px !important;
    }
  }
`;
