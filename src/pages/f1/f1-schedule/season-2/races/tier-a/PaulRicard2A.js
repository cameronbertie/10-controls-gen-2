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

function PaulRicard2A() {
  return (
    <>
      <F1SecondaryNavigation
      />
      <S.Section>
      
        <CalendarArrowContainer>
          <Link to={`/f1/schedule/season-2/tier-a/portimao`}>
            <ArrowPrevious />
          </Link>
          {/* <Link to={`/f1/schedule/portimao`}>
            <ArrowNext />
          </Link> */}
        </CalendarArrowContainer>
        <h6>Season 2 - Tier A - Round 3</h6>
        <br></br>
        <h2>Paul Ricard</h2>
        <h5>Results</h5>
        <br></br>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=EsIOA2crutc&ab_channel=10Controls"><button>View Race Highlights</button></a>
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
            driverName="ALPHAROMEO"
            driverFlag="nl"
            team="williams"
            driverTime="43:00.630"
            driverPoints="+25"
          />
          <F1RaceResult
            driverPosition="2"
            driverName="THOMAS VINK"
            driverFlag="nl"
            team="red-bull"
            driverTime="+0.571"
            driverPoints="+18"
          />
          <F1RaceResult
            driverPosition="3"
            driverName="FADED"
            driverFlag="us"
            team="alpine"
            driverTime="+10.068"
            driverPoints="+15"
          />
          <F1RaceResult
            driverPosition="4"
            driverName="Antonio Cortes"
            driverFlag="es"
            team="ferrari"
            driverTime="+11.937"
            driverPoints="+12"
          />
          <F1RaceResult
            driverPosition="5"
            driverName="Cheers"
            driverFlag="de"
            team="alpha-tauri"
            driverTime="+13.167"
            driverPoints="+10"
          />
          <F1RaceResult
            driverPosition="6"
            driverName="ANTONIO BRANCHIX"
            driverFlag="it"
            team="ferrari"
            driverTime="+21.960"
            driverPoints="+8"
          />
          <F1RaceResult
            driverPosition="7"
            driverName="LUCADUDE40"
            driverFlag="gb"
            team="mercedes"
            driverTime="+26.892"
            driverPoints="+6"
          />
          <F1RaceResult
            driverPosition="8"
            driverName="KUDOS"
            driverFlag="de"
            team="aston-martin"
            driverTime="+27.445"
            driverPoints="+4"
          />
          <F1RaceResult
            driverPosition="9"
            driverName="COUNTERFEIT"
            driverFlag="gb"
            team="mercedes"
            driverTime="+35.876"
            driverPoints="+2"
          />
          <F1RaceResult
            driverPosition="10"
            driverName="BRIM"
            driverFlag="nl"
            team="mclaren"
            driverTime="+38.839"
            driverPoints="+1"
          />
          <F1RaceResult
            driverPosition="11"
            driverName="LUC"
            driverFlag="nl"
            team="mclaren"
            driverTime="+48.470"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="12"
            driverName="Maxfan"
            driverFlag="pl"
            team="red-bull"
            driverTime="+1:04.567"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="13"
            driverName="Im3j3n"
            driverFlag="de"
            team="aston-martin"
            driverTime="+1:06.859"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="14"
            driverName="PHILIP"
            driverFlag="nl"
            team="haas"
            driverTime="+1 LAP"
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
        </ResultsTable>

        <FastestLapContainer>
          <h6>Fastest Lap: Philip</h6>
          <img src="/teams/haas.png" alt=""/>
          <h6>1:31.775</h6>
        </FastestLapContainer>
        <DriverDayContainer>
          <h6>Driver Of The Day: Antonio Cortes</h6>
          <img src="/teams/ferrari.png" alt=""/>
        </DriverDayContainer>
        </S.Section>

        <S.Section>
        <h6>Season 2 - Tier A - Round 3</h6>
        <br></br>
        <h2>Paul Ricard</h2>
        <h5>Sprint Results</h5>
        <br></br>
        {/* <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=Fzu8GGtsgNg&ab_channel=10Controls"><button>View Race Highlights</button></a> */}
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
            driverName="ANTONIO BRANCHIX"
            driverFlag="it"
            team="ferrari"
            driverTime="16:07.947"
            driverPoints="+8"
          />
          <F1RaceResult
            driverPosition="2"
            driverName="ALPHAROMEO"
            driverFlag="nl"
            team="williams"
            driverTime="+0.827"
            driverPoints="+7"
          />
          <F1RaceResult
            driverPosition="3"
            driverName="THOMAS VINK"
            driverFlag="nl"
            team="red-bull"
            driverTime="+0.929"
            driverPoints="+6"
          />
          <F1RaceResult
            driverPosition="4"
            driverName="Cheers"
            driverFlag="de"
            team="alpha-tauri"
            driverTime="+2.578"
            driverPoints="+5"
          />
          <F1RaceResult
            driverPosition="5"
            driverName="COUNTERFEIT"
            driverFlag="gb"
            team="mercedes"
            driverTime="+6.674"
            driverPoints="+4"
          />
          <F1RaceResult
            driverPosition="6"
            driverName="FADED"
            driverFlag="us"
            team="alpine"
            driverTime="+8.513"
            driverPoints="+3"
          />
          <F1RaceResult
            driverPosition="7"
            driverName="Im3j3n"
            driverFlag="de"
            team="aston-martin"
            driverTime="+9.987"
            driverPoints="+2"
          />
          <F1RaceResult
            driverPosition="8"
            driverName="NYDROW"
            driverFlag="be"
            team="alfa-romeo"
            driverTime="+10.223"
            driverPoints="+1"
          />
          <F1RaceResult
            driverPosition="9"
            driverName="BRIM"
            driverFlag="nl"
            team="mclaren"
            driverTime="+10.953"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="10"
            driverName="LUCADUDE40"
            driverFlag="gb"
            team="mercedes"
            driverTime="+11.373"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="11"
            driverName="LUC"
            driverFlag="nl"
            team="mclaren"
            driverTime="+11.693"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="12"
            driverName="Maxfan"
            driverFlag="pl"
            team="red-bull"
            driverTime="+18.254"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="13"
            driverName="KUDOS"
            driverFlag="de"
            team="aston-martin"
            driverTime="+19.637"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="14"
            driverName="PHILIP"
            driverFlag="nl"
            team="haas"
            driverTime="+20.658"
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
        </ResultsTable>

      </S.Section>

      <S.Section>
        <Footer />
      </S.Section>
    </>
  );
}

export default PaulRicard2A;

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
