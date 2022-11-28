import React from "react";
import * as S from "../styles/styles";
import FeaturedSingle from "./FeaturedSingle";
import FeaturedDouble from "./FeaturedDouble";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <S.Section>
        <h5>This is</h5>
        <h1>10 Controls</h1>
        <h5>EUROPE’S NEW HOME FOR COMPETITIVE GAMING AND ESPORTS TOURNAMENTS</h5>
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

export default Home;
