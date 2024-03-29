import React, { useState } from "react";
import * as S from "../../../styles/styles";
import styled from "styled-components";
import PageHero2 from "../../../components/PageHero2";
import Footer from "../../../components/Footer";
import F1StandingsDrivers1A from "./season-1/tier-a/F1StandingsDrivers1A";
import F1StandingsConstructors1A from "./season-1/tier-a/F1StandingsConstructors1A";
import F1SecondaryNavigation from "../F1SecondaryNavigation";
import F1StandingsDrivers1B from "./season-1/tier-b/F1StandingsDrivers1B";
import F1StandingsDrivers2B from "./season-2/tier-b/F1StandingsDrivers2B";
import F1StandingsConstructors2B from "./season-2/tier-b/F1StandingsConstructors2B";
import F1StandingsConstructors1B from "./season-1/tier-b/F1StandingsConstructors1B";
import F1StandingsConstructors2A from "./season-2/tier-a/F1StandingsConstructors2A";
import F1StandingsDrivers2A from "./season-2/tier-a/F1StandingsDrivers2A";
import F1StandingsKeyA from "./F1StandingsKeyA";
import F1StandingsKeyB from "./F1StandingsKeyB";
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
      <F1SecondaryNavigation />
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
                  display:
                    selectedChampionship === "Constructors'" ? "none" : "block",
                }}
                onClick={() => setSelectedChampionship("Constructors'")}
              >
                Constructors
              </button>
              <button
                style={{
                  display:
                    selectedChampionship === "Drivers'" ? "none" : "block",
                }}
                onClick={() => setSelectedChampionship("Drivers'")}
              >
                Drivers
              </button>
            </F1StandingsMenuContainer>
          </div>
        </F1StandingsOuterContainer>
        <F1StandingsPreTitle>
          {selectedSeason} - {selectedTier}
        </F1StandingsPreTitle>
        <F1StandingsTitle>{selectedChampionship} Championship</F1StandingsTitle>
        <F1StandingsGrid>
          {selectedTier === "Tier A" &&
          selectedSeason === "Season 1" &&
          selectedChampionship === "Drivers'" ? (
            <F1StandingsDrivers1A />
          ) : selectedTier === "Tier A" &&
            selectedSeason === "Season 1" &&
            selectedChampionship === "Constructors'" ? (
            <F1StandingsConstructors1A />
          ) : selectedTier === "Tier B" &&
            selectedSeason === "Season 1" &&
            selectedChampionship === "Drivers'" ? (
            <F1StandingsDrivers1B />
          ) : selectedTier === "Tier B" &&
            selectedSeason === "Season 1" &&
            selectedChampionship === "Constructors'" ? (
            <F1StandingsConstructors1B />
          ) : selectedTier === "Tier A" &&
            selectedSeason === "Season 2" &&
            selectedChampionship === "Drivers'" ? (
            <F1StandingsDrivers2A />
          ) : selectedTier === "Tier A" &&
            selectedSeason === "Season 2" &&
            selectedChampionship === "Constructors'" ? (
            <F1StandingsConstructors2A />
          ) : selectedTier === "Tier B" &&
            selectedSeason === "Season 2" &&
            selectedChampionship === "Drivers'" ? (
            <F1StandingsDrivers2B />
          ) : (
            <F1StandingsConstructors2B />
          )}
          {selectedChampionship === "Drivers'" && selectedTier === "Tier A" && (
              <F1StandingsKeyA />
          )}
          {selectedChampionship === "Drivers'" && selectedTier === "Tier B" && (
              <F1StandingsKeyB />
          )}
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
  flex-wrap: wrap;
  column-gap: 60px;
  row-gap: 30px;
  justify-content: flex-start;
`;

const F1StandingsMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 24px;
  row-gap: 30px;
  justify-content: flex-start;
`;

const F1StandingsPreTitle = styled.h3`
  text-align: center;
  margin-top: 60px;
`;

const F1StandingsTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const F1StandingsMenuTitle = styled.h6`
  margin-bottom: 16px;
  text-align: left;
`;

const F1StandingsGrid = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 16px;
  row-gap: 30px;
  justify-content: center;
`;
