import React from "react";
import * as S from "../../../../../styles/styles";
import styled from "styled-components";
import F1ConstructorStanding from "../../F1ConstructorStanding";

function F1Standingsconstructors1B() {
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
        team="ferrari"
        constructorPoints="338"
      />
      <F1ConstructorStanding
        constructorPosition="2"
        team="alfa-romeo"
        constructorPoints="283"
      />
      <F1ConstructorStanding
        constructorPosition="3"
        team="mercedes"
        constructorPoints="177"
      />
      <F1ConstructorStanding
        constructorPosition="4"
        team="haas"
        constructorPoints="167"
      />
      <F1ConstructorStanding
        constructorPosition="5"
        team="red-bull"
        constructorPoints="146"
      />
      <F1ConstructorStanding
        constructorPosition="6"
        team="williams"
        constructorPoints="145"
      />
      <F1ConstructorStanding
        constructorPosition="7"
        team="mclaren"
        constructorPoints="144"
      />
      <F1ConstructorStanding
        constructorPosition="8"
        team="alpha-tauri"
        constructorPoints="132"
      />
      <F1ConstructorStanding
        constructorPosition="9"
        team="aston-martin"
        constructorPoints="59"
      />
      <F1ConstructorStanding
        constructorPosition="10"
        team="alpine"
        constructorPoints="44"
      />
    </StandingsTable>
    </>
  );
}

export default F1Standingsconstructors1B;

const StandingsTable = styled.table`
  width: 100%;
  border-spacing: 0;

  th,
  td {
    padding: 18px 20px 14px;
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