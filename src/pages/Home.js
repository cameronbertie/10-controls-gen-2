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
        imageURL="/content/Abu_Dhabi_3_alpine_sandwhich.png"
        heading="10 Controls sets off for Season 2 of F1 22 League racing. Take a look at the new race calendar"
        siteURL="f1/schedule"
      />
      <FeaturedDouble
        firstImageURL="/content/Alfa_Silverstone.png"
        firstHeading="Find out who are the top performing drivers in our 10 Controls racing leagues"
        firstSiteURL="/f1/standings"
        secondImageURL="/content/brazil_ferrari_aston.png"
        secondHeading="Register now to start racing with 10 Controls"
        secondSiteURL="/f1/register"
      />
      <FeaturedSingle
        imageURL="/content/haas_williams_bahrain.png"
        heading="Meet the new drivers taking part in the second season of 10 controls f1 league racing"
        siteURL="f1/teams"
      />
      <FeaturedDouble
        firstImageURL="/content/acc-screenshot-1.jpg"
        firstHeading="ASSETTO CORSA COMPETIZIONE league races are coming to 10 controls soon"
        firstSiteURL="/acc"
        secondImageURL="content/rocket-league-feature.png"
        secondHeading="Rocket League Tournaments will return to 10 controls soon"
        secondSiteURL="/rl"
      />
      <S.Section>
      <Footer />
      </S.Section>
    </>
  );
}

export default Home;
