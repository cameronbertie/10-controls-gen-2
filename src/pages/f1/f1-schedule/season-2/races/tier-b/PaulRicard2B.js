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

function PaulRicard2B() {
  return (
    <>
      <F1SecondaryNavigation />
      <S.Section>
        <CalendarArrowContainer>
          <Link to={`/f1/schedule/season-2/tier-b/portimao`}>
            <ArrowPrevious />
          </Link>
          <Link to={`/f1/schedule/season-2/tier-b/suzuka`}>
            <ArrowNext />
          </Link>
        </CalendarArrowContainer>
        <h6>Season 2 - Tier B - Round 3</h6>
        <br></br>
        <h2>Paul Ricard</h2>
        <h5>Results</h5>
        <br></br>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=75UHE9bwrso&ab_channel=10Controls"
        >
          <button>View Race Highlights</button>
        </a>
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
            driverName="MELON"
            driverFlag="ro"
            team="aston-martin"
            driverTime="42:44.278"
            driverPoints="+25"
          />
          <F1RaceResult
            driverPosition="2"
            driverName="Kogoda"
            driverFlag="ie"
            team="williams"
            driverTime="+26.981"
            driverPoints="+18"
          />
          <F1RaceResult
            driverPosition="3"
            driverName="STRA"
            driverFlag="rs"
            team="mclaren"
            driverTime="+27.085"
            driverPoints="+15"
          />
          <F1RaceResult
            driverPosition="4"
            driverName="MAX HOUSLEY"
            driverFlag="gb"
            team="haas"
            driverTime="+28.423"
            driverPoints="+12"
          />
          <F1RaceResult
            driverPosition="5"
            driverName="SP3XTRE"
            driverFlag="se"
            team="mercedes"
            driverTime="+29.228"
            driverPoints="+10"
          />
          <F1RaceResult
            driverPosition="6"
            driverName="MAXFAN"
            driverFlag="pl"
            team="red-bull"
            driverTime="+34.518"
            driverPoints="+8"
          />
          <F1RaceResult
            driverPosition="7"
            driverName="JASPER"
            driverFlag="gb"
            team="ferrari"
            driverTime="+39.040"
            driverPoints="+6"
          />
          <F1RaceResult
            driverPosition="8"
            driverName="SOVIETKING"
            driverFlag="au"
            team="alfa-romeo"
            driverTime="+49.029"
            driverPoints="+4"
          />
          <F1RaceResult
            driverPosition="9"
            driverName="CountMuttly"
            driverFlag="dk"
            team="mclaren"
            driverTime="+55.210"
            driverPoints="+2"
          />
          <F1RaceResult
            driverPosition="10"
            driverName="bartusg5"
            driverFlag="hu"
            team="williams"
            driverTime="+55.563"
            driverPoints="+1"
          />
          <F1RaceResult
            driverPosition="11"
            driverName="UKLUCASW"
            driverFlag="gb"
            team="mercedes"
            driverTime="+1:01.895"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="12"
            driverName="Jonas"
            driverFlag="dk"
            team="alpha-tauri"
            driverTime="+1:03.288"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="13"
            driverName="Lando"
            driverFlag="pl"
            team="aston-martin"
            driverTime="+1:05.333"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="14"
            driverName="JSTN NL"
            driverFlag="nl"
            team="ferrari"
            driverTime="+1 LAP"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="VADE"
            driverFlag="se"
            team="alpine"
            driverTime="DNF"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition=""
            driverName="Sharky"
            driverFlag="se"
            team="alpine"
            driverTime="DNF"
            driverPoints=""
          />
        </ResultsTable>

        <FastestLapContainer>
          <h6>Fastest Lap: JSTN NL</h6>
          <img src="/teams/ferrari.png" alt="" />
          <h6>1:31.354</h6>
        </FastestLapContainer>
        <DriverDayContainer>
          <h6>Driver Of The Day: Melon</h6>
          <img src="/teams/aston-martin.png" alt="" />
        </DriverDayContainer>
      </S.Section>

      <S.Section>
        <h6>Season 2 - Tier B - Round 3</h6>
        <br></br>
        <h2>Paul Ricard</h2>
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
            driverName="Kogoda"
            driverFlag="ie"
            team="williams"
            driverTime="14:02.7629"
            driverPoints="+8"
          />
          <F1RaceResult
            driverPosition="2"
            driverName="MELON"
            driverFlag="ro"
            team="aston-martin"
            driverTime="+10.406"
            driverPoints="+7"
          />
          <F1RaceResult
            driverPosition="3"
            driverName="SP3XTRE"
            driverFlag="se"
            team="mercedes"
            driverTime="+12.968"
            driverPoints="+6"
          />
          <F1RaceResult
            driverPosition="4"
            driverName="STRA"
            driverFlag="rs"
            team="mclaren"
            driverTime="+13.378"
            driverPoints="+5"
          />
          <F1RaceResult
            driverPosition="5"
            driverName="MAXFAN"
            driverFlag="pl"
            team="red-bull"
            driverTime="+13.592"
            driverPoints="+4"
          />
          <F1RaceResult
            driverPosition="6"
            driverName="MAX HOUSLEY"
            driverFlag="gb"
            team="haas"
            driverTime="+14.909"
            driverPoints="+3"
          />
          <F1RaceResult
            driverPosition="7"
            driverName="JSTN NL"
            driverFlag="nl"
            team="ferrari"
            driverTime="+15.953"
            driverPoints="+2"
          />
          <F1RaceResult
            driverPosition="8"
            driverName="bartusg5"
            driverFlag="hu"
            team="williams"
            driverTime="+17.085"
            driverPoints="+1"
          />
          <F1RaceResult
            driverPosition="9"
            driverName="Jonas"
            driverFlag="dk"
            team="alpha-tauri"
            driverTime="+20.393"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="10"
            driverName="VADE"
            driverFlag="se"
            team="alpine"
            driverTime="+22.863"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="11"
            driverName="CountMuttly"
            driverFlag="dk"
            team="mclaren"
            driverTime="+27.235"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="12"
            driverName="SOVIETKING"
            driverFlag="au"
            team="alfa-romeo"
            driverTime="+27.833"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="13"
            driverName="UKLUCASW"
            driverFlag="gb"
            team="mercedes"
            driverTime="+29.898"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="14"
            driverName="Lando"
            driverFlag="pl"
            team="aston-martin"
            driverTime="+42.426"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="15"
            driverName="JASPER"
            driverFlag="gb"
            team="ferrari"
            driverTime="+47.249"
            driverPoints=""
          />
          <F1RaceResult
            driverPosition="16"
            driverName="Sharky"
            driverFlag="se"
            team="alpine"
            driverTime="+51.206"
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

export default PaulRicard2B;

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
