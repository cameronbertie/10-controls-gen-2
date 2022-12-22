import React from "react";
import * as S from "../styles/styles";
import FeaturedSingle from "../components/FeaturedSingle";
import FeaturedDouble from "../components/FeaturedDouble";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <S.Section>
        <h5>This is</h5>
        <h1>10 Controls</h1>
        <h3>EUROPE’S NEW HOME FOR COMPETITIVE GAMING AND ESPORTS TOURNAMENTS</h3>
      </S.Section>
      <FeaturedSingle
        imageURL="/rl-hero-bg.jpg"
        heading="10 Controls sets off for Season 2 of F1 22 League racing. Why not take a look at the race calendar"
        siteURL="rl/tournaments"
      />
      <FeaturedDouble
        firstImageURL="/f1-featured-image.png"
        firstHeading="Check out the 10 Controls YouTube channel for some unmissable content"
        firstSiteURL="f1/standings"
        secondImageURL="/rocket-league-feature.png"
        secondHeading="Follow 10 Controls on twitch so you don't miss our next broadcast"
        secondSiteURL="f1/standings"
      />
      <FeaturedSingle
        imageURL="/rl-hero-bg.jpg"
        heading="Meet the new drivers taking part in the second season of 10 controls f1 league racing"
        siteURL="rl/tournaments"
      />
      <FeaturedDouble
        firstImageURL="/f1-featured-image.png"
        firstHeading="ASSETTO CORSA COMPETIZIONE league races are coming to 10 controls soon"
        firstSiteURL="rl/tournaments"
        secondImageURL="/rocket-league-feature.png"
        secondHeading="Rocket League Tournaments will return to 10 controls soon"
        secondSiteURL="rl/tournaments"
      />
      <S.Section>
      <Footer />
      </S.Section>
    </>
  );
}

export default Home;
