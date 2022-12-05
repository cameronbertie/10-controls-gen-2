import React, { useState } from "react";
import * as S from "../../styles/styles";
import styled from "styled-components";
import SecondaryNavigation from "../../components/SecondaryNavigation";
import PageHero2 from "../../components/PageHero2";
import Footer from "../../components/Footer";
// import F1TeamsTierA from "./tier-a/F1TeamsTierA";
// import F1TeamsTierB from "./tier-b/F1TeamsTierB";


function F1Standings() {
  const [selectedTier, setSelectedTier] = useState("Tier A");
  return (
    <>
      <PageHero2
        mainHeading="F1 22 Standings"
        subHeading="Who's bringing home the championship?"
      />
      <SecondaryNavigation
        // Please ensure that page titles are in order of how they should be displayed. Make sure that the order of the links match their respected page titles.
        pages={["Schedule", "Teams", "Standings", "Register"]}
        links={["/f1/schedule", "/f1/teams", "/f1/standings", "/f1/register"]}
      />
      <S.Section>
      <F1TeamsMenuTitle>Other Tiers</F1TeamsMenuTitle>
      <F1TeamsMenuContainer>
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
      </F1TeamsMenuContainer>
      <F1TeamsPreTitle>Season 2</F1TeamsPreTitle>
      <F1TeamsTitle>{selectedTier} Line-Up</F1TeamsTitle>
        <F1TeamsGrid>
         {/* {selectedTier === 'Tier B'
          ? <F1TeamsTierB />
          : <F1TeamsTierA />
        } */}
      
      </F1TeamsGrid>
      </S.Section>
      <S.Section>
        <Footer />
      </S.Section>
      
    </>
  );
}

export default F1Standings;


const F1TeamsMenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 24px;
    row-gap: 30px;
    justify-content: flex-end;
`;

const F1TeamsPreTitle = styled.h3`
text-align: center;
margin-top: 30px;
`

const F1TeamsTitle = styled.h2`
text-align: center;
margin-bottom: 30px;
`

const F1TeamsMenuTitle = styled.h6`
margin-bottom: 16px;
text-align: right;
`

const F1TeamsGrid = styled.div`
display: flex;
flex-wrap: wrap;
column-gap: 16px;
row-gap: 30px;
justify-content: center;
align-items: flex-start;
`