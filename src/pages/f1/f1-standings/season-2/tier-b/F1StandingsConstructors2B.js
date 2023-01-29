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
        constructorPoints="126"
      />
      <F1ConstructorStanding
        constructorPosition="2"
        team="mercedes"
        constructorPoints="103"
      />
      <F1ConstructorStanding
        constructorPosition="3"
        team="alpine"
        constructorPoints="102"
      />
      <F1ConstructorStanding
        constructorPosition="4"
        team="ferrari"
        constructorPoints="87"
      />
      <F1ConstructorStanding
        constructorPosition="5"
        team="aston-martin"
        constructorPoints="82"
      />
      <F1ConstructorStanding
        constructorPosition="6"
        team="red-bull"
        constructorPoints="79"
      />
      <F1ConstructorStanding
        constructorPosition="7"
        team="williams"
        constructorPoints="61"
      />
      <F1ConstructorStanding
        constructorPosition="8"
        team="haas"
        constructorPoints="59"
      />
      <F1ConstructorStanding
        constructorPosition="9"
        team="alpha-tauri"
        constructorPoints="51"
      />
      <F1ConstructorStanding
        constructorPosition="10"
        team="alfa-romeo"
        constructorPoints="26"
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