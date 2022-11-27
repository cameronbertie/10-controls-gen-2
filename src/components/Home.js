import React from "react";
import * as S from "../styles/styles";
import FeaturedSingle from "./FeaturedSingle";
import FeaturedDouble from "./FeaturedSingle";

function Home() {
  return (
    <>
      <S.Section>
        <S.Heading5>This is</S.Heading5>
        <S.Heading1>10 Controls</S.Heading1>
        <S.Heading5>
          EUROPE’S NEW HOME FOR COMPETITIVE GAMING AND ESPORTS TOURNAMENTS
        </S.Heading5>
      </S.Section>
      <FeaturedSingle
        // Recommended Image Size - 1280x720
        imageURL="/rl-hero-bg.jpg"
        heading="Rocket League Tournaments Have Returned To 10 Controls"
        siteURL="rl/tournaments"
      />
      <FeaturedDouble
        // Recommended Image Size -
        firstImageURL="/rl-hero-bg.jpg"
        firstHeading="Rocket League Tournaments Have Returned To 10 Controls"
        firstSiteURL="rl/tournaments"
        secondImageURL="/rl-hero-bg.jpg"
        secondHeading="Rocket League Tournaments Have Returned To 10 Controls"
        secondSiteURL="rl/tournaments"
      />

      <div className="page-content">
        <div className="featured-section-container">
          <S.RouterLink to="/f1" className="featured-content">
            <img className="featured-image-box" src="/f1-featured-image.png" />
            <S.Heading2>10 CONTROLS WELCOME F1 22 LEAGUE RACES</S.Heading2>
          </S.RouterLink>

          <S.RouterLink to="/rl" className="featured-content">
            <img
              className="featured-image-box"
              src="/rocket-league-feature.png"
            />
            <S.Heading2>
              Get Involved in our rocket league tournaments and register now
            </S.Heading2>
          </S.RouterLink>
        </div>
      </div>
      <div className="page-content">
        {/* <LatestVideos />
    <Footer /> */}
      </div>
    </>
  );
}

export default Home;
