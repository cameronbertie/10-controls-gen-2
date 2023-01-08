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
        driverName="STRA"
        driverFlag="rs"
        team="mclaren"
        driverPoints="59"
        status="promotion"
      />
      <F1DriverStanding
        driverPosition="2"
        driverName="MAX HOUSLEY"
        driverFlag="gb"
        team="haas"
        driverPoints="52"
        status="promotion"
      />
      <F1DriverStanding
        driverPosition="3"
        driverName="ARAB"
        driverFlag="us"
        team="red-bull"
        driverPoints="36"
        status="promotion"
      />
      <F1DriverStanding
        driverPosition="4"
        driverName="SP3XTRE"
        driverFlag="se"
        team="mercedes"
        driverPoints="31"
        status="promotion"
      />
      <F1DriverStanding
        driverPosition="5"
        driverName="JSTN NL"
        driverFlag="nl"
        team="ferrari"
        driverPoints="31"
        status="promotion"
      />
      <F1DriverStanding
        driverPosition="6"
        driverName="VADE"
        driverFlag="se"
        team="alpine"
        driverPoints="29"
      />
      <F1DriverStanding
        driverPosition="7"
        driverName="MAXFAN"
        driverFlag="pl"
        team="red-bull"
        driverPoints="27"
      />
      <F1DriverStanding
        driverPosition="8"
        driverName="KOGODA"
        driverFlag="ie"
        team="williams"
        driverPoints="22"
      />
      <F1DriverStanding
        driverPosition="9"
        driverName="ZEROTIX"
        driverFlag="de"
        team="alpha-tauri"
        driverPoints="17"
      />
      <F1DriverStanding
        driverPosition="10"
        driverName="bartusg5"
        driverFlag="hu"
        team="williams"
        driverPoints="12"
      />
      <F1DriverStanding
        driverPosition="11"
        driverName="ANOLDENEMY"
        driverFlag="hr"
        team="aston-martin"
        driverPoints="10"
      />
      <F1DriverStanding
        driverPosition="12"
        driverName="COUNTMUTTLY"
        driverFlag="dk"
        team="mclaren"
        driverPoints="9"
      />
      <F1DriverStanding
        driverPosition="13"
        driverName="JASPER"
        driverFlag="gb"
        team="haas"
        driverPoints="8"
      />
      <F1DriverStanding
        driverPosition="14"
        driverName="BALD"
        driverFlag="ie"
        team="alfa-romeo"
        driverPoints="6"
      /> 
      <F1DriverStanding
        driverPosition="15"
        driverName="UKLUCASW"
        driverFlag="gb"
        team="mercedes"
        driverPoints="2"
      />
      <F1DriverStanding
        driverPosition="16"
        driverName="SOVIETKING"
        driverFlag="au"
        team="alfa-romeo"
        driverPoints="2"
        status="demotion"
      />
      <F1DriverStanding
        driverPosition="17"
        driverName="Manuel"
        driverFlag="it"
        team="alpha-tauri"
        driverPoints="1"
        status="demotion"
      />
      <F1DriverStanding
        driverPosition="18"
        driverName="LUKAS HENDRYCH"
        driverFlag="cz"
        team="ferrari"
        driverPoints="0"
        status="demotion"
      />
      <F1DriverStanding
        driverPosition="19"
        driverName="HACKODK"
        driverFlag="dk"
        team="aston-martin"
        driverPoints="0"
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
