import React from "react";
import * as S from "../../../../../styles/styles";
import styled from "styled-components";
import F1DriverStanding from "../../F1DriverStanding";

function F1StandingsDrivers1A() {
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
        driverName="Faded"
        driverFlag="us"
        team="alpine"
        driverPoints="195"
        
      />
      <F1DriverStanding
        driverPosition="2"
        driverName="Nik Kei"
        driverFlag="ua"
        team="alpine"
        driverPoints="176"
      />
      <F1DriverStanding
        driverPosition="3"
        driverName="Thomas Vink"
        driverFlag="nl"
        team="red-bull"
        driverPoints="172"
      />
      <F1DriverStanding
        driverPosition="4"
        driverName="Kalcess"
        driverFlag="no"
        team="williams"
        driverPoints="136"
      />
      <F1DriverStanding
        driverPosition="5"
        driverName="Focuser"
        driverFlag="es"
        team="alfa-romeo"
        driverPoints="119"
      />
      <F1DriverStanding
        driverPosition="6"
        driverName="Luca"
        driverFlag="gb"
        team="aston-martin"
        driverPoints="116"
      />
      <F1DriverStanding
        driverPosition="7"
        driverName="Cortes"
        driverFlag="es"
        team="ferrari"
        driverPoints="100"
      />
      <F1DriverStanding
        driverPosition="8"
        driverName="Newman"
        driverFlag="it"
        team="ferrari"
        driverPoints="91"
      />
      <F1DriverStanding
        driverPosition="9"
        driverName="Flaw"
        driverFlag="nl"
        team="haas"
        driverPoints="77"
      />
      <F1DriverStanding
        driverPosition="10"
        driverName="Counterfeit"
        driverFlag="gb"
        team="aston-martin"
        driverPoints="75"
      />
      <F1DriverStanding
        driverPosition="11"
        driverName="Kudos"
        driverFlag="de"
        team="mclaren"
        driverPoints="67"
      />
      <F1DriverStanding
        driverPosition="12"
        driverName="Im3j3n"
        driverFlag="de"
        team="mclaren"
        driverPoints="53"
      />
      <F1DriverStanding
        driverPosition="13"
        driverName="AnOldEnemy"
        driverFlag="hr"
        team="haas"
        driverPoints="39"
      />
      <F1DriverStanding
        driverPosition="14"
        driverName="CountMuttly"
        driverFlag="dk"
        team="alfa-romeo"
        driverPoints="25"
      />
      <F1DriverStanding
        driverPosition="15"
        driverName="Jaysen"
        driverFlag="nl"
        team="alpha-tauri"
        driverPoints="20"
      />
      <F1DriverStanding
        driverPosition="16"
        driverName="LawrenceSelling"
        driverFlag="ph"
        team="williams"
        driverPoints="4"
        status="demotion"
      />
      <F1DriverStanding
        driverPosition="17"
        driverName="Kyan"
        driverFlag="nl"
        team="alpha-tauri"
        driverPoints="3"
        status="demotion"
      />
      <F1DriverStanding
        driverPosition="18"
        driverName="Hailee"
        driverFlag="nl"
        team="red-bull"
        driverPoints="OUT"
        status="demotion"
      />
      <F1DriverStanding
        driverPosition="19"
        driverName="Mute"
        driverFlag="ng"
        team="mercedes"
        driverPoints="OUT"
        status="demotion"
      />
      <F1DriverStanding
        driverPosition="20"
        driverName="EddyWorth"
        driverFlag="fr"
        team="mercedes"
        driverPoints="OUT"
        status="demotion"
      />
    </StandingsTable>
    </>
  );
}

export default F1StandingsDrivers1A;

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
