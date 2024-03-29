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

function Melbourne1A() {
  return (
    <>
      <F1SecondaryNavigation
        // Please ensure that page titles are in order of how they should be displayed. Make sure that the order of the links match their respected page titles.
        pages={["Schedule", "Teams", "Standings", "Register"]}
        links={["/f1/schedule", "/f1/teams", "/f1/standings", "/f1/register"]}
      />
      <S.Section>
      
        <CalendarArrowContainer>
          <Link>
            <ArrowPrevious />
          </Link>
          <Link to={`/f1/schedule/season-1/tier-a/silverstone`}>
            <ArrowNext />
          </Link>
        </CalendarArrowContainer>
        <h6>Season 1 - Tier A - Round 1</h6>
        <br></br>
        <h2>Melbourne</h2>
        <br></br>
        <a target="_blank" href="https://www.youtube.com/watch?v=nh6SaPSJByY&t=138s&ab_channel=10Controls"><button>View Race Highlights</button></a>
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
            driverTime="45:23.952"
            driverPoints="+25"
          />
          <F1RaceResult
            driverPosition="2"
            driverName="Kudos"
            driverFlag="de"
            team="mclaren"
            driverTime="+1.125"
            driverPoints="+18"
          />
          <F1RaceResult
            driverPosition="3"
            driverName="Nik Kei"
            driverFlag="ua"
            team="alpine"
            driverTime="+3.138"
            driverPoints="+15"
          />
          <F1RaceResult
            driverPosition="4"
            driverName="AnOldEnemy"
            driverFlag="hr"
            team="haas"
            driverTime="+4.131"
            driverPoints="+13"
          />
          <F1RaceResult
            driverPosition="5"
            driverName="Focuser"
            driverFlag="es"
            team="alfa-romeo"
            driverTime="+4.536"
            driverPoints="+10"
          />
          <F1RaceResult
            driverPosition="6"
            driverName="Counterfeit"
            driverFlag="gb"
            team="aston-martin"
            driverTime="+5.024"
            driverPoints="+8"
          />
          <F1RaceResult
            driverPosition="7"
            driverName="Kalcess"
            driverFlag="no"
            team="williams"
            driverTime="+7.501"
            driverPoints="+6"
          />
          <F1RaceResult
            driverPosition="8"
            driverName="Joram"
            driverFlag="nl"
            team="mercedes"
            driverTime="+11.687"
            driverPoints="+4"
          />
          <F1RaceResult
            driverPosition="9"
            driverName="LawrenceSelling"
            driverFlag="ph"
            team="williams"
            driverTime="+22.823"
            driverPoints="+2"
          />
          <F1RaceResult
            driverPosition="10"
            driverName="Newman"
            driverFlag="it"
            team="ferrari"
            driverTime="+23.635"
            driverPoints="+1"
          />
          <F1RaceResult
            driverPosition="11"
            driverName="LucaDude40"
            driverFlag="gb"
            team="aston-martin"
            driverTime="+24.977"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="Jesse"
            driverFlag="nl"
            team="red-bull"
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
            driverName="Kyan"
            driverFlag="nl"
            team="alpha-tauri"
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
            driverName="Jaysen"
            driverFlag="nl"
            team="alpha-tauri"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="iM3j3n"
            driverFlag="de"
            team="mclaren"
            driverTime="DNF"
            driverPoints=""
          />
        </ResultsTable>

        <FastestLapContainer>
          <h6>Fastest Lap: AnOldEnemy</h6>
          <img src="/teams/haas.png" alt=""/>
          <h6>1:19.832</h6>
        </FastestLapContainer>
        <DriverDayContainer>
          <h6>Driver Of The Day: Cortes</h6>
          <img src="/teams/ferrari.png" alt=""/>
        </DriverDayContainer>
      </S.Section>

      <S.Section>
        <Footer />
      </S.Section>
    </>
  );
}

export default Melbourne1A;

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
  display: none !important;

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
