import React from "react";
import styled from "styled-components";
import * as S from "../styles/styles";
import { Link } from "react-router-dom";

function SecondaryNavigation({ pages, links }) {

    

  return (
    <SecondaryNavigationContainer>
      <SecondaryNavigationLinks>
        {pages.map((pageTitle, index) => {
          const pageLink = links[index];
          return (
            <h5>
              <Link to={pageLink} key={pageTitle}>{pageTitle}</Link>
            </h5>
          );
        })}
      </SecondaryNavigationLinks>
    </SecondaryNavigationContainer>
  );
}

export default SecondaryNavigation;

const SecondaryNavigationContainer = styled.div`
  align-items: center;
  border-top: 1px solid #492833;
  border-bottom: 1px solid #492833;
  display: flex;
  height: 84px;
  justify-content: center;

  @media (max-width: 1023px) {
    display: none;
  }
`;

const SecondaryNavigationLinks = styled.div`
  align-items: center;
  -webkit-column-gap: 60px;
  column-gap: 60px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1120px;
  text-align: center;
  margin: 0 auto;
`;
