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

function Silverstone1A() {
  return (
    <>
     <F1SecondaryNavigation
      />
      <S.Section>
      
        <CalendarArrowContainer>
          <Link to={`/f1/schedule/season-1/tier-a/melbourne`}>
            <ArrowPrevious />
          </Link>
          {/* <Link to={`/f1/schedule/season-1/tier-a/spa`}>
            <ArrowNext />
          </Link> */}
        </CalendarArrowContainer>
        <h6>Season 1 - Tier A - Round 2</h6>
        <br></br>
        <h2>Silverstone</h2>
        <br></br>
        <a target="_blank" href="https://www.youtube.com/watch?v=yw-ooSL5eSI&t=302s&ab_channel=10Controls"><button>View Race Highlights</button></a>
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
            driverName="Antonio Branchix"
            driverFlag="it"
            team="ferrari"
            driverTime="42:02.146"
            driverPoints="+25"
          />
          <F1RaceResult
            driverPosition="2"
            driverName="Kalcess"
            driverFlag="no"
            team="williams"
            driverTime="+0.398"
            driverPoints="+18"
          />
          <F1RaceResult
            driverPosition="3"
            driverName="Kudos"
            driverFlag="de"
            team="mclaren"
            driverTime="+7.356"
            driverPoints="+15"
          />
          <F1RaceResult
            driverPosition="4"
            driverName="Dopichu"
            driverFlag="fi"
            team="alpha-tauri"
            driverTime="+21.110"
            driverPoints="+13"
          />
          <F1RaceResult
            driverPosition="5"
            driverName="Antonio Cortes"
            driverFlag="es"
            team="ferrari"
            driverTime="+21.779"
            driverPoints="+10"
          />
          <F1RaceResult
            driverPosition="6"
            driverName="LucaDude40"
            driverFlag="gb"
            team="aston-martin"
            driverTime="+22.474"
            driverPoints="+8"
          />
          <F1RaceResult
            driverPosition="7"
            driverName="CountMuttly"
            driverFlag="dk"
            team="alfa-romeo"
            driverTime="+27.050"
            driverPoints="+6"
          />
          <F1RaceResult
            driverPosition="8"
            driverName="Jaysen"
            driverFlag="nl"
            team="alpha-tauri"
            driverTime="+33.677"
            driverPoints="+4"
          />
          <F1RaceResult
            driverPosition="9"
            driverName="Focuser"
            driverFlag="es"
            team="alfa-romeo"
            driverTime="+34.487"
            driverPoints="+2"
          />
          <F1RaceResult
            driverPosition="10"
            driverName="Mute"
            driverFlag="ng"
            team="mercedes"
            driverTime="+44.707"
            driverPoints="+1"
          />
          <F1RaceResult
            driverPosition="11"
            driverName="Luc"
            driverFlag="nl"
            team="haas"
            driverTime="+47.617"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="12"
            driverName="Nik Kei"
            driverFlag="ua"
            team="alpine"
            driverTime="+49.449"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="13"
            driverName="Hailee"
            driverFlag="nl"
            team="red-bull"
            driverTime="+1:05.456"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="14"
            driverName="LawrenceSelling"
            driverFlag="ph"
            team="williams"
            driverTime="+1:20.285"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="15"
            driverName="Bald"
            driverFlag="ie"
            team="red-bull"
            driverTime="+1:25.211"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="16"
            driverName="Counterfeit"
            driverFlag="gb"
            team="aston-martin"
            driverTime="+1:25.274"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="Joram"
            driverFlag="nl"
            team="alpine"
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
          <F1RaceResult
            driverPosition=""
            driverName="UPPSEY"
            driverFlag="it"
            team="mercedes"
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
        </ResultsTable>
        <FastestLapContainer>
          <h6>Fastest Lap: Bald</h6>
          <img src="/teams/red-bull.png" alt=""/>
          <h6>1:19.832</h6>
        </FastestLapContainer>
        <DriverDayContainer>
          <h6>Driver Of The Day: Antonio Branchix</h6>
          <img src="/teams/ferrari.png" alt=""/>
        </DriverDayContainer>
      </S.Section>

      <S.Section>
        <Footer />
      </S.Section>
    </>
  );
}

export default Silverstone1A;

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
