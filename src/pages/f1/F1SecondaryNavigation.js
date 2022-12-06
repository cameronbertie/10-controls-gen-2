import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function F1SecondaryNavigation() {

    

  return (
    <F1SecondaryNavigationContainer>
      <F1SecondaryNavigationLinks>
            <h5>
              <Link to={"/f1/schedule"}>Schedule</Link>
            </h5>
            <h5>
            <Link to={"/f1/standings"}>Standings</Link>
          </h5>
          <h5>
          <Link to={"/f1/teams"}>Teams</Link>
        </h5>
        <h5>
          <Link to={"/f1/register"}>Register</Link>
        </h5>
      </F1SecondaryNavigationLinks>
    </F1SecondaryNavigationContainer>
  );
}

export default F1SecondaryNavigation;

const F1SecondaryNavigationContainer = styled.div`
  align-items: center;
  border-bottom: 1px solid #492833;
  display: flex;
  height: 84px;
  justify-content: center;

  @media (max-width: 1023px) {
    display: none;
  }
`;

const F1SecondaryNavigationLinks = styled.div`
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
