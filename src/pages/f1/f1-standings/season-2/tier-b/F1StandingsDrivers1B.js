import React from "react";
import * as S from "../../../../../styles/styles";
import styled from "styled-components";
import F1DriverStanding from "../../F1DriverStanding";

function F1StandingsDrivers1B() {
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
        driverName="Cheers"
        driverFlag="de"
        team="ferrari"
        driverPoints="263"
      />
      <F1DriverStanding
        driverPosition="2"
        driverName="NYDROW"
        driverFlag="be"
        team="mercedes"
        driverPoints="135"
      />
      <F1DriverStanding
        driverPosition="3"
        driverName="DANIEL BODNAR"
        driverFlag="sk"
        team="alfa-romeo"
        driverPoints="114"
      />
      <F1DriverStanding
        driverPosition="4"
        driverName="VEIXEL"
        driverFlag="se"
        team="ferrari"
        driverPoints="92"
      />
      <F1DriverStanding
        driverPosition="5"
        driverName="LUC"
        driverFlag="nl"
        team="haas"
        driverPoints="89"
      />
      <F1DriverStanding
        driverPosition="6"
        driverName="ALPHAROMEO"
        driverFlag="nl"
        team="williams"
        driverPoints="87"
      />
      <F1DriverStanding
        driverPosition="7"
        driverName="PHILIP"
        driverFlag="nl"
        team="alfa-romeo"
        driverPoints="84"
      />
      <F1DriverStanding
        driverPosition="8"
        driverName="BRIM"
        driverFlag="nl"
        team="mclaren"
        driverPoints="84"
      />
      <F1DriverStanding
        driverPosition="9"
        driverName="ARAB"
        driverFlag="us"
        team="red-bull"
        driverPoints="76"
      />
      <F1DriverStanding
        driverPosition="10"
        driverName="UKLUCASW"
        driverFlag="gb"
        team="williams"
        driverPoints="60"
      />
      <F1DriverStanding
        driverPosition="11"
        driverName="MAXFAN"
        driverFlag="pl"
        team="red-bull"
        driverPoints="56"
      />
      <F1DriverStanding
        driverPosition="12"
        driverName="SP3XTRE"
        driverFlag="se"
        team="mclaren"
        driverPoints="45"
      />
      <F1DriverStanding
        driverPosition="13"
        driverName="MELON"
        driverFlag="ro"
        team="haas"
        driverPoints="44"
      />
      <F1DriverStanding
        driverPosition="14"
        driverName="ZEROTIX"
        driverFlag="de"
        team="mercedes"
        driverPoints="42"
      />
      <F1DriverStanding
        driverPosition="15"
        driverName="BR0WN"
        driverFlag="de"
        team="alpha-tauri"
        driverPoints="37"
      />
      <F1DriverStanding
        driverPosition="16"
        driverName="ARBITERELITEX"
        driverFlag="it"
        team="aston-martin"
        driverPoints="33"
      />
      <F1DriverStanding
        driverPosition="17"
        driverName="RINKY"
        driverFlag="nl"
        team="alpha-tauri"
        driverPoints="22"
      />
      <F1DriverStanding
        driverPosition="18"
        driverName="VADE"
        driverFlag="se"
        team="alpine"
        driverPoints="14"
      />
      <F1DriverStanding
        driverPosition="19"
        driverName="ANDREW"
        driverFlag="ro"
        team="alpine"
        driverPoints="8"
      />
      <F1DriverStanding
        driverPosition="20"
        driverName="EZCAKEARDA"
        driverFlag="be"
        team="aston-martin"
        driverPoints="2"
      />
    </StandingsTable>
    </>
  );
}

export default F1StandingsDrivers1B;

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
