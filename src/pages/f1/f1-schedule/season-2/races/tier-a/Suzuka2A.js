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

function Suzuka2A() {
  return (
    <>
      <F1SecondaryNavigation
      />
      <S.Section>
      
        <CalendarArrowContainer>
          <Link to={`/f1/schedule/season-2/tier-a/paul-ricard`}>
            <ArrowPrevious />
          </Link>
          <Link to={`/f1/schedule/season-2/tier-a/hungaroring`}>
            <ArrowNext />
          </Link>
        </CalendarArrowContainer>
        <h6>Season 2 - Tier A - Round 4</h6>
        <br></br>
        <h2>Suzuka</h2>
        <h5>Results</h5>
        <br></br>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=PzhicbQGaX4&ab_channel=10Controls"><button>View Race Highlights</button></a>
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
            driverName="Antonio Cortes"
            driverFlag="es"
            team="ferrari"
            driverTime="47:55.383"
            driverPoints="+25"
          />
          <F1RaceResult
            driverPosition="2"
            driverName="Melon"
            driverFlag="de"
            team="alpha-tauri"
            driverTime="+0.486"
            driverPoints="+18"
          />
          <F1RaceResult
            driverPosition="3"
            driverName="Focuser"
            driverFlag="es"
            team="red-bull"
            driverTime="+1.447"
            driverPoints="+15"
          />
          <F1RaceResult
            driverPosition="4"
            driverName="COUNTERFEIT"
            driverFlag="gb"
            team="mercedes"
            driverTime="+1.766"
            driverPoints="+12"
          />
          <F1RaceResult
            driverPosition="5"
            driverName="LUCADUDE40"
            driverFlag="gb"
            team="mercedes"
            driverTime="+3.130"
            driverPoints="+10"
          />
          <F1RaceResult
            driverPosition="6"
            driverName="IM3J3N"
            driverFlag="de"
            team="aston-martin"
            driverTime="+3.896"
            driverPoints="+8"
          />
           <F1RaceResult
            driverPosition="7"
            driverName="KUDOS"
            driverFlag="de"
            team="aston-martin"
            driverTime="+4.056"
            driverPoints="+6"
          />
            <F1RaceResult
            driverPosition="8"
            driverName="Kalcess"
            driverFlag="no"
            team="alpha-tauri"
            driverTime="+4.666"
            driverPoints="+4"
          />
          <F1RaceResult
            driverPosition="9"
            driverName="Nik Kei"
            driverFlag="us"
            team="alpine"
            driverTime="+5.217"
            driverPoints="+2"
          />
          <F1RaceResult
            driverPosition="10"
            driverName="ALPHAROMEO"
            driverFlag="nl"
            team="williams"
            driverTime="+5.609"
            driverPoints="+2"
          />
           <F1RaceResult
            driverPosition="11"
            driverName="LUC"
            driverFlag="nl"
            team="mclaren"
            driverTime="+5.619"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="12"
            driverName="Daniel Bodnar"
            driverFlag="sk"
            team="haas"
            driverTime="+10.121"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="13"
            driverName="BRIM"
            driverFlag="nl"
            team="mclaren"
            driverTime="+12.171"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="14"
            driverName="THOMAS VINK"
            driverFlag="nl"
            team="red-bull"
            driverTime="+16.514"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="15"
            driverName="FADED"
            driverFlag="us"
            team="alpine"
            driverTime="+1 Lap"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="Flaw"
            driverFlag="nl"
            team="williams"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="NYDROW"
            driverFlag="be"
            team="alfa-romeo"
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
          <F1RaceResult
            driverPosition=""
            driverName="Veixel"
            driverFlag="se"
            team="alfa-romeo"
            driverTime="DNF"
            driverPoints=""
          />
        </ResultsTable>

        <FastestLapContainer>
          <h6>Fastest Lap: ALPHAROMEO</h6>
          <img src="/teams/williams.png" alt=""/>
          <h6>1:30.208</h6>
        </FastestLapContainer>
        <DriverDayContainer>
          <h6>Driver Of The Day: Focuser</h6>
          <img src="/teams/red-bull.png" alt=""/>
        </DriverDayContainer>
        </S.Section>

      <S.Section>
        <Footer />
      </S.Section>
    </>
  );
}

export default Suzuka2A;

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
