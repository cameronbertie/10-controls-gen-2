import React from "react";
import * as S from "../../../../../styles/styles";
import styled from "styled-components";
import F1ConstructorStanding from "../../F1ConstructorStanding";

function F1StandingsConstructors1A() {
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
        team="alpine"
        constructorPoints="371"
      />
      <F1ConstructorStanding
        constructorPosition="2"
        team="red-bull"
        constructorPoints="194"
      />
      <F1ConstructorStanding
        constructorPosition="3"
        team="ferrari"
        constructorPoints="191"
      />
      <F1ConstructorStanding
        constructorPosition="4"
        team="aston-martin"
        constructorPoints="191"
      />
      <F1ConstructorStanding
        constructorPosition="5"
        team="alfa-romeo"
        constructorPoints="149"
      />
      <F1ConstructorStanding
        constructorPosition="6"
        team="williams"
        constructorPoints="140"
      />
      <F1ConstructorStanding
        constructorPosition="7"
        team="haas"
        constructorPoints="126"
      />
      <F1ConstructorStanding
        constructorPosition="8"
        team="mclaren"
        constructorPoints="120"
      />
      <F1ConstructorStanding
        constructorPosition="9"
        team="mercedes"
        constructorPoints="50"
      />
      <F1ConstructorStanding
        constructorPosition="10"
        team="alpha-tauri"
        constructorPoints="47"
      />
    </StandingsTable>
    </>
  );
}

export default F1StandingsConstructors1A;

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