import React from "react";
import * as S from "../../styles/styles";
import styled from "styled-components";
import PageHero1 from "../../components/PageHero1";
import Video from "../../components/Video";
import FeaturedSingle from "../../components/FeaturedSingle";
import FeaturedDouble from "../../components/FeaturedDouble";
import Footer from "../../components/Footer";
import Event from "../../components/Event";

function ACC() {
  return (
    <>
      <PageHero1
        smallHeading="Assetto Corse Competizione"
        mainHeading="League Racing"
        subHeading="Coming Soon To 10 Controls"
        backgroundImageURL="/content/acc-screenshot-1.jpg"
      />
      <S.Section>
        <hr />
        <h2>This section of the site is currently under construction. We are working very hard to make sure you get the very best user experience.</h2>
        <br></br>
        <p>
          In the meantime why don't you check out our F1 22 League races.
        </p>
        <br></br>
        <a href="/f1"><button>Take Me There</button></a>
      </S.Section>
      
      
      <S.Section>
        <Footer />
      </S.Section>
    </>
  );
}

export default ACC;