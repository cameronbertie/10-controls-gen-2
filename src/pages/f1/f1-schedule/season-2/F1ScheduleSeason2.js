import React from "react";
import * as S from "../../../../styles/styles";
import styled from "styled-components";
import F1ScheduleCompleted from "../F1ScheduleCompleted";
import F1ScheduleUpcoming from "../F1ScheduleUpcoming";

function F1ScheduleSeason2() {
  return (
    <>
      <F1ScheduleCompleted
        roundNumber="1"
        days="2-3"
        month="Dec 2022"
        raceCountryFlag="au"
        raceName="Melbourne"
        tierADriver="AlphaRomeo"
        tierADriverFlag="nl"
        tierADriverTeam="williams"
        tierBDriver="Max Housley"
        tierBDriverFlag="gb"
        tierBDriverTeam="haas"
        tierAResultsLink="season-2/tier-a/melbourne"
        tierBResultsLink="season-2/tier-b/melbourne"
      />
      <F1ScheduleCompleted
        roundNumber="2"
        days="9-10"
        month="Dec 2022"
        raceCountryFlag="pt"
        raceName="PORTIMÃO"
        tierADriver="Melon"
        tierADriverFlag="ro"
        tierADriverTeam="aston-martin"
        tierBDriver="Melon"
        tierBDriverFlag="ro"
        tierBDriverTeam="aston-martin"
        tierAResultsLink="season-2/tier-a/portimao"
        tierBResultsLink="season-2/tier-b/portimao"
      />
      <F1ScheduleCompleted
         roundNumber="3 - sprint"
         days="16-17"
         month="Dec 2022"
         raceCountryFlag="fr"
         raceName="Paul Ricard"
        tierADriver="AlphaRomeo"
        tierADriverFlag="nl"
        tierADriverTeam="williams"
        tierBDriver="Melon"
        tierBDriverFlag="ro"
        tierBDriverTeam="aston-martin"
        tierAResultsLink="season-2/tier-a/paul-ricard"
        tierBResultsLink="season-2/tier-b/paul-ricard"
      />
      <F1ScheduleCompleted
        roundNumber="4"
        days="6-7"
        month="Jan 2023"
        raceCountryFlag="jp"
        raceName="Suzuka"
        tierADriver="Antonio Cortes"
        tierADriverFlag="es"
        tierADriverTeam="ferrari"
        tierBDriver="Stra"
        tierBDriverFlag="rs"
        tierBDriverTeam="mclaren"
        tierAResultsLink="season-2/tier-a/suzuka"
        tierBResultsLink="season-2/tier-b/suzuka"
      />
      <F1ScheduleCompleted
        roundNumber="5"
        days="13-14"
        month="Jan 2023"
        raceCountryFlag="hu"
        raceName="Hungaroring"
        tierADriver="Melon"
        tierADriverFlag="ro"
        tierADriverTeam="alpha-tauri"
        tierBDriver="SP3XTRE"
        tierBDriverFlag="se"
        tierBDriverTeam="mercedes"
        tierAResultsLink="season-2/tier-a/hungaroring"
        tierBResultsLink="season-2/tier-b/hungaroring"
      />
      <F1ScheduleCompleted
        roundNumber="6 - Sprint"
        days="20-21"
        month="Jan 2023"
        raceCountryFlag="at"
        raceName="Spielberg"
        tierADriver="Melon"
        tierADriverFlag="ro"
        tierADriverTeam="alpha-tauri"
        tierBDriver="Vade"
        tierBDriverFlag="se"
        tierBDriverTeam="alpine"
        tierAResultsLink="season-2/tier-a/spielberg"
        tierBResultsLink="season-2/tier-b/spielberg"
      />
      <F1ScheduleCompleted
        roundNumber="7"
        days="27-28"
        month="Jan 2023"
        raceCountryFlag="az"
        raceName="Baku"
        tierADriver="ALPHAROMEO"
        tierADriverFlag="nl"
        tierADriverTeam="ferrari"
        tierBDriver="LUKAS HENDRYCH"
        tierBDriverFlag="cz"
        tierBDriverTeam="red-bull"
        tierAResultsLink="season-2/tier-a/baku"
        tierBResultsLink="season-2/tier-b/baku"
      />
      <F1ScheduleUpcoming
        roundNumber="8"
        days="3-4"
        month="Feb 2023"
        raceCountryFlag="cn"
        raceName="Shanghai"
        raceDetailsLink="season-2/shanghai"
      />
      <F1ScheduleUpcoming
        roundNumber="9 - sprint"
        days="10-11"
        month="Feb 2023"
        raceCountryFlag="us"
        raceName="Austin"
        raceDetailsLink="season-2/austin"
      />
      <F1ScheduleUpcoming
        roundNumber="10"
        days="17-18"
        month="Feb 2023"
        raceCountryFlag="it"
        raceName="Imola"
        raceDetailsLink="season-2/imola"
      />
      <F1ScheduleUpcoming
        roundNumber="11"
        days="24-25"
        month="Feb 2023"
        raceCountryFlag="sg"
        raceName="Singapore"
        raceDetailsLink="season-2/singapore"
      />
      <F1ScheduleUpcoming
        roundNumber="12"
        days="3-4"
        month="Mar 2023"
        raceCountryFlag="br"
        raceName="Interlagos"
        raceDetailsLink="season-2/interlagos"
      />
    </>
  );
}

export default F1ScheduleSeason2;
