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

function Portimao2A() {
  return (
    <>
      <F1SecondaryNavigation
      />
      <S.Section>
      
        <CalendarArrowContainer>
          <Link to={`/f1/schedule/season-2/tier-a/melbourne`}>
            <ArrowPrevious />
          </Link>
          <Link to={`/f1/schedule/season-2/tier-a/paul-ricard`}>
            <ArrowNext />
          </Link>
        </CalendarArrowContainer>
        <h6>Season 2 - Tier A - Round 2</h6>
        <br></br>
        <h2>PORTIMÃO</h2>
        <h5>Results</h5>
        <br></br>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=Fzu8GGtsgNg&ab_channel=10Controls"><button>View Race Highlights</button></a>
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
            team="aston-martin"
            driverTime="46:23.716"
            driverPoints="+25"
          />
          <F1RaceResult
            driverPosition="2"
            driverName="ANTONIO BRANCHIX"
            driverFlag="it"
            team="ferrari"
            driverTime="+12.773"
            driverPoints="+18"
          />
          <F1RaceResult
            driverPosition="3"
            driverName="ALPHAROMEO"
            driverFlag="nl"
            team="williams"
            driverTime="+14.422"
            driverPoints="+15"
          />
          <F1RaceResult
            driverPosition="4"
            driverName="THOMAS VINK"
            driverFlag="nl"
            team="red-bull"
            driverTime="+14.433"
            driverPoints="+12"
          />
          <F1RaceResult
            driverPosition="5"
            driverName="Antonio Cortes"
            driverFlag="es"
            team="ferrari"
            driverTime="+17.300"
            driverPoints="+10"
          />
          <F1RaceResult
            driverPosition="6"
            driverName="LUCADUDE40"
            driverFlag="gb"
            team="mercedes"
            driverTime="+26.437"
            driverPoints="+8"
          />
          <F1RaceResult
            driverPosition="7"
            driverName="FLAW"
            driverFlag="nl"
            team="williams"
            driverTime="+34.512"
            driverPoints="+6"
          />
          <F1RaceResult
            driverPosition="8"
            driverName="FOCUSER"
            driverFlag="es"
            team="red-bull"
            driverTime="+35.596"
            driverPoints="+4"
          />
          <F1RaceResult
            driverPosition="9"
            driverName="NYDROW"
            driverFlag="be"
            team="alfa-romeo"
            driverTime="+36.114"
            driverPoints="+2"
          />
          <F1RaceResult
            driverPosition="10"
            driverName="BRIM"
            driverFlag="nl"
            team="mclaren"
            driverTime="+40.807"
            driverPoints="+1"
          />
          <F1RaceResult
            driverPosition="11"
            driverName="PHILIP"
            driverFlag="nl"
            team="haas"
            driverTime="+42.160"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="12"
            driverName="COUNTERFEIT"
            driverFlag="gb"
            team="mercedes"
            driverTime="+45.189"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="13"
            driverName="DANIEL BODNAR"
            driverFlag="sk"
            team="haas"
            driverTime="+45.189"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="14"
            driverName="LUC"
            driverFlag="nl"
            team="mclaren"
            driverTime="+1:23.012"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="15"
            driverName="Zerotix"
            driverFlag="de"
            team="alpha-tauri"
            driverTime="+1 LAP"
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
            driverName="KUDOS"
            driverFlag="de"
            team="aston-martin"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="VEIXEL"
            driverFlag="se"
            team="alfa-romeo"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="NIK KEI"
            driverFlag="ua"
            team="alpine"
            driverTime="DNF"
            driverPoints=""
          />
        </ResultsTable>

        <FastestLapContainer>
          <h6>Fastest Lap: Zerotix</h6>
          <img src="/teams/alpha-tauri.png" alt=""/>
          <h6>1:19.186</h6>
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

export default Portimao2A;

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
