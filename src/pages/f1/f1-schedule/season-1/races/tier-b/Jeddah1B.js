import React from "react";
import * as S from "../../../../../../styles/styles";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import Footer from "../../../../../../components/Footer";
import F1RaceResult from "../../../F1RaceResult";
import F1SecondaryNavigation from "../../../../F1SecondaryNavigation";

function Jeddah1B() {
  return (
    <>
      <F1SecondaryNavigation
      />
      <S.Section>
      
        <CalendarArrowContainer>
          <Link to={`/f1/schedule/season-1/tier-b/spa`}>
            <ArrowPrevious />
          </Link>
          <Link to={`/f1/schedule/season-1/tier-b/zandvoort`}>
            <ArrowNext />
          </Link>
        </CalendarArrowContainer>
        <h6>Season 1 - Tier B - Round 4</h6>
        <br></br>
        <h2>Jeddah</h2>
        <h5>Results</h5>
        <br></br>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=RHNaiOMWHQM&t=3s&ab_channel=10Controls"><button>View Race Highlights</button></a>
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
            driverName="Cheers"
            driverFlag="de"
            team="ferrari"
            driverTime="45:25.197"
            driverPoints="+25"
          />
          <F1RaceResult
            driverPosition="2"
            driverName="ARAB"
            driverFlag="us"
            team="red-bull"
            driverTime="+2.572"
            driverPoints="+18"
          />
          <F1RaceResult
            driverPosition="3"
            driverName="NYDROW"
            driverFlag="be"
            team="mercedes"
            driverTime="+3.080"
            driverPoints="+15"
          />
          <F1RaceResult
            driverPosition="4"
            driverName="TIB"
            driverFlag="rs"
            team="alfa-romeo"
            driverTime="+3.137"
            driverPoints="+12"
          />
          <F1RaceResult
            driverPosition="5"
            driverName="Joram"
            driverFlag="nl"
            team="williams"
            driverTime="+8.723"
            driverPoints="+10"
          />
          <F1RaceResult
            driverPosition="6"
            driverName="Brim"
            driverFlag="nl"
            team="mclaren"
            driverTime="+13.750"
            driverPoints="+8"
          />
          <F1RaceResult
            driverPosition="7"
            driverName="Luc"
            driverFlag="nl"
            team="haas"
            driverTime="+17.011"
            driverPoints="+6"
          />
          <F1RaceResult
            driverPosition="8"
            driverName="Chase"
            driverFlag="us"
            team="alpine"
            driverTime="+20.517"
            driverPoints="+4"
          />
          <F1RaceResult
            driverPosition="9"
            driverName="UKLUCASW"
            driverFlag="gb"
            team="williams"
            driverTime="+23.150"
            driverPoints="+2"
          />
          <F1RaceResult
            driverPosition="10"
            driverName="ZEROTIX"
            driverFlag="de"
            team="mercedes"
            driverTime="+31.701"
            driverPoints="+2"
          />
          <F1RaceResult
            driverPosition=""
            driverName="BALD"
            driverFlag="ie"
            team="aston-martin"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="F1 GAMER"
            driverFlag="gb"
            team="aston-martin"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="MAXFAN"
            driverFlag="pl"
            team="red-bull"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="PR MANGO"
            driverFlag="pr"
            team="alpine"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="C3z4r"
            driverFlag="ro"
            team="mclaren"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="DOPICHU"
            driverFlag="fi"
            team="alfa-romeo"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="Veixel"
            driverFlag="se"
            team="ferrari"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="PABLO MOTHIBA"
            driverFlag="be"
            team="haas"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="Simmetry"
            driverFlag="se"
            team="alpha-tauri"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="STEEN"
            driverFlag="nl"
            team="alpha-tauri"
            driverTime="DNF"
            driverPoints=""
          />
        </ResultsTable>

        <FastestLapContainer>
          <h6>Fastest Lap: Zerotix</h6>
          <img src="/teams/mercedes.png" alt=""/>
          <h6>1:30.769</h6>
        </FastestLapContainer>
        <DriverDayContainer>
          <h6>Driver Of The Day: Cheers</h6>
          <img src="/teams/ferrari.png" alt=""/>
        </DriverDayContainer>
      </S.Section>

      <S.Section>
        <Footer />
      </S.Section>
    </>
  );
}

export default Jeddah1B;

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
