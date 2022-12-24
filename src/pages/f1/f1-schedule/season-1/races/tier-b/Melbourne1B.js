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

function Melbourne1B() {
  return (
    <>
      <F1SecondaryNavigation
      />
      <S.Section>
      
        <CalendarArrowContainer>
          <Link>
            <ArrowPrevious />
          </Link>
          <Link to={`/f1/schedule/season-1/tier-b/silverstone`}>
            <ArrowNext />
          </Link>
        </CalendarArrowContainer>
        <h6>Season 1 - Tier B - Round 1</h6>
        <br></br>
        <h2>Melbourne</h2>
        <h5>Results</h5>
        <br></br>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=Cu7v0aCxCOQ&t=35s&ab_channel=10Controls"><button>View Race Highlights</button></a>
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
            driverName="DOPICHU"
            driverFlag="fi"
            team="alfa-romeo"
            driverTime="47:51.713"
            driverPoints="+25"
          />
          <F1RaceResult
            driverPosition="2"
            driverName="BALD"
            driverFlag="ie"
            team="aston-martin"
            driverTime="+5.673"
            driverPoints="+19"
          />
          <F1RaceResult
            driverPosition="3"
            driverName="LUC"
            driverFlag="nl"
            team="haas"
            driverTime="+7.557"
            driverPoints="+15"
          />
          <F1RaceResult
            driverPosition="4"
            driverName="DAVINKY"
            driverFlag="nl"
            team="haas"
            driverTime="+23.705"
            driverPoints="+12"
          />
          <F1RaceResult
            driverPosition="5"
            driverName="DYLAN"
            driverFlag="za"
            team="mclaren"
            driverTime="+27.172"
            driverPoints="+10"
          />
          <F1RaceResult
            driverPosition="6"
            driverName="ZACEFACE"
            driverFlag="gb"
            team="alpha-tauri"
            driverTime="+30.784"
            driverPoints="+8"
          />
          <F1RaceResult
            driverPosition="7"
            driverName="ARAB"
            driverFlag="us"
            team="alpha-tauri"
            driverTime="+33.296"
            driverPoints="+6"
          />
          <F1RaceResult
            driverPosition="8"
            driverName="NYDROW"
            driverFlag="be"
            team="mercedes"
            driverTime="+45.336"
            driverPoints="+4"
          />
          <F1RaceResult
            driverPosition="9"
            driverName="ZEROTIX"
            driverFlag="de"
            team="mercedes"
            driverTime="+45.601"
            driverPoints="+2"
          />
          <F1RaceResult
            driverPosition="10"
            driverName="TOMMYBAZZA"
            driverFlag="it"
            team="ferrari"
            driverTime="+48.469"
            driverPoints="+1"
          />
          <F1RaceResult
            driverPosition=""
            driverName="UKLUCASW"
            driverFlag="gb"
            team="williams"
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
            driverName="JURV"
            driverFlag="nl"
            team="alpine"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="GURI"
            driverFlag="br"
            team="mclaren"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="MYRON"
            driverFlag="ua"
            team="alfa-romeo"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="PABLO MOTHIBA"
            driverFlag="be"
            team="williams"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="CHASE"
            driverFlag="us"
            team="alpine"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="JOAKINGEN"
            driverFlag="se"
            team="red-bull"
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
            driverName="TIB"
            driverFlag="rs"
            team="alfa-romeo"
            driverTime="DNF"
            driverPoints=""
          />
        </ResultsTable>

        <FastestLapContainer>
          <h6>Fastest Lap: Bald</h6>
          <img src="/teams/aston-martin.png" alt=""/>
          <h6>1:20.475</h6>
        </FastestLapContainer>
        <DriverDayContainer>
          <h6>Driver Of The Day: TIB</h6>
          <img src="/teams/alfa-romeo.png" alt=""/>
        </DriverDayContainer>
      </S.Section>

      <S.Section>
        <Footer />
      </S.Section>
    </>
  );
}

export default Melbourne1B;

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
  display: none !important;

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
