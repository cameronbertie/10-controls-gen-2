import React from "react";
import * as S from "../../../../../../styles/styles";
import styled from "styled-components";
import PageHero2 from "../../../../../../components/PageHero2";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import Footer from "../../../../../../components/Footer";
import F1SecondaryNavigation from "../../../../F1SecondaryNavigation";
import F1RaceResult from "../../../F1RaceResult";

function Spa1A() {
  return (
    <>
     <F1SecondaryNavigation
      />
      <S.Section>
      
        <CalendarArrowContainer>
          <Link to={`/f1/schedule/season-1/tier-a/melbourne`}>
            <ArrowPrevious />
          </Link>
          <Link to={`/f1/schedule/season-1/tier-a/jeddah`}>
            <ArrowNext />
          </Link>
        </CalendarArrowContainer>
        <h6>Season 1 - Tier A - Round 3</h6>
        <br></br>
        <h2>Spa</h2>
        <br></br>
        <a target="_blank" href="https://www.youtube.com/watch?v=ITlNwXjxYD0&t=233s&ab_channel=10Controls"><button>View Race Highlights</button></a>
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
            driverName="Kalcess"
            driverFlag="no"
            team="williams"
            driverTime="47:21.723"
            driverPoints="+26"
          />
          <F1RaceResult
            driverPosition="2"
            driverName="Nik Kei"
            driverFlag="ua"
            team="alpine"
            driverTime="+0.747"
            driverPoints="+18"
          />
          <F1RaceResult
            driverPosition="3"
            driverName="Focuser"
            driverFlag="es"
            team="alfa-romeo"
            driverTime="+3.493"
            driverPoints="+15"
          />
          <F1RaceResult
            driverPosition="4"
            driverName="Antonio Cortes"
            driverFlag="es"
            team="ferrari"
            driverTime="+6.696"
            driverPoints="+12"
          />
          <F1RaceResult
            driverPosition="5"
            driverName="Antonio Branchix"
            driverFlag="it"
            team="ferrari"
            driverTime="+8.380"
            driverPoints="+10"
          />
          <F1RaceResult
            driverPosition="6"
            driverName="AnOldEnemy"
            driverFlag="hr"
            team="haas"
            driverTime="+9.684"
            driverPoints="+8"
          />
          <F1RaceResult
            driverPosition="7"
            driverName="EddyWorth"
            driverFlag="fr"
            team="mercedes"
            driverTime="+9.914"
            driverPoints="+6"
          />
          <F1RaceResult
            driverPosition="8"
            driverName="Faded"
            driverFlag="us"
            team="alpine"
            driverTime="+17.378"
            driverPoints="+4"
          />
          <F1RaceResult
            driverPosition="9"
            driverName="LucaDude40"
            driverFlag="gb"
            team="aston-martin"
            driverTime="+19.373"
            driverPoints="+2"
          />
          <F1RaceResult
            driverPosition=""
            driverName="Mute"
            driverFlag="ng"
            team="mercedes"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="Bald"
            driverFlag="ie"
            team="mclaren"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="FLAW"
            driverFlag="nl"
            team="haas"
            driverTime="DNF"
            driverPoints=""
          />
           <F1RaceResult
            driverPosition=""
            driverName="Jaysen"
            driverFlag="nl"
            team="alpha-tauri"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="CountMuttly"
            driverFlag="dk"
            team="alfa-romeo"
            driverTime="DNF"
            driverPoints=""
          />
           <F1RaceResult
            driverPosition=""
            driverName="Counterfeit"
            driverFlag="gb"
            team="aston-martin"
            driverTime="DNF"
            driverPoints=""
          />
        </ResultsTable>
        <FastestLapContainer>
          <h6>Fastest Lap: Kalcess</h6>
          <img src="/teams/williams.png" alt=""/>
          <h6>1:45.718</h6>
        </FastestLapContainer>
        <DriverDayContainer>
          <h6>Driver Of The Day: Kalcess</h6>
          <img src="/teams/williams.png" alt=""/>
        </DriverDayContainer>
      </S.Section>

      <S.Section>
        <Footer />
      </S.Section>
    </>
  );
}

export default Spa1A;

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
