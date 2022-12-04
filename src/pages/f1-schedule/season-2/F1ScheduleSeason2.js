import React from "react";
import * as S from "../../../styles/styles";
import styled from "styled-components";
import F1ScheduleCompleted from "../F1ScheduleCompleted";
import F1ScheduleUpcoming from "../F1ScheduleUpcoming";

function F1ScheduleSeason2() {
  return (
    <>
      <F1ScheduleCompleted roundNumber="1" days="2-3" month="Dec" raceCountryFlag="au" raceName="Melbourne" tierADriver="AlphaRomeo" tierADriverFlag="nl" tierADriverTeam="williams" tierBDriver="Max Housley" tierBDriverFlag="gb" tierBDriverTeam="haas" tierAresultsLink="" tierBresultsLink="" />
      <F1ScheduleUpcoming roundNumber="1" days="2-3" month="Dec" raceCountryFlag="au" raceName="Melbourne" tierARaceDate="" tierBRaceDate="" raceDetailsLink="" />
      </>
  );
}

export default F1ScheduleSeason2;