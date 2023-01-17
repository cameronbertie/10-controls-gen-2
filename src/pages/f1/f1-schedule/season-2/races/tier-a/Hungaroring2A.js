import React from "react";
import * as S from "../../../../../../styles/styles";
import styled from "styled-components";
import PageHero2 from "../../../../../../components/PageHero2";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import Footer from "../../../../../../components/Footer";
import F1RaceResult from "../../../F1RaceResult";
import F1SecondaryNavigation from "../../../../F1SecondaryNavigation";

function Hungaroring2A() {
  return (
    <>
      <F1SecondaryNavigation
      />
      <S.Section>
      
        <CalendarArrowContainer>
          <Link to={`/f1/schedule/season-2/tier-a/suzuka`}>
            <ArrowPrevious />
          </Link>
          {/* <Link to={`/f1/schedule/season-2/tier-a/suzuka`}>
            <ArrowNext />
          </Link> */}
        </CalendarArrowContainer>
        <h6>Season 2 - Tier A - Round 5</h6>
        <br></br>
        <h2>Hungaroring</h2>
        <h5>Results</h5>
        <br></br>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=ccWjV6nppiY&ab_channel=10Controls"><button>View Race Highlights</button></a>
        <ResultsTable id="resultsTable">
          <tr>
            <th></th>
            <th></th>
            <DriverFlagHeader></DriverFlagHeader>
            <TeamDetailsHeader></TeamDetailsHeader>
            <th>
              <h6>Time</h6>
            </th>
            <th>
              <h6>Pts</h6>
            </th>
          </tr>
          <F1RaceResult
            driverPosition="1"
            driverName="Melon"
            driverFlag="ro"
            team="alpha-tauri"
            driverTime="51:22.035"
            driverPoints="+25"
          />
          <F1RaceResult
            driverPosition="2"
            driverName="THOMAS VINK"
            driverFlag="nl"
            team="red-bull"
            driverTime="+4.923"
            driverPoints="+18"
          />
          <F1RaceResult
            driverPosition="3"
            driverName="Focuser"
            driverFlag="es"
            team="red-bull"
            driverTime="+4.938"
            driverPoints="+15"
          />
          <F1RaceResult
            driverPosition="4"
            driverName="COUNTERFEIT"
            driverFlag="gb"
            team="mercedes"
            driverTime="+11.056"
            driverPoints="+12"
          />
          <F1RaceResult
            driverPosition="5"
            driverName="ALPHAROMEO"
            driverFlag="nl"
            team="williams"
            driverTime="+12.329"
            driverPoints="+10"
          />
          <F1RaceResult
            driverPosition="6"
            driverName="Jasper"
            driverFlag="gb"
            team="haas"
            driverTime="+22.640"
            driverPoints="+8"
          />
          <F1RaceResult
            driverPosition="7"
            driverName="LUCADUDE40"
            driverFlag="gb"
            team="mercedes"
            driverTime="+23.275"
            driverPoints="+6"
          />
          <F1RaceResult
            driverPosition="8"
            driverName="Flaw"
            driverFlag="nl"
            team="williams"
            driverTime="+27.097"
            driverPoints="+4"
          />
          <F1RaceResult
            driverPosition="9"
            driverName="KUDOS"
            driverFlag="de"
            team="aston-martin"
            driverTime="+27.425"
            driverPoints="+2"
          />
          <F1RaceResult
            driverPosition="10"
            driverName="LUC"
            driverFlag="nl"
            team="mclaren"
            driverTime="+32.281"
            driverPoints="+1"
          />
          <F1RaceResult
            driverPosition="11"
            driverName="BRIM"
            driverFlag="nl"
            team="mclaren"
            driverTime="+34.713"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="12"
            driverName="Nik Kei"
            driverFlag="us"
            team="alpine"
            driverTime="+39.327"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="13"
            driverName="IM3J3N"
            driverFlag="de"
            team="aston-martin"
            driverTime="+59.727"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="14"
            driverName="Veixel"
            driverFlag="se"
            team="alfa-romeo"
            driverTime="+1:16.598"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="FADED"
            driverFlag="us"
            team="alpine"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="Zerotix"
            driverFlag="de"
            team="alpha-tauri"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="LUKAS HENDRYCH"
            driverFlag="cz"
            team="ferrari"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="ANTONIO BRANCHIX"
            driverFlag="it"
            team="ferrari"
            driverTime="DNF"
            driverPoints=""
          />
        </ResultsTable>

        <FastestLapContainer>
          <h6>Fastest Lap: NIK KEI</h6>
          <img src="/teams/alpine.png" alt=""/>
          <h6>1:17.510</h6>
        </FastestLapContainer>
        <DriverDayContainer>
          <h6>Driver Of The Day: ALPHAROMEO</h6>
          <img src="/teams/williams.png" alt=""/>
        </DriverDayContainer>
        </S.Section>

      <S.Section>
        <Footer />
      </S.Section>
    </>
  );
}

export default Hungaroring2A;

const CalendarArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const FastestLapContainer = styled.div`
  display: flex;
  column-gap: 5px;
  margin: 30px 0;
  align-items: center;

  > img {
    height: 16px;
    width: auto;

    @media only screen and (max-width: 799px) {
      height: 13px;
  }
  }
`;

const DriverDayContainer = styled.div`
  display: flex;
  column-gap: 5px;
  align-items: center;

  > img {
    height: 16px;
    width: auto;

    @media only screen and (max-width: 799px) {
      height: 13px;
  }
  }
`;

const ArrowPrevious = styled(ArrowBackIosNewIcon)`
  font-size: 64px !important;

  :hover {
    opacity: 1;
  }
`;

const ArrowNext = styled(ArrowForwardIosIcon)`
  font-size: 64px !important;

  :hover {
    opacity: 1;
  }
`;
const ResultsTable = styled.table`
  width: 100%;
  border-spacing: 0;
  margin-top: 30px;

  th,
  td {
    padding: 14px 20px;
    text-align: left !important;
    border-bottom: 1px solid;
    border-color: inherit;

    @media only screen and (max-width: 799px) {
      padding: 9px 10px 7px;
  }
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
