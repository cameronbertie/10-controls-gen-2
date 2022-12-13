import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function F1SecondaryNavigation() {

    

  return (
    <F1SecondaryNavigationContainer>
      <F1SecondaryNavigationLinks>
          <F1SecondaryNavigationLink to={"/f1/schedule"}>Schedule</F1SecondaryNavigationLink>
          <F1SecondaryNavigationLink to={"/f1/standings"}>Standings</F1SecondaryNavigationLink>
          <F1SecondaryNavigationLink to={"/f1/teams"}>Teams</F1SecondaryNavigationLink>
          <F1SecondaryNavigationLink to={"/f1/register"}>Register</F1SecondaryNavigationLink>
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

const F1SecondaryNavigationLinks = styled.nav`
  align-items: center;
  -webkit-column-gap: 60px;
  column-gap: 60px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1120px;
  text-align: center;
  margin: 0 auto;

  > a {
    border-bottom: 2px transparent solid;
  }

  > a.active {
    border-bottom: 2px solid;
    transition: none;
  }
`;

const F1SecondaryNavigationLink = styled(NavLink)`
  padding: 8px 0;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  overflow: hidden;
  width: auto;
  font-size: 16px;
`;
