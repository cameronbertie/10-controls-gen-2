import React from "react";
import * as S from "../../../../../../styles/styles";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import Footer from "../../../../../../components/Footer";
import F1RaceResult from "../../../F1RaceResult";
import F1SecondaryNavigation from "../../../../F1SecondaryNavigation";

function Monza1B() {
  return (
    <>
      <F1SecondaryNavigation
      />
      <S.Section>
      
        <CalendarArrowContainer>
          <Link to={`/f1/schedule/season-1/tier-b/zandvoort`}>
            <ArrowPrevious />
          </Link>
          <Link to={`/f1/schedule/season-1/tier-b/hungaroring`}>
            <ArrowNext />
          </Link>
        </CalendarArrowContainer>
        <h6>Season 1 - Tier B - Round 6 - Sprint</h6>
        <br></br>
        <h2>Monza</h2>
        <h5>Results</h5>
        <br></br>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=HNYzPC0Z3p4&ab_channel=10Controls"><button>View Race Highlights</button></a>
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
            driverName="Luc"
            driverFlag="nl"
            team="haas"
            driverTime="41:44.321"
            driverPoints="+29"
          />
          <F1RaceResult
            driverPosition="2"
            driverName="Daniel Bodnar"
            driverFlag="rs"
            team="alfa-romeo"
            driverTime="+2.481"
            driverPoints="+18"
          />
          <F1RaceResult
            driverPosition="3"
            driverName="UKLUCASW"
            driverFlag="gb"
            team="williams"
            driverTime="+5.206"
            driverPoints="+15"
          />
          <F1RaceResult
            driverPosition="4"
            driverName="Cheers"
            driverFlag="de"
            team="ferrari"
            driverTime="+5.278"
            driverPoints="+12"
          />
          <F1RaceResult
            driverPosition="5"
            driverName="Veixel"
            driverFlag="se"
            team="ferrari"
            driverTime="+8.040"
            driverPoints="+11"
          />
          <F1RaceResult
            driverPosition="6"
            driverName="Philip"
            driverFlag="nl"
            team="alfa-romeo"
            driverTime="+9.664"
            driverPoints="+8"
          />
          <F1RaceResult
            driverPosition="7"
            driverName="ARAB"
            driverFlag="us"
            team="red-bull"
            driverTime="+10.049"
            driverPoints="+12"
          />
          <F1RaceResult
            driverPosition="8"
            driverName="Brim"
            driverFlag="nl"
            team="mclaren"
            driverTime="+18.100"
            driverPoints="+7"
          />
          <F1RaceResult
            driverPosition="9"
            driverName="Joakingen"
            driverFlag="se"
            team="alpha-tauri"
            driverTime="+18.235"
            driverPoints="+9"
          />
          <F1RaceResult
            driverPosition="10"
            driverName="C3z4r"
            driverFlag="ro"
            team="mclaren"
            driverTime="+32.108"
            driverPoints="+1"
          />
          <F1RaceResult
            driverPosition="11"
            driverName="F1 GAMER"
            driverFlag="gb"
            team="aston-martin"
            driverTime="+55.978"
            driverPoints="+6"
          />
          <F1RaceResult
            driverPosition=""
            driverName="Chase"
            driverFlag="us"
            team="alpine"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="NYDROW"
            driverFlag="be"
            team="mercedes"
            driverTime="DNF"
            driverPoints="+2"
          />
          <F1RaceResult
            driverPosition=""
            driverName="MAXFAN"
            driverFlag="pl"
            team="red-bull"
            driverTime="DNF"
            driverPoints="+8"
          />
          <F1RaceResult
            driverPosition=""
            driverName="Dopichu"
            driverFlag="fi"
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
            driverName="Aspec"
            driverFlag="gb"
            team="alpine"
            driverTime="DNF"
            driverPoints=""
          />
        </ResultsTable>

        <FastestLapContainer>
          <h6>Fastest Lap: Arab</h6>
          <img src="/teams/red-bull.png" alt=""/>
          <h6>1:21.676</h6>
        </FastestLapContainer>
        <DriverDayContainer>
          <h6>Driver Of The Day: UKLUCASW</h6>
          <img src="/teams/williams.png" alt=""/>
        </DriverDayContainer>
      </S.Section>

      <S.Section>
        <Footer />
      </S.Section>
    </>
  );
}

export default Monza1B;

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
