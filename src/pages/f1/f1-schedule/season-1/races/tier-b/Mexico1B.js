import React from "react";
import * as S from "../../../../../../styles/styles";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import Footer from "../../../../../../components/Footer";
import F1RaceResult from "../../../F1RaceResult";
import F1SecondaryNavigation from "../../../../F1SecondaryNavigation";

function Mexico1B() {
  return (
    <>
      <F1SecondaryNavigation
      />
      <S.Section>
      
        <CalendarArrowContainer>
          <Link to={`/f1/schedule/season-1/tier-b/miami`}>
            <ArrowPrevious />
          </Link>
          <Link to={`/f1/schedule/season-1/tier-b/imola`}>
            <ArrowNext />
          </Link>
        </CalendarArrowContainer>
        <h6>Season 1 - Tier B - Round 9</h6>
        <br></br>
        <h2>Mexico</h2>
        <h5>Results</h5>
        <br></br>
        {/* <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=DfBBev6xxQM&ab_channel=10Controls"><button>View Race Highlights</button></a> */}
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
            driverTime="55:19.513"
            driverPoints="+25"
          />
          <F1RaceResult
            driverPosition="2"
            driverName="NYDROW"
            driverFlag="be"
            team="mercedes"
            driverTime="+0.734"
            driverPoints="+18"
          />
          <F1RaceResult
            driverPosition="3"
            driverName="Daniel Bodnar"
            driverFlag="rs"
            team="alfa-romeo"
            driverTime="+4.248"
            driverPoints="+15"
          />
          <F1RaceResult
            driverPosition="4"
            driverName="ARAB"
            driverFlag="us"
            team="red-bull"
            driverTime="+5.931"
            driverPoints="+12"
          />
          <F1RaceResult
            driverPosition="5"
            driverName="MAXFAN"
            driverFlag="pl"
            team="red-bull"
            driverTime="+7.886"
            driverPoints="+10"
          />
          <F1RaceResult
            driverPosition="6"
            driverName="Luc"
            driverFlag="nl"
            team="haas"
            driverTime="+8.445"
            driverPoints="+8"
          />
          <F1RaceResult
            driverPosition="7"
            driverName="Vade"
            driverFlag="se"
            team="alpine"
            driverTime="+13.511"
            driverPoints="+6"
          />
          <F1RaceResult
            driverPosition="8"
            driverName="Hugyme"
            driverFlag="gb"
            team="haas"
            driverTime="+21.895"
            driverPoints="+4"
          />
          <F1RaceResult
            driverPosition="9"
            driverName="Rinky"
            driverFlag="nl"
            team="alpha-tauri"
            driverTime="+23.360"
            driverPoints="+2"
          />
          <F1RaceResult
            driverPosition="10"
            driverName="SAAD"
            driverFlag="sa"
            team="williams"
            driverTime="+43.482"
            driverPoints="+1"
          />
          <F1RaceResult
            driverPosition=""
            driverName="Br0wn"
            driverFlag="de"
            team="alpha-tauri"
            driverTime="+1 LAP"
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
            driverName="Aspec"
            driverFlag="gb"
            team="alpine"
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
            driverName="Steen"
            driverFlag="nl"
            team="aston-martin"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="Dopichu"
            driverFlag="fi"
            team="mercedes"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="CESAR2WIZARD"
            driverFlag="fr"
            team="williams"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="Brim"
            driverFlag="nl"
            team="mclaren"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="Kemal"
            driverFlag="tr"
            team="aston-martin"
            driverTime="DNF"
            driverPoints=""
          />
        </ResultsTable>

        <FastestLapContainer>
          <h6>Fastest Lap: Br0wn</h6>
          <img src="/teams/alpha-tauri.png" alt=""/>
          <h6>1:17.735</h6>
        </FastestLapContainer>
        <DriverDayContainer>
          <h6>Driver Of The Day: Maxfan</h6>
          <img src="/teams/red-bull.png" alt=""/>
        </DriverDayContainer>
      </S.Section>

      <S.Section>
        <Footer />
      </S.Section>
    </>
  );
}

export default Mexico1B;

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
