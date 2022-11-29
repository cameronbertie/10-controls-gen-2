import React from "react";
import * as S from "../styles/styles";
import PageHero1 from "./PageHero1";
import Video from "./Video";
import FeaturedDouble from "./FeaturedDouble";
import Footer from "./Footer";

function F1() {
  return (
    <>
      <PageHero1 smallHeading="F1 22" mainHeading="League Racing" subHeading="Two tiers. highly competitive. prize money on the line. live on twitch" backgroundImageURL="/f1-mclaren-screenshot.jpg" />
      <S.Section>
        <hr/>
        <h2>We value fair racing above all</h2>
      </S.Section>
      <S.Section>
        <p>TWO TIER FORMAT WITH A PROMOTION/RELEGATION SYSTEM. WEEKLY SCHEDULED RACES FOR BOTH TIERS. 50% RACE WITH SHORT QUALIFYING.</p>
      </S.Section>
      <Video videoEmbedURL="YH3yCDOu35U"/>
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