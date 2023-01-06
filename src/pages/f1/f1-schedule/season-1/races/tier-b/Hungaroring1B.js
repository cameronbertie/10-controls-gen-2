import React from "react";
import * as S from "../../../../../../styles/styles";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import Footer from "../../../../../../components/Footer";
import F1RaceResult from "../../../F1RaceResult";
import F1SecondaryNavigation from "../../../../F1SecondaryNavigation";

function Hungaroring1B() {
  return (
    <>
      <F1SecondaryNavigation
      />
      <S.Section>
      
        <CalendarArrowContainer>
          <Link to={`/f1/schedule/season-1/tier-b/monza`}>
            <ArrowPrevious />
          </Link>
          <Link to={`/f1/schedule/season-1/tier-b/miami`}>
            <ArrowNext />
          </Link>
        </CalendarArrowContainer>
        <h6>Season 1 - Tier B - Round 7</h6>
        <br></br>
        <h2>Hungaroring</h2>
        <h5>Results</h5>
        <br></br>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=DfBBev6xxQM&ab_channel=10Controls"><button>View Race Highlights</button></a>
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
            driverTime="51:19.883"
            driverPoints="+25"
          />
          <F1RaceResult
            driverPosition="2"
            driverName="Luc"
            driverFlag="nl"
            team="haas"
            driverTime="+3.452"
            driverPoints="+18"
          />
          <F1RaceResult
            driverPosition="3"
            driverName="Br0wn"
            driverFlag="de"
            team="alpha-tauri"
            driverTime="+3.854"
            driverPoints="+16"
          />
          <F1RaceResult
            driverPosition="4"
            driverName="Daniel Bodnar"
            driverFlag="rs"
            team="alfa-romeo"
            driverTime="+5.439"
            driverPoints="+12"
          />
          <F1RaceResult
            driverPosition="5"
            driverName="Brim"
            driverFlag="nl"
            team="mclaren"
            driverTime="+7.412"
            driverPoints="+10"
          />
          <F1RaceResult
            driverPosition="6"
            driverName="Veixel"
            driverFlag="se"
            team="ferrari"
            driverTime="+7.483"
            driverPoints="+8"
          />
          <F1RaceResult
            driverPosition="7"
            driverName="Philip"
            driverFlag="nl"
            team="alfa-romeo"
            driverTime="+10.071"
            driverPoints="+6"
          />
          <F1RaceResult
            driverPosition="8"
            driverName="MAXFAN"
            driverFlag="pl"
            team="red-bull"
            driverTime="+10.613"
            driverPoints="+4"
          />
          <F1RaceResult
            driverPosition="9"
            driverName="F1 GAMER"
            driverFlag="gb"
            team="aston-martin"
            driverTime="+11.751"
            driverPoints="+2"
          />
          <F1RaceResult
            driverPosition="10"
            driverName="Rinky"
            driverFlag="nl"
            team="alpha-tauri"
            driverTime="+14.827"
            driverPoints="+1"
          />
          <F1RaceResult
            driverPosition="11"
            driverName="Zerotix"
            driverFlag="de"
            team="mercedes"
            driverTime="+23.845"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="12"
            driverName="NYDROW"
            driverFlag="be"
            team="mercedes"
            driverTime="+24.448"
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
            driverName="Jay Azier"
            driverFlag="nl"
            team="haas"
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
            driverName="UKLUCASW"
            driverFlag="gb"
            team="williams"
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
            driverName="Mute"
            driverFlag="ng"
            team="aston-martin"
            driverTime="DNF"
            driverPoints=""
          />
        </ResultsTable>

        <FastestLapContainer>
          <h6>Fastest Lap: Br0wn</h6>
          <img src="/teams/alpha-tauri.png" alt=""/>
          <h6>1:21.676</h6>
        </FastestLapContainer>
        <DriverDayContainer>
          <h6>Driver Of The Day: Daniel Bodnar</h6>
          <img src="/teams/alfa-romeo.png" alt=""/>
        </DriverDayContainer>
      </S.Section>

      <S.Section>
        <Footer />
      </S.Section>
    </>
  );
}

export default Hungaroring1B;

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
