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

function Zandvoort1A() {
  return (
    <>
     <F1SecondaryNavigation
      />
      <S.Section>
      
        <CalendarArrowContainer>
          <Link to={`/f1/schedule/season-1/tier-a/jeddah`}>
            <ArrowPrevious />
          </Link>
          <Link to={`/f1/schedule/season-1/tier-a/monza`}>
            <ArrowNext />
          </Link>
        </CalendarArrowContainer>
        <h6>Season 1 - Tier A - Round 5</h6>
        <br></br>
        <h2>Zandvoort</h2>
        <br></br>
        <a target="_blank" href="https://www.youtube.com/watch?v=maISP1lFtOQ&ab_channel=10Controls"><button>View Race Highlights</button></a>
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
            driverName="Nik Kei"
            driverFlag="ua"
            team="alpine"
            driverTime="51:59.121"
            driverPoints="+25"
          />
          <F1RaceResult
            driverPosition="2"
            driverName="Counterfeit"
            driverFlag="gb"
            team="aston-martin"
            driverTime="+0.604"
            driverPoints="+18"
          />
          <F1RaceResult
            driverPosition="3"
            driverName="Focuser"
            driverFlag="es"
            team="alfa-romeo"
            driverTime="+1.739"
            driverPoints="+15"
          />
          <F1RaceResult
            driverPosition="4"
            driverName="LucaDude40"
            driverFlag="gb"
            team="aston-martin"
            driverTime="+1.775"
            driverPoints="+12"
          />
          <F1RaceResult
            driverPosition="5"
            driverName="Kalcess"
            driverFlag="no"
            team="williams"
            driverTime="+2.443"
            driverPoints="+10"
          />
          <F1RaceResult
            driverPosition="6"
            driverName="Jaysen"
            driverFlag="nl"
            team="alpha-tauri"
            driverTime="+5.822"
            driverPoints="+8"
          />
          <F1RaceResult
            driverPosition="7"
            driverName="AnOldEnemy"
            driverFlag="hr"
            team="haas"
            driverTime="+7.307"
            driverPoints="+6"
          />
          <F1RaceResult
            driverPosition="8"
            driverName="Thomas Vink"
            driverFlag="nl"
            team="red-bull"
            driverTime="+7.594"
            driverPoints="+5"
          />
          <F1RaceResult
            driverPosition="9"
            driverName="CountMuttly"
            driverFlag="dk"
            team="alfa-romeo"
            driverTime="+17.904"
            driverPoints="+2"
          />
          <F1RaceResult
            driverPosition="10"
            driverName="Antonio Branchix"
            driverFlag="it"
            team="ferrari"
            driverTime="+18.241"
            driverPoints="+1"
          />
          <F1RaceResult
            driverPosition="11"
            driverName="LawrenceSelling"
            driverFlag="ph"
            team="williams"
            driverTime="+31.986"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="Flaw"
            driverFlag="nl"
            team="haas"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="Faded"
            driverFlag="us"
            team="alpine"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="Cheers"
            driverFlag="de"
            team="red-bull"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="Antonio Cortes"
            driverFlag="es"
            team="ferrari"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="EddyWorth"
            driverFlag="fr"
            team="mercedes"
            driverTime="DNF"
            driverPoints=""
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
            driverName="Im3j3n"
            driverFlag="de"
            team="mclaren"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="Kyan"
            driverFlag="nl"
            team="alpha-tauri"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="Kudos"
            driverFlag="de"
            team="mclaren"
            driverTime="DNF"
            driverPoints=""
          />
        </ResultsTable>
        <FastestLapContainer>
          <h6>Fastest Lap: Thomas Vink</h6>
          <img src="/teams/red-bull.png" alt=""/>
          <h6>1:12.028</h6>
        </FastestLapContainer>
        <DriverDayContainer>
          <h6>Driver Of The Day: Nik Kei</h6>
          <img src="/teams/alpine.png" alt=""/>
        </DriverDayContainer>
      </S.Section>

      <S.Section>
        <Footer />
      </S.Section>
    </>
  );
}

export default Zandvoort1A;

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
