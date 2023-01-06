import React from "react";
import * as S from "../../../../../../styles/styles";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import Footer from "../../../../../../components/Footer";
import F1RaceResult from "../../../F1RaceResult";
import F1SecondaryNavigation from "../../../../F1SecondaryNavigation";

function Spa1B() {
  return (
    <>
      <F1SecondaryNavigation
      />
      <S.Section>
      
        <CalendarArrowContainer>
          <Link to={`/f1/schedule/season-1/tier-b/silverstone`}>
            <ArrowPrevious />
          </Link>
          <Link to={`/f1/schedule/season-1/tier-b/jeddah`}>
            <ArrowNext />
          </Link>
        </CalendarArrowContainer>
        <h6>Season 1 - Tier B - Round 3</h6>
        <br></br>
        <h2>Spa</h2>
        <h5>Results</h5>
        <br></br>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=gmJ15BhNsd8&t=181s&ab_channel=10Controls"><button>View Race Highlights</button></a>
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
            driverName="NYDROW"
            driverFlag="be"
            team="mercedes"
            driverTime="45:44.131"
            driverPoints="+25"
          />
          <F1RaceResult
            driverPosition="2"
            driverName="Cheers"
            driverFlag="de"
            team="haas"
            driverTime="+0.933"
            driverPoints="+18"
          />
          <F1RaceResult
            driverPosition="3"
            driverName="UKLUCASW"
            driverFlag="gb"
            team="williams"
            driverTime="+3.889"
            driverPoints="+15"
          />
          <F1RaceResult
            driverPosition="4"
            driverName="Brim"
            driverFlag="nl"
            team="mclaren"
            driverTime="+5.326"
            driverPoints="+12"
          />
          <F1RaceResult
            driverPosition="5"
            driverName="ZEROTIX"
            driverFlag="de"
            team="mercedes"
            driverTime="+16.476"
            driverPoints="+10"
          />
          <F1RaceResult
            driverPosition="6"
            driverName="Jay Azier"
            driverFlag="nl"
            team="alpine"
            driverTime="+22.413"
            driverPoints="+8"
          />
          <F1RaceResult
            driverPosition="7"
            driverName="TIB"
            driverFlag="rs"
            team="alfa-romeo"
            driverTime="+25.630"
            driverPoints="+7"
          />
          <F1RaceResult
            driverPosition="8"
            driverName="F1 GAMER"
            driverFlag="gb"
            team="aston-martin"
            driverTime="+27.334"
            driverPoints="+4"
          />
          <F1RaceResult
            driverPosition="9"
            driverName="Veixel"
            driverFlag="se"
            team="ferrari"
            driverTime="+36.495"
            driverPoints="+2"
          />
          <F1RaceResult
            driverPosition="10"
            driverName="JOAKINGEN"
            driverFlag="se"
            team="alpha-tauri"
            driverTime="+56.801"
            driverPoints="+1"
          />
          <F1RaceResult
            driverPosition="11"
            driverName="C3z4r"
            driverFlag="ro"
            team="mclaren"
            driverTime="+1:05.876"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="12"
            driverName="PABLO MOTHIBA"
            driverFlag="be"
            team="williams"
            driverTime="+1:09.575"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="13"
            driverName="DOPICHU"
            driverFlag="fi"
            team="alfa-romeo"
            driverTime="+1:33.660"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="Aspec"
            driverFlag="gb"
            team="alpine"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="STEEN"
            driverFlag="nl"
            team="haas"
            driverTime="DNF"
            driverPoints=""
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
            driverName="JURV"
            driverFlag="nl"
            team="ferrari"
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
            driverName="ARAB"
            driverFlag="us"
            team="red-bull"
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
        </ResultsTable>

        <FastestLapContainer>
          <h6>Fastest Lap: Tib</h6>
          <img src="/teams/alfa-romeo.png" alt=""/>
          <h6>1:45.262</h6>
        </FastestLapContainer>
        <DriverDayContainer>
          <h6>Driver Of The Day: Nydrow</h6>
          <img src="/teams/mercedes.png" alt=""/>
        </DriverDayContainer>
      </S.Section>

      <S.Section>
        <Footer />
      </S.Section>
    </>
  );
}

export default Spa1B;

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
