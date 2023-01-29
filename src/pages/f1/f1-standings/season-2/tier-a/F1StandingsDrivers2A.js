import React from "react";
import * as S from "../../../../../styles/styles";
import styled from "styled-components";
import F1DriverStanding from "../../F1DriverStanding";

function F1StandingsDrivers2A() {
  return (
    <>
    <StandingsTable id="standingsTable">
      <tr>
        <th></th>
        <th></th>
        <DriverFlagHeader></DriverFlagHeader>
        <TeamDetailsHeader></TeamDetailsHeader>
        <th>
          <h6>Pts</h6>
        </th>
      </tr>
      <F1DriverStanding
        driverPosition="1"
        driverName="Melon"
        driverFlag="ro"
        team="alpha-tauri"
        driverPoints="120"
      />
      <F1DriverStanding
        driverPosition="2"
        driverName="ALPHAROMEO"
        driverFlag="nl"
        team="ferrari"
        driverPoints="115"
      />
      <F1DriverStanding
        driverPosition="3"
        driverName="FADED"
        driverFlag="us"
        team="alpine"
        driverPoints="64"
      />
      <F1DriverStanding
        driverPosition="4"
        driverName="THOMAS VINK"
        driverFlag="nl"
        team="red-bull"
        driverPoints="61"
      />
      <F1DriverStanding
        driverPosition="5"
        driverName="FOCUSER"
        driverFlag="es"
        team="red-bull"
        driverPoints="55"
      />
      <F1DriverStanding
        driverPosition="6"
        driverName="COUNTERFEIT"
        driverFlag="gb"
        team="mercedes"
        driverPoints="49"
      />
      <F1DriverStanding
        driverPosition="7"
        driverName="LUCADUDE40"
        driverFlag="gb"
        team="mercedes"
        driverPoints="48"
      />
      
      <F1DriverStanding
        driverPosition="8"
        driverName="ANTONIO BRANCHIX"
        driverFlag="it"
        team="ferrari"
        driverPoints="34"
      />
      <F1DriverStanding
        driverPosition="9"
        driverName="KALCESS"
        driverFlag="no"
        team="alpha-tauri"
        driverPoints="33"
      />
      <F1DriverStanding
        driverPosition="10"
        driverName="KUDOS"
        driverFlag="de"
        team="aston-martin"
        driverPoints="26"
      />
      <F1DriverStanding
        driverPosition="11"
        driverName="IM3J3N"
        driverFlag="de"
        team="aston-martin"
        driverPoints="26"
      />
      <F1DriverStanding
        driverPosition="12"
        driverName="Stra"
        driverFlag="rs"
        team="williams"
        driverPoints="21"
      />
      <F1DriverStanding
        driverPosition="13"
        driverName="PHILIP"
        driverFlag="nl"
        team="haas"
        driverPoints="14"
      />
      <F1DriverStanding
        driverPosition="14"
        driverName="BRIM"
        driverFlag="nl"
        team="mclaren"
        driverPoints="12"
      />
      <F1DriverStanding
        driverPosition="15"
        driverName="NIK KEI"
        driverFlag="ua"
        team="alpine"
        driverPoints="11"
      />
      <F1DriverStanding
        driverPosition="16"
        driverName="FLAW"
        driverFlag="nl"
        team="williams"
        driverPoints="10"
        status="demotion"
      />
      <F1DriverStanding
        driverPosition="17"
        driverName="LUC"
        driverFlag="nl"
        team="mclaren"
        driverPoints="5"
        status="demotion"
      />
      <F1DriverStanding
        driverPosition="18"
        driverName="NYDROW"
        driverFlag="be"
        team="alfa-romeo"
        driverPoints="3"
        status="demotion"
      />
      <F1DriverStanding
        driverPosition="19"
        driverName="VEIXEL"
        driverFlag="se"
        team="alfa-romeo"
        driverPoints="0"
        status="demotion"
      />
      <F1DriverStanding
        driverPosition="20"
        driverName="DANIEL BODNAR"
        driverFlag="sk"
        team="haas"
        driverPoints="0"
        status="demotion"
      />
    </StandingsTable>
    </>
  );
}

export default F1StandingsDrivers2A;

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



const TeamDetailsHeader = styled.th`
  @media (max-width: 799px) {
    display: none;
  }
`;

const DriverFlagHeader = styled.th`
  @media (max-width: 799px) {
    display: none;
  }

`;

const StandingTitle = styled.h4`
  margin-top: 30px;
`;
