import React from "react";
import * as S from "../../../../styles/styles";
import styled from "styled-components";
import F1ScheduleCompleted from "../F1ScheduleCompleted";
import F1ScheduleUpcoming from "../F1ScheduleUpcoming";

function F1ScheduleSeason2() {
  return (
    <>
      <F1ScheduleCompleted roundNumber="1" days="2-3" month="Dec" raceCountryFlag="au" raceName="Melbourne" tierADriver="AlphaRomeo" tierADriverFlag="nl" tierADriverTeam="williams" tierBDriver="Max Housley" tierBDriverFlag="gb" tierBDriverTeam="haas" tierAResultsLink="season-2/tier-a/melbourne" tierBResultsLink="season-2/tier-b/melbourne" />
      <F1ScheduleUpcoming roundNumber="2" days="9-10" month="Dec" raceCountryFlag="pt" raceName="PORTIMÃO" raceDetailsLink="season-2/portimao" />
      <F1ScheduleUpcoming roundNumber="3 - sprint" days="16-17" month="Dec" raceCountryFlag="fr" raceName="Paul Ricard" tierARaceDate="" tierBRaceDate="" raceDetailsLink="" />
      <F1ScheduleUpcoming roundNumber="4" days="6-7" month="Jan" raceCountryFlag="jp" raceName="Suzuka" tierARaceDate="" tierBRaceDate="" raceDetailsLink="" />
      <F1ScheduleUpcoming roundNumber="5" days="13-14" month="Jan" raceCountryFlag="hu" raceName="Hungaroring" tierARaceDate="" tierBRaceDate="" raceDetailsLink="" />
      <F1ScheduleUpcoming roundNumber="6" days="20-21" month="Jan" raceCountryFlag="at" raceName="Austria" tierARaceDate="" tierBRaceDate="" raceDetailsLink="" />
      <F1ScheduleUpcoming roundNumber="7" days="27-28" month="Jan" raceCountryFlag="az" raceName="Baku" tierARaceDate="" tierBRaceDate="" raceDetailsLink="" />
      <F1ScheduleUpcoming roundNumber="8" days="3-4" month="Feb" raceCountryFlag="cn" raceName="Shanghai" tierARaceDate="" tierBRaceDate="" raceDetailsLink="" />
      <F1ScheduleUpcoming roundNumber="9 - sprint" days="10-11" month="Feb" raceCountryFlag="us" raceName="Austin" tierARaceDate="" tierBRaceDate="" raceDetailsLink="" />
      <F1ScheduleUpcoming roundNumber="10" days="17-18" month="Feb" raceCountryFlag="it" raceName="Imola" tierARaceDate="" tierBRaceDate="" raceDetailsLink="" />
      <F1ScheduleUpcoming roundNumber="11" days="24-25" month="Feb" raceCountryFlag="sg" raceName="Singapore" tierARaceDate="" tierBRaceDate="" raceDetailsLink="" />
      <F1ScheduleUpcoming roundNumber="12" days="3-4" month="Mar" raceCountryFlag="br" raceName="Interlagos" tierARaceDate="" tierBRaceDate="" raceDetailsLink="" />
      </>
  );
}

export default F1ScheduleSeason2;