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

function Spielberg2B() {
  return (
    <>
      <F1SecondaryNavigation />
      <S.Section>
        <CalendarArrowContainer>
          <Link to={`/f1/schedule/season-2/tier-b/hungaroring`}>
            <ArrowPrevious />
          </Link>
          {/* <Link to={`/f1/schedule/season-2/tier-b/suzuka`}>
            <ArrowNext />
          </Link> */}
        </CalendarArrowContainer>
        <h6>Season 2 - Tier B - Round 6</h6>
        <br></br>
        <h2>Spielberg</h2>
        <h5>Results</h5>
        <br></br>
        {/* <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=75UHE9bwrso&ab_channel=10Controls"
        >
          <button>View Race Highlights</button>
        </a> */}
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
            driverName="ARAB"
            driverFlag="us"
            team="red-bull"
            driverTime="42:34.234"
            driverPoints="+26"
          />
          <F1RaceResult
            driverPosition="2"
            driverName="VADE"
            driverFlag="se"
            team="williams"
            driverTime="+0.085"
            driverPoints="+18"
          />
          <F1RaceResult
            driverPosition="3"
            driverName="SP3XTRE"
            driverFlag="se"
            team="mercedes"
            driverTime="+2.514"
            driverPoints="+15"
          />
          <F1RaceResult
            driverPosition="4"
            driverName="HACKODK"
            driverFlag="dk"
            team="aston-martin"
            driverTime="+6.096"
            driverPoints="+12"
          />
          <F1RaceResult
            driverPosition="5"
            driverName="JSTN NL"
            driverFlag="nl"
            team="ferrari"
            driverTime="+7.212"
            driverPoints="+10"
          />
          <F1RaceResult
            driverPosition="6"
            driverName="Rocky"
            driverFlag="de"
            team="alpha-tauri"
            driverTime="+8.788"
            driverPoints="+8"
          />
          <F1RaceResult
            driverPosition="7"
            driverName="CountMuttly"
            driverFlag="dk"
            team="mclaren"
            driverTime="+8.800"
            driverPoints="+6"
          />
          <F1RaceResult
            driverPosition="8"
            driverName="bartusg5"
            driverFlag="hu"
            team="williams"
            driverTime="+10.837"
            driverPoints="+4"
          />
          <F1RaceResult
            driverPosition="9"
            driverName="LUKAS HENDRYCH"
            driverFlag="cz"
            team="ferrari"
            driverTime="+13.325"
            driverPoints="+2"
          />
          <F1RaceResult
            driverPosition="10"
            driverName="MAXFAN"
            driverFlag="pl"
            team="red-bull"
            driverTime="+13.899"
            driverPoints="+1"
          />
          <F1RaceResult
            driverPosition="11"
            driverName="Eyman Akin"
            driverFlag="tr"
            team="mclaren"
            driverTime="+1 LAP"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="12"
            driverName="Bald"
            driverFlag="ie"
            team="alfa-romeo"
            driverTime="+1 LAP"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="13"
            driverName="UKLUCASW"
            driverFlag="gb"
            team="mercedes"
            driverTime="+2 LAPS"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="HIDLEX"
            driverFlag="nl"
            team="williams"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="Zerotix"
            driverFlag="de"
            team="alpha-tauri"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="ANOLDENEMY"
            driverFlag="nl"
            team="aston-martin"
            driverTime="DNF"
            driverPoints=""
          />
        </ResultsTable>

        <FastestLapContainer>
          <h6>Fastest Lap: ARAB</h6>
          <img src="/teams/red-bull.png" alt="" />
          <h6>1:31.354</h6>
        </FastestLapContainer>
        <DriverDayContainer>
          <h6>Driver Of The Day: SP3XTRE</h6>
          <img src="/teams/mercedes.png" alt="" />
        </DriverDayContainer>
      </S.Section>

      <S.Section>
        <h6>Season 2 - Tier B - Round 6</h6>
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
            driverName="ARAB"
            driverFlag="us"
            team="red-bull"
            driverTime="14:55.727"
            driverPoints="+8"
          />
          <F1RaceResult
            driverPosition="2"
            driverName="MAXFAN"
            driverFlag="pl"
            team="red-bull"
            driverTime="+5.158"
            driverPoints="+7"
          />
          <F1RaceResult
            driverPosition="3"
            driverName="JSTN NL"
            driverFlag="nl"
            team="ferrari"
            driverTime="+5.231"
            driverPoints="+6"
          />
          <F1RaceResult
            driverPosition="4"
            driverName="LUKAS HENDRYCH"
            driverFlag="cz"
            team="ferrari"
            driverTime="+5.265"
            driverPoints="+5"
          />
          <F1RaceResult
            driverPosition="5"
            driverName="bartusg5"
            driverFlag="hu"
            team="williams"
            driverTime="+8.843"
            driverPoints="+4"
          />
          <F1RaceResult
            driverPosition="6"
            driverName="Eyman Akin"
            driverFlag="tr"
            team="mclaren"
            driverTime="+9.540"
            driverPoints="+3"
          />
          <F1RaceResult
            driverPosition="7"
            driverName="HIDLEX"
            driverFlag="nl"
            team="williams"
            driverTime="+12.348"
            driverPoints="+2"
          />
          <F1RaceResult
            driverPosition="8"
            driverName="VADE"
            driverFlag="se"
            team="williams"
            driverTime="+14.181"
            driverPoints="+1"
          />
          <F1RaceResult
            driverPosition="9"
            driverName="Rocky"
            driverFlag="de"
            team="alpha-tauri"
            driverTime="+18.944"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="10"
            driverName="CountMuttly"
            driverFlag="dk"
            team="mclaren"
            driverTime="+22.292"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="11"
            driverName="UKLUCASW"
            driverFlag="gb"
            team="mercedes"
            driverTime="+25.637"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="12"
            driverName="Zerotix"
            driverFlag="de"
            team="alpha-tauri"
            driverTime="+27.251"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="13"
            driverName="ANOLDENEMY"
            driverFlag="nl"
            team="aston-martin"
            driverTime="+38.296"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="SP3XTRE"
            driverFlag="se"
            team="mercedes"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="Bald"
            driverFlag="ie"
            team="alfa-romeo"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="HACKODK"
            driverFlag="dk"
            team="aston-martin"
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

export default Spielberg2B;

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
