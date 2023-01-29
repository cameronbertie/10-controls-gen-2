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

function Baku2A() {
  return (
    <>
      <F1SecondaryNavigation
      />
      <S.Section>
      
        <CalendarArrowContainer>
          <Link to={`/f1/schedule/season-2/tier-a/spielberg`}>
            <ArrowPrevious />
          </Link>
          {/* <Link to={`/f1/schedule/season-2/tier-a/suzuka`}>
            <ArrowNext />
          </Link> */}
        </CalendarArrowContainer>
        <h6>Season 2 - Tier A - Round 7</h6>
        <br></br>
        <h2>Baku</h2>
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
            driverName="ALPHAROMEO"
            driverFlag="nl"
            team="ferrari"
            driverTime="53:54.503"
            driverPoints="+25"
          />
          <F1RaceResult
            driverPosition="2"
            driverName="Melon"
            driverFlag="ro"
            team="alpha-tauri"
            driverTime="+0.579"
            driverPoints="+19"
          />
          <F1RaceResult
            driverPosition="3"
            driverName="STRA"
            driverFlag="rs"
            team="williams"
            driverTime="+5.527"
            driverPoints="+15"
          />
          <F1RaceResult
            driverPosition="4"
            driverName="FADED"
            driverFlag="us"
            team="alpine"
            driverTime="+7.598"
            driverPoints="+12"
          />
          <F1RaceResult
            driverPosition="5"
            driverName="Focuser"
            driverFlag="es"
            team="red-bull"
            driverTime="+10.684"
            driverPoints="+10"
          />
          <F1RaceResult
            driverPosition="6"
            driverName="IM3J3N"
            driverFlag="de"
            team="aston-martin"
            driverTime="+11.022"
            driverPoints="+8"
          />
          <F1RaceResult
            driverPosition="7"
            driverName="BRIM"
            driverFlag="nl"
            team="mclaren"
            driverTime="+11.026"
            driverPoints="+6"
          />
          <F1RaceResult
            driverPosition="8"
            driverName="LUC"
            driverFlag="nl"
            team="mclaren"
            driverTime="+11.510"
            driverPoints="+4"
          />
          <F1RaceResult
            driverPosition="9"
            driverName="KUDOS"
            driverFlag="de"
            team="aston-martin"
            driverTime="+14.637"
            driverPoints="+2"
          />
          <F1RaceResult
            driverPosition="10"
            driverName="Nik Kei"
            driverFlag="ua"
            team="alpine"
            driverTime="+14.756"
            driverPoints="+1"
          />
          <F1RaceResult
            driverPosition="11"
            driverName="LUCADUDE40"
            driverFlag="gb"
            team="mercedes"
            driverTime="+16.597"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="12"
            driverName="COUNTERFEIT"
            driverFlag="gb"
            team="mercedes"
            driverTime="+2 LAPS"
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
            driverName="THOMAS VINK"
            driverFlag="nl"
            team="red-bull"
            driverTime="DNF"
            driverPoints=""
          />
        </ResultsTable>

        <FastestLapContainer>
          <h6>Fastest Lap: Melon</h6>
          <img src="/teams/alpha-tauri.png" alt=""/>
          <h6>1:42.153</h6>
        </FastestLapContainer>
        <DriverDayContainer>
          <h6>Driver Of The Day: Brim</h6>
          <img src="/teams/mclaren.png" alt=""/>
        </DriverDayContainer>
        </S.Section>

      <S.Section>
        <Footer />
      </S.Section>
    </>
  );
}

export default Baku2A;

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
