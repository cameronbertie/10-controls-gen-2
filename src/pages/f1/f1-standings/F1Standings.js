import React, { useState } from "react";
import * as S from "../../../styles/styles";
import styled from "styled-components";
import PageHero2 from "../../../components/PageHero2";
import Footer from "../../../components/Footer";
import F1StandingsDrivers1A from "./season-1/tier-a/F1StandingsDrivers1A";
import F1StandingsConstructors1A from "./season-1/tier-a/F1StandingsConstructors1A";
import F1SecondaryNavigation from "../F1SecondaryNavigation";
// import F1StandingsDrivers1B from "./season-1/tier-b/F1StandingsDrivers1B";
// import F1StandingsConstructors1B from "./season-1/tier-b/F1StandingsDrivers1B";
// import F1StandingsDrivers2A from "./season-2/tier-a/F1StandingsDrivers2A";
// import F1StandingsConstructors2A from "./season-2/tier-a/F1StandingsConstructors2A";
// import F1StandingsDrivers2B from "./season-2/tier-b/F1StandingsDrivers2B";
// import F1StandingsConstructors2B from "./season-2/tier-b/F1StandingsConstructors2B";

function F1Standings() {
  const [selectedSeason, setSelectedSeason] = useState("Season 2");
  const [selectedTier, setSelectedTier] = useState("Tier A");
  const [selectedChampionship, setSelectedChampionship] = useState("Drivers'");
  return (
    <>
      <PageHero2
        mainHeading="F1 22 Standings"
        subHeading="Who's bringing home the championship?"
      />
      <F1SecondaryNavigation
      />
      <S.Section>
        <F1StandingsOuterContainer>
          <div>
            <F1StandingsMenuTitle>Other Seasons</F1StandingsMenuTitle>
            <F1StandingsMenuContainer>
              <button
                style={{
                  display: selectedSeason === "Season 1" ? "none" : "block",
                }}
                onClick={() => setSelectedSeason("Season 1")}
              >
                Season 1
              </button>
              <button
                style={{
                  display: selectedSeason === "Season 2" ? "none" : "block",
                }}
                onClick={() => setSelectedSeason("Season 2")}
              >
                Season 2
              </button>
            </F1StandingsMenuContainer>
          </div>
          <div>
            <F1StandingsMenuTitle>Other Tiers</F1StandingsMenuTitle>
            <F1StandingsMenuContainer>
              <button
                style={{
                  display: selectedTier === "Tier B" ? "none" : "block",
                }}
                onClick={() => setSelectedTier("Tier B")}
              >
                Tier B
              </button>
              <button
                style={{
                  display: selectedTier === "Tier A" ? "none" : "block",
                }}
                onClick={() => setSelectedTier("Tier A")}
              >
                Tier A
              </button>
            </F1StandingsMenuContainer>
          </div>
          <div>
          <F1StandingsMenuTitle>Other Championships</F1StandingsMenuTitle>
            <F1StandingsMenuContainer>
              <button
                style={{
                  display: selectedChampionship === "Constructors'" ? "none" : "block",
                }}
                onClick={() => setSelectedChampionship("Constructors'")}
              >
                Constructors
              </button>
              <button
                style={{
                  display: selectedChampionship === "Drivers'" ? "none" : "block",
                }}
                onClick={() => setSelectedChampionship("Drivers'")}
              >
                Drivers
              </button>
            </F1StandingsMenuContainer>
          </div>
        </F1StandingsOuterContainer>
        <F1StandingsPreTitle>{selectedSeason} - {selectedTier}</F1StandingsPreTitle>
        <F1StandingsTitle>{selectedChampionship} Championship</F1StandingsTitle>
        <F1StandingsGrid>
        <F1StandingsDrivers1A />
        <F1StandingsConstructors1A />
          {/* {selectedTier === "Tier A" && selectedSeason === "Season 1" ? (
            <>
              <F1StandingsDrivers1A /> <F1StandingsConstructors1A />
            </>
          ) : selectedTier === "Tier B" && selectedSeason === "Season 1" ? (
            <>
              <F1StandingsDrivers1B /> <F1StandingsConstructors1B />
            </>
          ) : selectedTier === "Tier A" && selectedSeason === "Season 2" ? (
            <>
              <F1StandingsDrivers2A /> <F1StandingsConstructors2A />
            </>
          ) : (
            <>
              <F1StandingsDrivers2B /> <F1StandingsConstructors2B />
            </>
          )} */}
        </F1StandingsGrid>
      </S.Section>
      <S.Section>
        <Footer />
      </S.Section>
    </>
  );
}

export default F1Standings;

const F1StandingsOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  justify-content: flex-end;
`;

const F1StandingsMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 24px;
  row-gap: 30px;
  justify-content: flex-end;
`;

const F1StandingsPreTitle = styled.h3`
  text-align: center;
  margin-top: 30px;
`;

const F1StandingsTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const F1StandingsMenuTitle = styled.h6`
  margin-bottom: 16px;
  text-align: right;
`;

const F1StandingsGrid = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 16px;
  row-gap: 30px;
  justify-content: center;
`;
