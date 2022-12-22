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
        driverName="ALPHAROMEO"
        driverFlag="nl"
        team="williams"
        driverPoints="72"
      />
      <F1DriverStanding
        driverPosition="2"
        driverName="THOMAS VINK"
        driverFlag="nl"
        team="red-bull"
        driverPoints="36"
      />
      <F1DriverStanding
        driverPosition="3"
        driverName="FADED"
        driverFlag="us"
        team="alpine"
        driverPoints="36"
      />
      <F1DriverStanding
        driverPosition="4"
        driverName="ANTONIO BRANCHIX"
        driverFlag="it"
        team="ferrari"
        driverPoints="34"
      />
      <F1DriverStanding
        driverPosition="5"
        driverName="ANTONIO CORTES"
        driverFlag="es"
        team="ferrari"
        driverPoints="22"
      />
      <F1DriverStanding
        driverPosition="6"
        driverName="COUNTERFEIT"
        driverFlag="gb"
        team="mercedes"
        driverPoints="21"
      />
      <F1DriverStanding
        driverPosition="7"
        driverName="CHEERS"
        driverFlag="de"
        team="alpha-tauri"
        driverPoints="19"
      />
      <F1DriverStanding
        driverPosition="8"
        driverName="LUCADUDE40"
        driverFlag="gb"
        team="mercedes"
        driverPoints="14"
      />
      <F1DriverStanding
        driverPosition="9"
        driverName="FOCUSER"
        driverFlag="es"
        team="red-bull"
        driverPoints="14"
      />
      <F1DriverStanding
        driverPosition="10"
        driverName="PHILIP"
        driverFlag="nl"
        team="haas"
        driverPoints="12"
      />
      <F1DriverStanding
        driverPosition="11"
        driverName="IM3J3N"
        driverFlag="de"
        team="aston-martin"
        driverPoints="10"
      />
      <F1DriverStanding
        driverPosition="12"
        driverName="KUDOS"
        driverFlag="de"
        team="aston-martin"
        driverPoints="6"
      />
      <F1DriverStanding
        driverPosition="13"
        driverName="FLAW"
        driverFlag="nl"
        team="williams"
        driverPoints="6"
      />
      <F1DriverStanding
        driverPosition="14"
        driverName="KALCESS"
        driverFlag="no"
        team="alpha-tauri"
        driverPoints="6"
      />
      <F1DriverStanding
        driverPosition="15"
        driverName="BRIM"
        driverFlag="nl"
        team="mclaren"
        driverPoints="3"
      />
      <F1DriverStanding
        driverPosition="16"
        driverName="NYDROW"
        driverFlag="be"
        team="alfa-romeo"
        driverPoints="3"
        status="demotion"
      />
      <F1DriverStanding
        driverPosition="17"
        driverName="LUC"
        driverFlag="nl"
        team="mclaren"
        driverPoints="0"
        status="demotion"
      />
      <F1DriverStanding
        driverPosition="18"
        driverName="VEIXEL"
        driverFlag="se"
        team="alfa-romeo"
        driverPoints="0"
        status="demotion"
      />
      <F1DriverStanding
        driverPosition="19"
        driverName="DANIEL BODNAR"
        driverFlag="sk"
        team="haas"
        driverPoints="0"
        status="demotion"
      />
      <F1DriverStanding
        driverPosition="20"
        driverName="NIK KEI"
        driverFlag="ua"
        team="alpine"
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
