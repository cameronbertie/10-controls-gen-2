import React from "react";
import * as S from "../../styles/styles";
import styled from "styled-components";
import PageHero1 from "../../components/PageHero1";
import Video from "../../components/Video";
import FeaturedSingle from "../../components/FeaturedSingle";
import FeaturedDouble from "../../components/FeaturedDouble";
import Footer from "../../components/Footer";
import Event from "../../components/Event";
import F1SecondaryNavigation from "./F1SecondaryNavigation";

function F1() {
  return (
    <>
      <PageHero1
        smallHeading="F1 22"
        mainHeading="League Racing"
        subHeading="Two tiers. highly competitive. prize money on the line. live on twitch"
        backgroundImageURL="/content/f1-mclaren-screenshot.jpg"
      />
      <F1SecondaryNavigation />
      <Video videoEmbedURL="YH3yCDOu35U" />
      <S.Section>
        <hr />
        <h2>Why Race with 10 Controls?</h2>
        <br></br> <br></br>
        <ul>
        <li><p>TWO TIER FORMAT WITH A PROMOTION/RELEGATION SYSTEM</p></li>
        <br></br>
        <li><p> WEEKLY SCHEDULED RACES FOR BOTH TIERS</p></li>
        <br></br> <li><p>50% RACE WITH SHORT QUALIFYING</p></li>
        <br></br> <li><p>Prize Pool</p></li>
        <br></br> <li><p>Cross-platform play</p></li>
        <br></br> <li><p>We value fair racing above all</p></li>
        <br></br> <li><p>Consistent and impartial stewarding</p></li>
        <br></br>
        <li><p>All races broadcasted live on <a href="https://www.twitch.tv/10controlstv" target="_blank" rel="noreferrer">twitch</a></p></li>
        <br></br>
        <li><p>Race highlights uploaded on <a href="https://www.youtube.com/channel/UCTC5mPAHhoBq6Uv4eNIshMg" target="_blank" rel="noreferrer">YouTube</a></p></li>
        </ul>
      </S.Section>

      <S.EventSection>
        <Event
          eventName="Tier A"
          eventDescription="The pinnacle of 10 Controls F1 League Racing. the fastest and most consistent drivers, fighting for our top cash prizes."
          eventButtonText="View Calendar"
          eventButtonLink="/f1/schedule"
          eventImageURL="/content/Portugal.png"
        />
        <Event
          eventName="Tier B"
          eventDescription="The entry-level tier into 10 Controls F1 League Racing. This Competitive and Tough tier is Where aspiring drivers first leave their mark."
          eventButtonText="View Calendar"
          eventButtonLink="/f1/schedule"
          eventImageURL="/content/France.png"
        />
      </S.EventSection>
      <S.Section>
        <hr />
        <h2>Prize Pool</h2>
        <br></br>
        <br></br>
        <h6>Tier A Drivers' Championship</h6>
        <br></br>
        <PrizePoolContainer>
          <PrizePoolItem>
            <p>P1</p>
            <h1>$80</h1>
          </PrizePoolItem>
          <PrizePoolItem>
            <p>P2</p>
            <h1>$40</h1>
          </PrizePoolItem>
          <PrizePoolItem>
            <p>P3</p>
            <h1>$20</h1>
          </PrizePoolItem>
        </PrizePoolContainer>
        <br></br>
        <br></br>
        <h6>Tier B Drivers' Championship</h6>
        <br></br>
        <PrizePoolContainer>
          <PrizePoolItem>
            <p>P1</p>
            <h1>$30</h1>
          </PrizePoolItem>
          <PrizePoolItem>
            <p>P2</p>
            <h1>$20</h1>
          </PrizePoolItem>
          <PrizePoolItem>
            <p>P3</p>
            <h1>$10</h1>
          </PrizePoolItem>
        </PrizePoolContainer>
        <br></br>
        <br></br>
        <h6>Tier A Constructors' Championship</h6>
        <br></br>
        <PrizePoolContainer>
          <PrizePoolItem>
            <p>P1</p>
            <h1>$20</h1>
            <h5>$10 per driver</h5>
          </PrizePoolItem>
        </PrizePoolContainer>
        <br></br>
        <br></br>
        <h6>Tier B Constructors' Championship</h6>
        <br></br>
        <PrizePoolContainer>
          <PrizePoolItem>
            <p>P1</p>
            <h1>$10</h1>
            <h5>$5 per driver</h5>
          </PrizePoolItem>
        </PrizePoolContainer>
      </S.Section>
      <FeaturedSingle
        imageURL="/content/ferrari_williams_silverstone.png"
        heading="Find out where your favourite driver is positioned so far in this seasons 10 controls f1 drivers' championship."
        siteURL="/f1/standings"
      />
      <FeaturedDouble
        firstImageURL="/content/ferrari_singapore.png"
        firstHeading="Meet the new drivers taking part in the second season of 10 controls f1 league racing"
        firstSiteURL="/f1/teams"
        secondImageURL="/content/mclaren_melbourne.png"
        secondHeading="Check out the 10 controls season 2 f1 league race calendar"
        secondSiteURL="/f1/calendar"
      />
      <S.Section>
        <Footer />
      </S.Section>
    </>
  );
}

export default F1;

const PrizePoolContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  column-gap: 75px;

  @media (max-width: 799px) {
    column-gap: 50px;
  }
`;

const PrizePoolItem = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    font-size: 50px;
  }
`;
