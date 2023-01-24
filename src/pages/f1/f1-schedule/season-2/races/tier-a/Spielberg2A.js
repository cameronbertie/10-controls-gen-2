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

function Spielberg2A() {
  return (
    <>
      <F1SecondaryNavigation
      />
      <S.Section>
      
        <CalendarArrowContainer>
          <Link to={`/f1/schedule/season-2/tier-a/hungaroring`}>
            <ArrowPrevious />
          </Link>
          {/* <Link to={`/f1/schedule/season-2/tier-a/suzuka`}>
            <ArrowNext />
          </Link> */}
        </CalendarArrowContainer>
        <h6>Season 2 - Tier A - Round 6</h6>
        <br></br>
        <h2>Spielberg</h2>
        <h5>Results</h5>
        <br></br>
        {/* <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=ccWjV6nppiY&ab_channel=10Controls"><button>View Race Highlights</button></a> */}
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
            driverTime="44:37.361"
            driverPoints="+25"
          />
          <F1RaceResult
            driverPosition="2"
            driverName="Kalcess"
            driverFlag="no"
            team="alpha-tauri"
            driverTime="+1.888"
            driverPoints="+18"
          />
          <F1RaceResult
            driverPosition="3"
            driverName="LUCADUDE40"
            driverFlag="gb"
            team="mercedes"
            driverTime="+2.128"
            driverPoints="+15"
          />
          <F1RaceResult
            driverPosition="4"
            driverName="FADED"
            driverFlag="us"
            team="alpine"
            driverTime="+2.331"
            driverPoints="+12"
          />
          <F1RaceResult
            driverPosition="5"
            driverName="KUDOS"
            driverFlag="de"
            team="aston-martin"
            driverTime="+2.509"
            driverPoints="+10"
          />
          <F1RaceResult
            driverPosition="6"
            driverName="Nik Kei"
            driverFlag="ua"
            team="alpine"
            driverTime="+3.270"
            driverPoints="+8"
          />
          <F1RaceResult
            driverPosition="7"
            driverName="STRA"
            driverFlag="rs"
            team="williams"
            driverTime="+5.825"
            driverPoints="+6"
          />
          <F1RaceResult
            driverPosition="8"
            driverName="COUNTERFEIT"
            driverFlag="gb"
            team="mercedes"
            driverTime="+6.045"
            driverPoints="+4"
          />
          <F1RaceResult
            driverPosition="9"
            driverName="BRIM"
            driverFlag="nl"
            team="mclaren"
            driverTime="+7.543"
            driverPoints="+2"
          />
          <F1RaceResult
            driverPosition="10"
            driverName="Focuser"
            driverFlag="es"
            team="red-bull"
            driverTime="+8.063"
            driverPoints="+1"
          />
          <F1RaceResult
            driverPosition="11"
            driverName="LUC"
            driverFlag="nl"
            team="mclaren"
            driverTime="+16.426"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="12"
            driverName="THOMAS VINK"
            driverFlag="nl"
            team="red-bull"
            driverTime="+57.540"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="13"
            driverName="Bald"
            driverFlag="ie"
            team="alfa-romeo"
            driverTime="+2 LAPS"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="ALPHAROMEO"
            driverFlag="nl"
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
          <F1RaceResult
            driverPosition=""
            driverName="Philip"
            driverFlag="nl"
            team="haas"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="DANIEL BODNAR"
            driverFlag="sk"
            team="haas"
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
          <h6>Fastest Lap: Thomas Vink</h6>
          <img src="/teams/red-bull.png" alt=""/>
          <h6>1:17.510</h6>
        </FastestLapContainer>
        <DriverDayContainer>
          <h6>Driver Of The Day: Nik Kei</h6>
          <img src="/teams/alpine.png" alt=""/>
        </DriverDayContainer>
        </S.Section>

        <S.Section>
        <h6>Season 2 - Tier A - Round 6</h6>
        <br></br>
        <h2>Spielberg</h2>
        <h5>Sprint Results</h5>
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
            driverTime="14:47.412"
            driverPoints="+8"
          />
          <F1RaceResult
            driverPosition="2"
            driverName="THOMAS VINK"
            driverFlag="nl"
            team="red-bull"
            driverTime="+3.320"
            driverPoints="+7"
          />
          <F1RaceResult
            driverPosition="3"
            driverName="ALPHAROMEO"
            driverFlag="nl"
            team="ferrari"
            driverTime="+3.819"
            driverPoints="+6"
          />
          <F1RaceResult
            driverPosition="4"
            driverName="Kalcess"
            driverFlag="no"
            team="alpha-tauri"
            driverTime="+4.119"
            driverPoints="+5"
          />
          <F1RaceResult
            driverPosition="5"
            driverName="FADED"
            driverFlag="us"
            team="alpine"
            driverTime="+4.538"
            driverPoints="+4"
          />
          <F1RaceResult
            driverPosition="6"
            driverName="LUCADUDE40"
            driverFlag="gb"
            team="mercedes"
            driverTime="+5.342"
            driverPoints="+3"
          />
          <F1RaceResult
            driverPosition="7"
            driverName="Philip"
            driverFlag="nl"
            team="haas"
            driverTime="+5.752"
            driverPoints="+2"
          />
          <F1RaceResult
            driverPosition="8"
            driverName="BRIM"
            driverFlag="nl"
            team="mclaren"
            driverTime="+7.902"
            driverPoints="+1"
          />
          <F1RaceResult
            driverPosition="9"
            driverName="KUDOS"
            driverFlag="de"
            team="aston-martin"
            driverTime="+8.119"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="10"
            driverName="Focuser"
            driverFlag="es"
            team="red-bull"
            driverTime="+8.291"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="11"
            driverName="Nik Kei"
            driverFlag="ua"
            team="alpine"
            driverTime="+8.608"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="12"
            driverName="ANTONIO BRANCHIX"
            driverFlag="it"
            team="ferrari"
            driverTime="+9.250"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="13"
            driverName="Veixel"
            driverFlag="se"
            team="alfa-romeo"
            driverTime="+9.802"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="14"
            driverName="DANIEL BODNAR"
            driverFlag="sk"
            team="haas"
            driverTime="+10.449"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="15"
            driverName="COUNTERFEIT"
            driverFlag="gb"
            team="mercedes"
            driverTime="+25.942"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="16"
            driverName="Bald"
            driverFlag="ie"
            team="alfa-romeo"
            driverTime="+31.386"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="LUC"
            driverFlag="nl"
            team="mclaren"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="STRA"
            driverFlag="rs"
            team="williams"
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

export default Spielberg2A;

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
