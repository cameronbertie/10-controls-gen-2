import React from "react";
import * as S from "../../../../../../styles/styles";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import Footer from "../../../../../../components/Footer";
import F1RaceResult from "../../../F1RaceResult";
import F1SecondaryNavigation from "../../../../F1SecondaryNavigation";

function Zandvoort1B() {
  return (
    <>
      <F1SecondaryNavigation
      />
      <S.Section>
      
        <CalendarArrowContainer>
          <Link to={`/f1/schedule/season-1/tier-b/jeddah`}>
            <ArrowPrevious />
          </Link>
          <Link to={`/f1/schedule/season-1/tier-b/monza`}>
            <ArrowNext />
          </Link>
        </CalendarArrowContainer>
        <h6>Season 1 - Tier B - Round 5</h6>
        <br></br>
        <h2>Zandvoort</h2>
        <h5>Results</h5>
        <br></br>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=kir4hPeDBRg&ab_channel=10Controls"><button>View Race Highlights</button></a>
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
            driverName="Daniel Bodnar"
            driverFlag="rs"
            team="alfa-romeo"
            driverTime="54:48.454"
            driverPoints="+25"
          />
          <F1RaceResult
            driverPosition="2"
            driverName="Cheers"
            driverFlag="de"
            team="ferrari"
            driverTime="+1.862"
            driverPoints="+18"
          />
          <F1RaceResult
            driverPosition="3"
            driverName="NYDROW"
            driverFlag="be"
            team="mercedes"
            driverTime="+5.981"
            driverPoints="+15"
          />
          <F1RaceResult
            driverPosition="4"
            driverName="Veixel"
            driverFlag="se"
            team="ferrari"
            driverTime="+6.441"
            driverPoints="+12"
          />
          <F1RaceResult
            driverPosition="5"
            driverName="ZEROTIX"
            driverFlag="de"
            team="mercedes"
            driverTime="++11.016"
            driverPoints="+10"
          />
          <F1RaceResult
            driverPosition="6"
            driverName="Brim"
            driverFlag="nl"
            team="mclaren"
            driverTime="+13.047"
            driverPoints="+8"
          />
          <F1RaceResult
            driverPosition="7"
            driverName="ARAB"
            driverFlag="us"
            team="red-bull"
            driverTime="+14.150"
            driverPoints="+6"
          />
          <F1RaceResult
            driverPosition="8"
            driverName="C3z4r"
            driverFlag="ro"
            team="mclaren"
            driverTime="+14.577"
            driverPoints="+4"
          />
          <F1RaceResult
            driverPosition="9"
            driverName="MAXFAN"
            driverFlag="pl"
            team="red-bull"
            driverTime="+20.163"
            driverPoints="+2"
          />
          <F1RaceResult
            driverPosition="10"
            driverName="Luc"
            driverFlag="nl"
            team="haas"
            driverTime="+32.857"
            driverPoints="+1"
          />
          <F1RaceResult
            driverPosition="11"
            driverName="UKLUCASW"
            driverFlag="gb"
            team="williams"
            driverTime="+42.965"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="12"
            driverName="F1 GAMER"
            driverFlag="gb"
            team="aston-martin"
            driverTime="+1 LAP"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="Jay Azier"
            driverFlag="nl"
            team="haas"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="Joakingen"
            driverFlag="se"
            team="alpha-tauri"
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
            driverName="Joram"
            driverFlag="nl"
            team="williams"
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
            driverName="Philip"
            driverFlag="nl"
            team="alfa-romeo"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="Chase"
            driverFlag="us"
            team="alpine"
            driverTime="DNF"
            driverPoints=""
          />
        </ResultsTable>

        <FastestLapContainer>
          <h6>Fastest Lap: Jay Azier</h6>
          <img src="/teams/haas.png" alt=""/>
          <h6>1:12.804</h6>
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

export default Zandvoort1B;

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
