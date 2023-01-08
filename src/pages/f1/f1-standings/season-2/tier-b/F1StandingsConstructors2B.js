import React from "react";
import * as S from "../../../../../styles/styles";
import styled from "styled-components";
import F1ConstructorStanding from "../../F1ConstructorStanding";

function F1StandingsConstructors2B() {
  return (
    <>
    <StandingsTable id="standingsTable">
      <tr>
        <th></th>
        <th></th>
        <th>
          <h6>Pts</h6>
        </th>
      </tr>
      <F1ConstructorStanding
        constructorPosition="1"
        team="mclaren"
        constructorPoints="80"
      />
      <F1ConstructorStanding
        constructorPosition="2"
        team="aston-martin"
        constructorPoints="66"
      />
      <F1ConstructorStanding
        constructorPosition="3"
        team="red-bull"
        constructorPoints="63"
      />
      <F1ConstructorStanding
        constructorPosition="4"
        team="haas"
        constructorPoints="60"
      />
      <F1ConstructorStanding
        constructorPosition="5"
        team="alpine"
        constructorPoints="41"
      />
      <F1ConstructorStanding
        constructorPosition="6"
        team="williams"
        constructorPoints="40"
      />
      <F1ConstructorStanding
        constructorPosition="7"
        team="mercedes"
        constructorPoints="33"
      />
      <F1ConstructorStanding
        constructorPosition="8"
        team="ferrari"
        constructorPoints="21"
      />
      <F1ConstructorStanding
        constructorPosition="9"
        team="alpha-tauri"
        constructorPoints="18"
      />
      <F1ConstructorStanding
        constructorPosition="10"
        team="alfa-romeo"
        constructorPoints="12"
      />
    </StandingsTable>
    </>
  );
}

export default F1StandingsConstructors2B;

const StandingsTable = styled.table`
  width: 100%;
  border-spacing: 0;

  th,
  td {
    padding: 14px 20px;
    text-align: left;
    border-bottom: 1px solid;
    border-color: inherit;

    @media only screen and (max-width: 799px) {
      padding: 9px 10px 7px;
    }
  }

  th {
    text-align: right;
  }
`;

const StandingTitle = styled.h4`
  margin-top: 30px;
`;