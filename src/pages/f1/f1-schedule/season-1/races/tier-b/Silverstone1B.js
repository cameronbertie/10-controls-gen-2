import React from "react";
import * as S from "../../../../../../styles/styles";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import Footer from "../../../../../../components/Footer";
import F1RaceResult from "../../../F1RaceResult";
import F1SecondaryNavigation from "../../../../F1SecondaryNavigation";

function Silverstone1B() {
  return (
    <>
      <F1SecondaryNavigation
      />
      <S.Section>
      
        <CalendarArrowContainer>
          <Link to={`/f1/schedule/season-1/tier-b/melbourne`}>
            <ArrowPrevious />
          </Link>
          {/* <Link to={`/f1/schedule/season-1/tier-b/spa`}>
            <ArrowNext />
          </Link> */}
        </CalendarArrowContainer>
        <h6>Season 1 - Tier B - Round 2</h6>
        <br></br>
        <h2>Silverstone</h2>
        <h5>Results</h5>
        <br></br>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=_RhPVfNwIcY&t=55s&ab_channel=10Controls"><button>View Race Highlights</button></a>
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
            driverName="TIB"
            driverFlag="rs"
            team="alfa-romeo"
            driverTime="40:25.787"
            driverPoints="+26"
          />
          <F1RaceResult
            driverPosition="2"
            driverName="BALD"
            driverFlag="ie"
            team="aston-martin"
            driverTime="+14.556"
            driverPoints="+18"
          />
          <F1RaceResult
            driverPosition="3"
            driverName="DOPICHU"
            driverFlag="fi"
            team="alfa-romeo"
            driverTime="+16.312"
            driverPoints="+15"
          />
          <F1RaceResult
            driverPosition="4"
            driverName="JORAM"
            driverFlag="nl"
            team="williams"
            driverTime="+22.313"
            driverPoints="+12"
          />
          <F1RaceResult
            driverPosition="5"
            driverName="CHASE"
            driverFlag="us"
            team="alpine"
            driverTime="+22.384"
            driverPoints="+10"
          />
          <F1RaceResult
            driverPosition="6"
            driverName="Veixel"
            driverFlag="se"
            team="ferrari"
            driverTime="+26.176"
            driverPoints="+8"
          />
          <F1RaceResult
            driverPosition="7"
            driverName="ARAB"
            driverFlag="us"
            team="alpha-tauri"
            driverTime="+31.968"
            driverPoints="+6"
          />
          <F1RaceResult
            driverPosition="8"
            driverName="NYDROW"
            driverFlag="be"
            team="mercedes"
            driverTime="+40.683"
            driverPoints="+4"
          />
          <F1RaceResult
            driverPosition="9"
            driverName="ZEROTIX"
            driverFlag="de"
            team="mercedes"
            driverTime="+46.464"
            driverPoints="+2"
          />
          <F1RaceResult
            driverPosition="10"
            driverName="JOAKINGEN"
            driverFlag="se"
            team="red-bull"
            driverTime="+46.634"
            driverPoints="+1"
          />
          <F1RaceResult
            driverPosition="11"
            driverName="UKLUCASW"
            driverFlag="gb"
            team="williams"
            driverTime="+50.953"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="12"
            driverName="MAXFAN"
            driverFlag="pl"
            team="red-bull"
            driverTime="+54.473"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="13"
            driverName="F1 GAMER"
            driverFlag="gb"
            team="aston-martin"
            driverTime="+1:01.572"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="14"
            driverName="JURV"
            driverFlag="nl"
            team="alpha-tauri"
            driverTime="+1:08.845"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="15"
            driverName="Brim"
            driverFlag="nl"
            team="mclaren"
            driverTime="+1:11.159"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="16"
            driverName="Simmetry"
            driverFlag="se"
            team="mclaren"
            driverTime="+1:27.237"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="17"
            driverName="C3z4r"
            driverFlag="ro"
            team="haas"
            driverTime="+1:51.976"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="EGAMER"
            driverFlag="gb"
            team="ferrari"
            driverTime="DNF"
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
            driverName="DAVINKY"
            driverFlag="nl"
            team="haas"
            driverTime="DNF"
            driverPoints=""
          />
        </ResultsTable>

        <FastestLapContainer>
          <h6>Fastest Lap: Tib</h6>
          <img src="/teams/alfa-romeo.png" alt=""/>
          <h6>1:30.221</h6>
        </FastestLapContainer>
        <DriverDayContainer>
          <h6>Driver Of The Day: Dopichu</h6>
          <img src="/teams/alfa-romeo.png" alt=""/>
        </DriverDayContainer>
      </S.Section>

      <S.Section>
        <Footer />
      </S.Section>
    </>
  );
}

export default Silverstone1B;

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
