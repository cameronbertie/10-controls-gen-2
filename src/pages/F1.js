import React from "react";
import * as S from "../styles/styles";
import styled from "styled-components";
import PageHero1 from "../components/PageHero1";
import Video from "../components/Video";
import FeaturedSingle from "../components/FeaturedSingle";
import FeaturedDouble from "../components/FeaturedDouble";
import SecondaryNavigation from "../components/SecondaryNavigation";
import Footer from "../components/Footer";
import Event from "../components/Event";

function F1() {
  return (
    <>
      <PageHero1
        smallHeading="F1 22"
        mainHeading="League Racing"
        subHeading="Two tiers. highly competitive. prize money on the line. live on twitch"
        backgroundImageURL="/f1-mclaren-screenshot.jpg"
      />
      <SecondaryNavigation
        // Please ensure that page titles are in order of how they should be displayed. Make sure that the order of the links match their respected page titles.
        pages={["Schedule", "Teams", "Register"]}
        links={["/f1/schedule", "/f1/teams", "/f1/register"]}
      />
      <S.Section>
        <hr />
        <h2>We value fair racing above all</h2>
      </S.Section>
      <S.Section>
        <p>
          TWO TIER FORMAT WITH A PROMOTION/RELEGATION SYSTEM. WEEKLY SCHEDULED
          RACES FOR BOTH TIERS. 50% RACE WITH SHORT QUALIFYING.
        </p>
      </S.Section>
      <Video videoEmbedURL="YH3yCDOu35U" />
      <S.EventSection>
          <Event eventName="Tier A" eventDescription="This is the description" eventButtonText="View Calendar" eventButtonLink="/" eventImageURL="/rl-hero-bg.jpg" />
          <Event eventName="Tier B" eventDescription="This is the description" eventButtonText="View Calendar" eventButtonLink="/" eventImageURL="/rl-hero-bg.jpg" />
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
        // Required Image Size - 1280x720
        imageURL="/rl-hero-bg.jpg"
        heading="Rocket League Tournaments Have Returned To 10 Controls"
        siteURL="rl/tournaments"
      />
      <FeaturedDouble
        // Required Image Size - 720x720
        firstImageURL="/f1-featured-image.png"
        firstHeading="Rocket League Tournaments Have Returned To 10 Controls"
        firstSiteURL="rl/tournaments"
        secondImageURL="/rocket-league-feature.png"
        secondHeading="Rocket League Tournaments Have Returned To 10 Controls"
        secondSiteURL="rl/tournaments"
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