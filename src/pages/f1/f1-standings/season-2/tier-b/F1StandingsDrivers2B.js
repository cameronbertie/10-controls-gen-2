import React from "react";
import * as S from "../../../../../styles/styles";
import styled from "styled-components";
import F1DriverStanding from "../../F1DriverStanding";

function F1StandingsDrivers2B() {
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
        driverName="ARAB"
        driverFlag="us"
        team="red-bull"
        driverPoints="95"
        status="promotion"
      />
      <F1DriverStanding
        driverPosition="2"
        driverName="SP3XTRE"
        driverFlag="se"
        team="mercedes"
        driverPoints="64"
        status="promotion"
      />
      <F1DriverStanding
        driverPosition="3"
        driverName="JSTN NL"
        driverFlag="nl"
        team="ferrari"
        driverPoints="55"
        status="promotion"
      />
      <F1DriverStanding
        driverPosition="4"
        driverName="MAX HOUSLEY"
        driverFlag="gb"
        team="haas"
        driverPoints="52"
        status="promotion"
      />
      <F1DriverStanding
        driverPosition="5"
        driverName="VADE"
        driverFlag="se"
        team="alpine"
        driverPoints="49"
        status="promotion"
      />
      
      
      <F1DriverStanding
        driverPosition="6"
        driverName="MAXFAN"
        driverFlag="pl"
        team="red-bull"
        driverPoints="45"
      />
      
      <F1DriverStanding
        driverPosition="7"
        driverName="ZEROTIX"
        driverFlag="de"
        team="alpha-tauri"
        driverPoints="29"
      />
      <F1DriverStanding
        driverPosition="8"
        driverName="bartusg5"
        driverFlag="hu"
        team="williams"
        driverPoints="20"
      />
      <F1DriverStanding
        driverPosition="9"
        driverName="COUNTMUTTLY"
        driverFlag="dk"
        team="mclaren"
        driverPoints="17"
      />
      <F1DriverStanding
        driverPosition="10"
        driverName="HACKODK"
        driverFlag="dk"
        team="aston-martin"
        driverPoints="12"
      />
      <F1DriverStanding
        driverPosition="11"
        driverName="ANOLDENEMY"
        driverFlag="hr"
        team="aston-martin"
        driverPoints="8"
      />
      <F1DriverStanding
        driverPosition="12"
        driverName="Rocky"
        driverFlag="de"
        team="alpha-tauri"
        driverPoints="8"
      />
      <F1DriverStanding
        driverPosition="13"
        driverName="SOVIETKING"
        driverFlag="au"
        team="alfa-romeo"
        driverPoints="8"
      />
      <F1DriverStanding
        driverPosition="14"
        driverName="JASPER"
        driverFlag="gb"
        team="haas"
        driverPoints="8"
      />
      <F1DriverStanding
        driverPosition="15"
        driverName="LUKAS HENDRYCH"
        driverFlag="cz"
        team="ferrari"
        driverPoints="7"
      />
      <F1DriverStanding
        driverPosition="16"
        driverName="BALD"
        driverFlag="ie"
        team="alfa-romeo"
        driverPoints="6"
        status="demotion"
      />
      <F1DriverStanding
        driverPosition="17"
        driverName="UKLUCASW"
        driverFlag="gb"
        team="mercedes"
        driverPoints="6"
        status="demotion"
      />
      <F1DriverStanding
        driverPosition="18"
        driverName="EYMEN AKIN"
        driverFlag="tr"
        team="mclaren"
        driverPoints="3"
        status="demotion"
      />
      <F1DriverStanding
        driverPosition="19"
        driverName="Hidlex"
        driverFlag="nl"
        team="williams"
        driverPoints="2"
        status="demotion"
      />
      <F1DriverStanding
        driverPosition="20"
        driverName="Kjaerbo"
        driverFlag="dk"
        team="alpine"
        driverPoints="0"
        status="demotion"
      />
    </StandingsTable>
    </>
  );
}

export default F1StandingsDrivers2B;

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
