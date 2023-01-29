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

function Baku2B() {
  return (
    <>
      <F1SecondaryNavigation />
      <S.Section>
        <CalendarArrowContainer>
          <Link to={`/f1/schedule/season-2/tier-b/spielberg`}>
            <ArrowPrevious />
          </Link>
          {/* <Link to={`/f1/schedule/season-2/tier-b/suzuka`}>
            <ArrowNext />
          </Link> */}
        </CalendarArrowContainer>
        <h6>Season 2 - Tier B - Round 7</h6>
        <br></br>
        <h2>Baku</h2>
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
            driverName="LUKAS HENDRYCH"
            driverFlag="cz"
            team="red-bull"
            driverTime="52:32.640"
            driverPoints="+25"
          />
          <F1RaceResult
            driverPosition="2"
            driverName="JSTN NL"
            driverFlag="nl"
            team="ferrari"
            driverTime="+1.124"
            driverPoints="+19"
          />
          <F1RaceResult
            driverPosition="3"
            driverName="Eymen Akin"
            driverFlag="tr"
            team="mclaren"
            driverTime="+2.136"
            driverPoints="+15"
          />
          <F1RaceResult
            driverPosition="4"
            driverName="VADE"
            driverFlag="se"
            team="alpine"
            driverTime="+4.216"
            driverPoints="+12"
          />
          <F1RaceResult
            driverPosition="5"
            driverName="SP3XTRE"
            driverFlag="se"
            team="mercedes"
            driverTime="+5.831"
            driverPoints="+10"
          />
          <F1RaceResult
            driverPosition="6"
            driverName="UKLUCASW"
            driverFlag="gb"
            team="mercedes"
            driverTime="+6.391"
            driverPoints="+8"
          />
          <F1RaceResult
            driverPosition="7"
            driverName="CountMuttly"
            driverFlag="dk"
            team="mclaren"
            driverTime="+6.907"
            driverPoints="+6"
          />
          <F1RaceResult
            driverPosition="8"
            driverName="Rocky"
            driverFlag="de"
            team="alpha-tauri"
            driverTime="+32.263"
            driverPoints="+4"
          />
          <F1RaceResult
            driverPosition="9"
            driverName="OTLR JACK"
            driverFlag="gb"
            team="aston-martin"
            driverTime="+36.901"
            driverPoints="+2"
          />
          <F1RaceResult
            driverPosition="10"
            driverName="Bald"
            driverFlag="ie"
            team="alfa-romeo"
            driverTime="+1 LAP"
            driverPoints="+1"
          />
          <F1RaceResult
            driverPosition=""
            driverName="HACKODK"
            driverFlag="dk"
            team="aston-martin"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="XNOTFRANKIE"
            driverFlag="gb"
            team="haas"
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
            driverName="bartusg5"
            driverFlag="hu"
            team="williams"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="Joni"
            driverFlag="al"
            team="haas"
            driverTime="DNF"
            driverPoints=""
          />
        </ResultsTable>

        <FastestLapContainer>
          <h6>Fastest Lap: JSTN NL</h6>
          <img src="/teams/ferrari.png" alt="" />
          <h6>1:06.480</h6>
        </FastestLapContainer>
        <DriverDayContainer>
          <h6>Driver Of The Day: JSTN NL</h6>
          <img src="/teams/ferrari.png" alt="" />
        </DriverDayContainer>
      </S.Section>

      <S.Section>
        <Footer />
      </S.Section>
    </>
  );
}

export default Baku2B;

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
