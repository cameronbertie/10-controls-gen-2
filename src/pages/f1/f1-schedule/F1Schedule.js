import React, { useState } from "react";
import * as S from "../../../styles/styles";
import styled from "styled-components";
import PageHero2 from "../../../components/PageHero2";
import F1ScheduleSeason1 from "./season-1/F1ScheduleSeason1";
import Footer from "../../../components/Footer";
import F1ScheduleSeason2 from "./season-2/F1ScheduleSeason2";
import F1SecondaryNavigation from "../F1SecondaryNavigation";

function F1Schedule() {
  const [selectedSeason, setSelectedSeason] = useState("Season 2");
  const [selectedTier, setSelectedTier] = useState("Tier A");
  return (
    <>
      <PageHero2
        mainHeading="F1 22 Schedule"
        subHeading="Check out our F1 22 calendar to see upcoming races and race results."
      />
      <F1SecondaryNavigation
      />
      <S.Section>
      <F1ScheduleMenuTitle>Other Seasons</F1ScheduleMenuTitle>
      <F1ScheduleMenuContainer>
          <button
            className="races-menu-link"
            style={{ display: selectedSeason === 'Season 1' ? 'none' : 'block' }}
            onClick={() => setSelectedSeason("Season 1")}
          >
            Season 1
          </button>
          <button
            className="races-menu-link"
            style={{ display: selectedSeason === 'Season 2' ? 'none' : 'block' }}
            onClick={() => setSelectedSeason("Season 2")}
          >
            Season 2
          </button>
      </F1ScheduleMenuContainer>
      <F1ScheduleTitle>{selectedSeason} Calendar</F1ScheduleTitle>
        <F1ScheduleGrid>
        {selectedSeason === 'Season 1'
          ? <F1ScheduleSeason1 />
          : <F1ScheduleSeason2 />
        }
      
      </F1ScheduleGrid>
      </S.Section>
      <S.Section>
        <Footer />
      </S.Section>
      
    </>
  );
}

export default F1Schedule;


const F1ScheduleMenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 24px;
    row-gap: 30px;
    justify-content: flex-end;
`;

const F1ScheduleTitle = styled.h2`
text-align: center;
margin: 30px 0;
`

const F1ScheduleMenuTitle = styled.h6`
margin-bottom: 16px;
text-align: right;
`

const F1ScheduleGrid = styled.div`
display: flex;
flex-wrap: wrap;
column-gap: 16px;
row-gap: 30px;
justify-content: center;
align-items: flex-start;
`