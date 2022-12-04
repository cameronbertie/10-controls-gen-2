import React, { useState } from "react";
import * as S from "../../styles/styles";
import styled from "styled-components";
import SecondaryNavigation from "../../components/SecondaryNavigation";
import PageHero2 from "../../components/PageHero2";
import Footer from "../../components/Footer";


function F1Teams() {
  const [selectedTier, setSelectedTier] = useState("Tier A");
  return (
    <>
      <PageHero2
        mainHeading="F1 22 Teams"
        subHeading="Check out this seasons driver line-up and what teams they will be representing."
      />
      <SecondaryNavigation
        // Please ensure that page titles are in order of how they should be displayed. Make sure that the order of the links match their respected page titles.
        pages={["Schedule", "Teams", "Register"]}
        links={["/f1/schedule", "/f1/teams", "/f1/register"]}
      />
      <S.Section>
      <F1ScheduleMenuTitle>Other Tiers</F1ScheduleMenuTitle>
      <F1ScheduleMenuContainer>
          <button
            style={{ display: selectedTier === 'Tier B' ? 'none' : 'block' }}
            onClick={() => setSelectedTier("Tier B")}
          >
            Tier B
          </button>
          <button
            style={{ display: selectedTier === 'Tier A' ? 'none' : 'block' }}
            onClick={() => setSelectedTier("Tier A")}
          >
            Tier A
          </button>
      </F1ScheduleMenuContainer>
      <F1SchedulePreTitle>Season 2</F1SchedulePreTitle>
      <F1ScheduleTitle>{selectedTier} Line-Up</F1ScheduleTitle>
        <F1ScheduleGrid>
        {/* {selectedTier === 'Tier B'
          ? <F1TeamsTierB />
          : <F1TeamsTierA />
        } */}
      
      </F1ScheduleGrid>
      </S.Section>
      <S.Section>
        <Footer />
      </S.Section>
      
    </>
  );
}

export default F1Teams;


const F1ScheduleMenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 24px;
    row-gap: 30px;
    justify-content: flex-end;
`;

const F1SchedulePreTitle = styled.h3`
text-align: center;
margin-top: 30px;
`

const F1ScheduleTitle = styled.h2`
text-align: center;
margin-bottom: 30px;
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